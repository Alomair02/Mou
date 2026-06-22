import { useEffect, useRef } from 'react';
import {
  constellationEdges,
  constellationNodes,
  type ConstellationNode,
} from '../data/profile';

type SkillConstellationProps = {
  selectedNodeId: string;
  onSelectNode: (node: ConstellationNode) => void;
  paused?: boolean;
};

type Point = { x: number; y: number };

type CanvasState = {
  width: number;
  height: number;
  time: number;
  hoverId: string | null;
  raf: number;
  positions: Record<string, Point>;
};

// Pixel radius within which a pointer is considered to be "on" a node.
const HIT_RADIUS = 24;

// A lightweight 2D port of the knowledge map: accent nodes drifting on the
// blueprint grid, hairline edges, hover/active glow, and click-to-select.
// Rendered to a <canvas> so it carries no three.js / WebGL dependency.
export function SkillConstellation({
  selectedNodeId,
  onSelectNode,
  paused = false,
}: SkillConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<CanvasState>({
    width: 0,
    height: 0,
    time: 0,
    hoverId: null,
    raf: 0,
    positions: {},
  });

  // Keep the latest props in refs so the render loop reads current values
  // without tearing down and re-initialising the canvas on every change.
  const selectedRef = useRef(selectedNodeId);
  const pausedRef = useRef(paused);
  const onSelectRef = useRef(onSelectNode);
  selectedRef.current = selectedNodeId;
  pausedRef.current = paused;
  onSelectRef.current = onSelectNode;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const state = stateRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const host = canvas.parentElement ?? canvas;
      const rect = host.getBoundingClientRect();
      state.width = rect.width;
      state.height = rect.height;
      canvas.width = state.width * dpr;
      canvas.height = state.height * dpr;
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const project = (node: ConstellationNode): Point => {
      const cx = state.width * 0.5;
      const cy = state.height * 0.46;
      const spread = Math.min(state.width, state.height * 1.6) * 0.46;
      const drift = pausedRef.current || reduceMotion ? 0 : 1;
      const [nx, ny] = node.point;
      const dx = Math.sin(state.time * 0.0006 + nx * 5) * 5 * drift;
      const dy = Math.cos(state.time * 0.0005 + ny * 5) * 5 * drift;
      return { x: cx + nx * spread + dx, y: cy + ny * spread * 0.92 + dy };
    };

    const draw = () => {
      ctx.clearRect(0, 0, state.width, state.height);

      const positions: Record<string, Point> = {};
      constellationNodes.forEach((node) => {
        positions[node.id] = project(node);
      });

      constellationEdges.forEach((edge) => {
        const from = positions[edge.from];
        const to = positions[edge.to];
        if (!from || !to) {
          return;
        }

        const lit =
          state.hoverId === edge.from ||
          state.hoverId === edge.to ||
          selectedRef.current === edge.from ||
          selectedRef.current === edge.to;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = lit ? 'rgba(152, 255, 210, 0.24)' : 'rgba(135, 148, 140, 0.1)';
        ctx.lineWidth = lit ? 1.2 : 1;
        ctx.stroke();
      });

      constellationNodes.forEach((node) => {
        const point = positions[node.id];
        const base = 3.5 * (node.scale ?? 1);
        const active = state.hoverId === node.id || selectedRef.current === node.id;
        const radius = base + (active ? 1.8 : 0);

        ctx.shadowColor = node.color;
        ctx.shadowBlur = active ? 13 : 6;
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (active || node.kind === 'identity' || node.kind === 'domain') {
          ctx.font = '500 11px "IBM Plex Mono", monospace';
          ctx.fillStyle = active ? '#f8f4e8' : 'rgba(201, 195, 180, 0.6)';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, point.x, point.y - radius - 7);
        }
      });

      state.positions = positions;
      state.time += 16;
      state.raf = requestAnimationFrame(draw);
    };
    state.raf = requestAnimationFrame(draw);

    const hitTest = (mx: number, my: number): ConstellationNode | null => {
      let best: ConstellationNode | null = null;
      let bestDistance = HIT_RADIUS;
      constellationNodes.forEach((node) => {
        const point = state.positions[node.id];
        if (!point) {
          return;
        }
        const distance = Math.hypot(point.x - mx, point.y - my);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = node;
        }
      });
      return best;
    };

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const node = hitTest(event.clientX - rect.left, event.clientY - rect.top);
      state.hoverId = node ? node.id : null;
      canvas.style.cursor = node ? 'pointer' : 'default';
    };

    const onClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const node = hitTest(event.clientX - rect.left, event.clientY - rect.top);
      if (node) {
        onSelectRef.current(node);
      }
    };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="constellation-canvas" aria-label="Interactive skill constellation">
      <canvas ref={canvasRef} />
    </div>
  );
}
