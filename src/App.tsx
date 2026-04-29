import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BookOpen,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Radio,
  Server,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { SkillConstellation } from './components/SkillConstellation';
import {
  constellationNodes,
  domains,
  engineeringNotes,
  profile,
  projects,
  timeline,
  type ConstellationNode,
  type EngineeringNote,
  type SkillDomain,
} from './data/profile';

const SCROLL_STATE_THRESHOLD = 8;
const CONTENT_FADE_DISTANCE = 60;

const domainIcons = {
  software: Code2,
  systems: Cpu,
  data: BrainCircuit,
  product: Network,
};

function LinkIcon({ kind }: { kind: string }) {
  if (kind === 'github') {
    return <Code2 size={18} aria-hidden="true" />;
  }

  if (kind === 'linkedin') {
    return <Network size={18} aria-hidden="true" />;
  }

  return <Mail size={18} aria-hidden="true" />;
}

function DomainPanel({ domain }: { domain: SkillDomain }) {
  const Icon = domainIcons[domain.id as keyof typeof domainIcons] ?? Terminal;

  return (
    <article className="domain-card">
      <div className="domain-card__header">
        <span className="domain-card__icon" style={{ color: domain.color }}>
          <Icon size={24} aria-hidden="true" />
        </span>
        <div>
          <p>{domain.shortLabel}</p>
          <h3>{domain.label}</h3>
        </div>
      </div>
      <p>{domain.summary}</p>
      <div className="skill-list" aria-label={`${domain.label} skills`}>
        {domain.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}

function NodeInspector({ node }: { node: ConstellationNode }) {
  return (
    <aside className="node-inspector" aria-live="polite">
      <div className="node-inspector__hud">
        <div className="node-inspector__readout">
          <p className="section-kicker">
            <Radio size={15} aria-hidden="true" />
            Signal
          </p>
          <h2>{node.label}</h2>
          <p className="node-inspector__domain">{node.domain}</p>
        </div>
        <div className="node-inspector__meta">
          <span>{node.kind}</span>
          <span style={{ color: node.color }}>Live</span>
        </div>
      </div>
      <p className="node-inspector__detail">{node.detail}</p>
    </aside>
  );
}

function EngineeringNotePanel({
  note,
  expanded,
  onToggle,
}: {
  note: EngineeringNote;
  expanded: boolean;
  onToggle: () => void;
}) {
  const panelId = `note-panel-${note.id}`;

  return (
    <article className={`note-card${expanded ? ' is-expanded' : ''}`}>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="note-card__meta">{note.domain}</span>
        <span className="note-card__title">{note.title}</span>
        <span className="note-card__summary">{note.summary}</span>
        <span className="note-card__tags" aria-label={`${note.title} tags`}>
          {note.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </span>
        <ChevronDown className="note-card__chevron" size={18} aria-hidden="true" />
      </button>
      <div className="note-card__body" id={panelId} hidden={!expanded} aria-hidden={!expanded}>
        {note.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

function App() {
  const [selectedNode, setSelectedNode] = useState<ConstellationNode>(constellationNodes[0]);
  const [expandedNoteId, setExpandedNoteId] = useState(engineeringNotes[0]?.id ?? '');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const selectedNodeId = selectedNode.id;

  const stats = useMemo(
    () => [
      { value: '4', label: 'technical domains' },
      { value: '15+', label: 'profile nodes' },
      { value: '5', label: 'curated project records' },
    ],
    [],
  );
  const contentOpacity = Math.min(scrollProgress * 1.25, 1);
  const constellationOpacity = Math.max(0.16, 1 - scrollProgress * 1.25);
  const constellationBlur = `${Math.min(scrollProgress * 7, 7)}px`;
  const constellationBrightness = Math.max(0.7, 1.12 - scrollProgress * 0.42);
  const constellationSaturation = Math.max(0.75, 1.12 - scrollProgress * 0.37);
  const signalOpacity = Math.max(0, 1 - scrollProgress * 2.2);
  const atmosphereOpacity = 0.22 + scrollProgress * 0.78;
  const hiddenContentAmount = 1 - contentOpacity;
  const headerOffset = `${hiddenContentAmount * -0.6}rem`;
  const heroOffset = `${hiddenContentAmount * 1.6}rem`;
  const sectionOffset = `${hiddenContentAmount * 1.2}rem`;
  const scrollToConstellation = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState(null, '', '#constellation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const updateScrollState = () => {
      const nextProgress = Math.min(window.scrollY / CONTENT_FADE_DISTANCE, 1);

      setIsScrolled(window.scrollY > SCROLL_STATE_THRESHOLD);
      setScrollProgress(nextProgress);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <main
      id="constellation"
      className={`app-shell${isScrolled ? ' is-scrolled' : ''}`}
      style={
        {
          '--scroll-progress': scrollProgress,
          '--content-opacity': contentOpacity,
          '--constellation-opacity': constellationOpacity,
          '--constellation-blur': constellationBlur,
          '--constellation-brightness': constellationBrightness,
          '--constellation-saturation': constellationSaturation,
          '--signal-opacity': signalOpacity,
          '--atmosphere-opacity': atmosphereOpacity,
          '--header-offset': headerOffset,
          '--hero-offset': heroOffset,
          '--section-offset': sectionOffset,
        } as CSSProperties
      }
    >
      <div className="constellation-layer">
        <SkillConstellation
          selectedNodeId={selectedNodeId}
          onSelectNode={setSelectedNode}
          paused={isScrolled}
        />
      </div>
      <div className="page-atmosphere" aria-hidden="true" />

      <div className="page-layer">
        <header className="site-header">
          <a className="brand-mark" href="#profile" aria-label="Project Mou home">
            <span>M</span>
            <strong>Project Mou</strong>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#constellation" onClick={scrollToConstellation}>
              Constellation
            </a>
            <a href="#profile-map">Profile</a>
            <a href="#projects">Projects</a>
            <a href="#notes">Notes</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero-section" id="profile">
          <div className="hero-copy">
            <p className="section-kicker">
              <Sparkles size={16} aria-hidden="true" />
              {profile.role}
            </p>
            <h1>{profile.name}</h1>
            <p className="hero-copy__headline">{profile.headline}</p>
            <p className="hero-copy__summary">{profile.summary}</p>

            <div className="hero-actions" aria-label="Profile actions">
              <a className="primary-action" href="#constellation" onClick={scrollToConstellation}>
                <Network size={18} aria-hidden="true" />
                View knowledge map
              </a>
              <a className="secondary-action" href="#contact">
                <Mail size={18} aria-hidden="true" />
                Contact
              </a>
            </div>

            <div className="profile-meta" aria-label="Profile metadata">
              <span>
                <MapPin size={16} aria-hidden="true" />
                {profile.location}
              </span>
              <span>
                <GraduationCap size={16} aria-hidden="true" />
                Computer Engineering
              </span>
            </div>
          </div>

          <div className="hero-signal">
            <NodeInspector node={selectedNode} />
          </div>

          <a className="scroll-indicator" href="#profile-map" aria-label="Scroll to technical profile">
            <span>Scroll</span>
            <i aria-hidden="true" />
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </section>

        <section className="metrics-strip" aria-label="Portfolio summary">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          <p>{profile.availability}</p>
        </section>

        <section className="content-section" id="profile-map">
          <div className="section-heading">
            <p className="section-kicker">
              <Database size={16} aria-hidden="true" />
              Technical profile
            </p>
            <h2>Knowledge presented as connected engineering capacity.</h2>
          </div>
          <div className="domain-grid">
            {domains.map((domain) => (
              <DomainPanel key={domain.id} domain={domain} />
            ))}
          </div>
        </section>

        <section className="content-section split-section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">
              <Server size={16} aria-hidden="true" />
              Project evidence
            </p>
            <h2>Replace these slots with the strongest proof from your degree and builds.</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div>
                  <p>{project.domain}</p>
                  <h3>{project.name}</h3>
                </div>
                <span>{project.status}</span>
                <p>{project.summary}</p>
                <div className="skill-list" aria-label={`${project.name} stack`}>
                  {project.stack.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <strong>{project.impact}</strong>
                <div className="project-links" aria-label={`${project.name} links`}>
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href}>
                      {link.kind === 'repo' ? (
                        <Code2 size={15} aria-hidden="true" />
                      ) : (
                        <ExternalLink size={15} aria-hidden="true" />
                      )}
                      {link.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section notes-section" id="notes">
          <div className="section-heading">
            <p className="section-kicker">
              <BookOpen size={16} aria-hidden="true" />
              Engineering notes
            </p>
            <h2>Short field notes on AI, data, products, and systems.</h2>
          </div>
          <div className="notes-list">
            {engineeringNotes.map((note) => (
              <EngineeringNotePanel
                key={note.id}
                note={note}
                expanded={expandedNoteId === note.id}
                onToggle={() => setExpandedNoteId(note.id)}
              />
            ))}
          </div>
        </section>

        <section className="content-section timeline-section">
          <div className="section-heading">
            <p className="section-kicker">
              <GraduationCap size={16} aria-hidden="true" />
              Graduate signal
            </p>
            <h2>A clean story for recruiters, engineers, and interview loops.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.title}>
                <span>{item.period}</span>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="site-footer" id="contact">
          <div>
            <p className="section-kicker">
              <Terminal size={16} aria-hidden="true" />
              Contact surface
            </p>
            <h2>Make the next step easy to inspect.</h2>
            <p>
              The repository set behind this profile is intentionally curated: public links are inspectable, private-prep projects are named only when cleanup is still in progress.
            </p>
          </div>
          <div className="footer-links" aria-label="External links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} title={link.label}>
                <LinkIcon kind={link.kind} />
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
            <a href="https://github.com/Alomair02/Mou" title="Project repository">
              <Code2 size={18} aria-hidden="true" />
              Repository
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
