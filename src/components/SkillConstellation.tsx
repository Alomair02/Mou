import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import { Float, Line, OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
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

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener('change', updatePreference);

    return () => media.removeEventListener('change', updatePreference);
  }, []);

  return reducedMotion;
}

function useCompactViewport() {
  const [compactViewport, setCompactViewport] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 720px)');
    const updateViewport = () => setCompactViewport(media.matches);
    updateViewport();
    media.addEventListener('change', updateViewport);

    return () => media.removeEventListener('change', updateViewport);
  }, []);

  return compactViewport;
}

function NodeMarker({
  node,
  isSelected,
  onSelect,
  paused = false,
}: {
  node: ConstellationNode;
  isSelected: boolean;
  onSelect: (node: ConstellationNode) => void;
  paused?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const baseScale = node.scale ?? 0.85;

  useFrame(({ clock }) => {
    if (!groupRef.current || paused) {
      return;
    }

    const pulse = Math.sin(clock.elapsedTime * 2.2 + node.position[0]) * 0.035;
    const selectedBoost = isSelected ? 0.22 : 0;
    const nextScale = baseScale + pulse + selectedBoost;
    groupRef.current.scale.setScalar(nextScale);
  });

  const handlePointer = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onSelect(node);
  };

  return (
    <group ref={groupRef} position={node.position}>
      <mesh
        onClick={handlePointer}
        onPointerOver={handlePointer}
        onPointerDown={(event) => event.stopPropagation()}
      >
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshBasicMaterial color={node.color} toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isSelected ? 1.3 : 0.55}
          transparent
          opacity={isSelected ? 0.24 : 0.12}
          roughness={0.2}
        />
      </mesh>
      <mesh scale={isSelected ? 1.3 : 1}>
        <ringGeometry args={[0.38, 0.4, 48]} />
        <meshBasicMaterial color={node.color} transparent opacity={isSelected ? 0.65 : 0.28} />
      </mesh>
      <Suspense fallback={null}>
        <Text
          position={[0, -0.55, 0]}
          fontSize={0.2}
          color="#f8f4e8"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.008}
          outlineColor="#10100f"
        >
          {node.label}
        </Text>
      </Suspense>
    </group>
  );
}

function ConstellationScene({
  selectedNodeId,
  onSelectNode,
  paused = false,
}: SkillConstellationProps) {
  const reducedMotion = usePrefersReducedMotion();
  const compactViewport = useCompactViewport();
  const scenePaused = paused || reducedMotion;
  const networkRef = useRef<THREE.Group>(null);
  const nodeById = useMemo(
    () => new Map(constellationNodes.map((node) => [node.id, node])),
    [],
  );
  const networkPosition: [number, number, number] = compactViewport
    ? [0, 1.08, 0]
    : [0.1, -0.02, 0];
  const networkScale = compactViewport ? 0.74 : 1.04;

  useFrame(({ clock }) => {
    if (!networkRef.current || scenePaused) {
      return;
    }

    networkRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.16) * 0.08;
    networkRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.035;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 4, 4]} intensity={14} color="#f8f4e8" />
      <pointLight position={[-4, -3, 2]} intensity={7} color="#58d6a3" />
      <Stars radius={34} depth={20} count={420} factor={0.75} saturation={0} fade speed={scenePaused ? 0 : 0.18} />
      <Float speed={scenePaused ? 0 : 1.25} rotationIntensity={scenePaused ? 0 : 0.08} floatIntensity={scenePaused ? 0 : 0.25}>
        <group ref={networkRef} position={networkPosition} scale={networkScale}>
          {constellationEdges.map((edge) => {
            const from = nodeById.get(edge.from);
            const to = nodeById.get(edge.to);

            if (!from || !to) {
              return null;
            }

            const isSelected = edge.from === selectedNodeId || edge.to === selectedNodeId;

            return (
              <Line
                key={`${edge.from}-${edge.to}`}
                points={[from.position, to.position]}
                color={isSelected ? '#f8f4e8' : '#8c8a80'}
                lineWidth={isSelected ? 2.2 : 1.1}
                transparent
                opacity={isSelected ? 0.88 : 0.36}
              />
            );
          })}

          {constellationNodes.map((node) => (
            <NodeMarker
              key={node.id}
              node={node}
              isSelected={node.id === selectedNodeId}
              onSelect={onSelectNode}
              paused={scenePaused}
            />
          ))}
        </group>
      </Float>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enabled={!paused}
        minDistance={6.2}
        maxDistance={11}
        autoRotate={false}
      />
    </>
  );
}

export function SkillConstellation({
  selectedNodeId,
  onSelectNode,
  paused = false,
}: SkillConstellationProps) {
  return (
    <div className="constellation-canvas" aria-label="Interactive skill constellation">
      <Canvas
        camera={{ position: [0, 0.15, 10.15], fov: 54 }}
        dpr={[1, 1.8]}
        frameloop={paused ? 'demand' : 'always'}
        gl={{ alpha: true, antialias: true }}
        fallback={
          <div className="constellation-fallback">
            <span />
            <span />
            <span />
            <strong>Knowledge map</strong>
            <p>WebGL is unavailable in this browser session.</p>
          </div>
        }
      >
        <ConstellationScene
          selectedNodeId={selectedNodeId}
          onSelectNode={onSelectNode}
          paused={paused}
        />
      </Canvas>
    </div>
  );
}
