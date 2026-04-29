export type ProfileLink = {
  label: string;
  href: string;
  kind: 'github' | 'linkedin' | 'email' | 'resume';
};

export type SkillDomain = {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  summary: string;
  skills: string[];
};

export type Project = {
  name: string;
  domain: string;
  status: string;
  repoStatus: 'public' | 'private-prep' | 'archived';
  summary: string;
  stack: string[];
  impact: string;
  links: ProjectLink[];
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: 'repo' | 'case-study';
};

export type TimelineItem = {
  label: string;
  period: string;
  title: string;
  summary: string;
};

export type ConstellationNodeKind =
  | 'identity'
  | 'domain'
  | 'skill'
  | 'project'
  | 'education'
  | 'tool';

export type ConstellationNode = {
  id: string;
  label: string;
  kind: ConstellationNodeKind;
  domain: string;
  detail: string;
  color: string;
  position: [number, number, number];
  scale?: number;
};

export type ConstellationEdge = {
  from: string;
  to: string;
};

export const profile = {
  name: 'Mou',
  role: 'Fresh Computer Engineering Graduate',
  location: 'Dammam, Saudi Arabia',
  headline:
    'A systems-minded engineer mapping software, hardware, data, and product thinking into practical builds.',
  summary:
    'Project Mou is a living technical profile: a curated GitHub surface, a knowledge graph, and a portfolio interface for projects that can be inspected, discussed, and improved.',
  availability: 'Portfolio cleanup in progress for graduate roles, internships, and early-career engineering teams',
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/Alomair02',
      kind: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdulazizom',
      kind: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:abdulaziz.t.alomair@gmail.com',
      kind: 'email',
    },
  ] satisfies ProfileLink[],
};

export const domains: SkillDomain[] = [
  {
    id: 'software',
    label: 'Software Engineering',
    shortLabel: 'Software',
    color: '#58d6a3',
    summary:
      'Designing maintainable applications with clean state, typed interfaces, testing discipline, and readable architecture.',
    skills: ['TypeScript', 'React', 'API design', 'Testing', 'Git workflows'],
  },
  {
    id: 'systems',
    label: 'Systems and Embedded',
    shortLabel: 'Systems',
    color: '#f3b45c',
    summary:
      'Reasoning close to the machine through circuits, microcontrollers, operating systems, and performance constraints.',
    skills: ['C/C++', 'Microcontrollers', 'Digital logic', 'Linux', 'Networking'],
  },
  {
    id: 'data',
    label: 'AI and Data',
    shortLabel: 'AI/Data',
    color: '#9f8cff',
    summary:
      'Building useful intelligence from models, data pipelines, evaluation, and careful product framing.',
    skills: ['Python', 'ML basics', 'Data analysis', 'Model evaluation', 'Automation'],
  },
  {
    id: 'product',
    label: 'Product Delivery',
    shortLabel: 'Product',
    color: '#ff7d66',
    summary:
      'Turning ambiguous ideas into usable interfaces, scoped releases, documented decisions, and deployable outcomes.',
    skills: ['UX thinking', 'Documentation', 'Deployment', 'Agile planning', 'Communication'],
  },
];

export const projects: Project[] = [
  {
    name: 'Project Mou',
    domain: 'Product Delivery',
    status: 'Public portfolio hub',
    repoStatus: 'public',
    summary:
      'A deployed React and WebGL portfolio that turns repositories, skills, coursework, and career direction into an inspectable technical map.',
    stack: ['React', 'TypeScript', 'Vite', 'React Three Fiber'],
    impact: 'Standardizes the GitHub profile around a clean portfolio-first surface.',
    links: [{ label: 'Repository', href: 'https://github.com/Alomair02/Mou', kind: 'repo' }],
  },
  {
    name: 'Flybee Platform',
    domain: 'Software Engineering',
    status: 'Backend private-prep, iOS private-prep',
    repoStatus: 'private-prep',
    summary:
      'A travel planning product with an iOS client, Go backend, social circles, media flows, place discovery, and chat control-plane services.',
    stack: ['Swift', 'Go', 'PostgreSQL', 'XMPP'],
    impact: 'Shows full-stack product architecture, API design, mobile integration, and operational cleanup discipline.',
    links: [
      { label: 'Backend private-prep', href: 'https://github.com/Alomair02/flybee-backend', kind: 'case-study' },
      { label: 'iOS private-prep', href: 'https://github.com/Alomair02/Flybee', kind: 'case-study' },
    ],
  },
  {
    name: 'ESP32 Video Interpolation',
    domain: 'Systems and Embedded',
    status: 'Public repository',
    repoStatus: 'public',
    summary:
      'Real-time ESP32-S3 camera streaming over TCP with server-side frame interpolation and a gesture-recognition CNN.',
    stack: ['ESP32-S3', 'MicroPython', 'OpenCV', 'PyTorch'],
    impact: 'Connects embedded constraints, networking, image processing, and model training in one system.',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/Alomair02/esp32-video-streaming-interpolation',
        kind: 'repo',
      },
    ],
  },
  {
    name: 'OS CPU Scheduler',
    domain: 'Systems and Embedded',
    status: 'Public repository',
    repoStatus: 'public',
    summary:
      'A C systems project for CPU scheduling behavior, workload simulation, and testable operating-systems concepts.',
    stack: ['C', 'Make', 'Scheduling', 'Systems testing'],
    impact: 'Provides a compact public systems artifact with source, tests, and reproducible workflows.',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/Alomair02/os-project-cpu-scheduler',
        kind: 'repo',
      },
    ],
  },
  {
    name: 'Credit Analyst RAG',
    domain: 'AI and Data',
    status: 'Private-prep',
    repoStatus: 'private-prep',
    summary:
      'A retrieval-augmented analysis prototype being held private after a clean history rebuild until its exposed API key is rotated and the implementation is filled out.',
    stack: ['Python', 'RAG', 'Database retrieval', 'Streamlit'],
    impact: 'Keeps the AI showcase visible as a case-study slot without exposing unsafe repository history.',
    links: [
      {
        label: 'Private-prep repo',
        href: 'https://github.com/Alomair02/credit-analyst-rag',
        kind: 'case-study',
      },
    ],
  },
];

export const timeline: TimelineItem[] = [
  {
    label: 'Education',
    period: 'Fresh Graduate',
    title: 'Computer Engineering',
    summary:
      'Core foundation across programming, digital systems, hardware, networks, databases, algorithms, and engineering design.',
  },
  {
    label: 'Practice',
    period: 'Project-Based',
    title: 'Build, test, explain',
    summary:
      'Portfolio emphasis is on projects that can be opened, inspected, discussed, and connected back to engineering decisions.',
  },
  {
    label: 'Direction',
    period: 'Next Role',
    title: 'Software, systems, or AI product engineering',
    summary:
      'Targeting teams where a broad computer engineering foundation is useful: product software, backend systems, embedded platforms, or AI-enabled tooling.',
  },
];

export const constellationNodes: ConstellationNode[] = [
  {
    id: 'mou',
    label: 'Mou',
    kind: 'identity',
    domain: 'Core',
    detail: 'Computer engineering graduate with a broad technical foundation and a build-focused portfolio.',
    color: '#f8f4e8',
    position: [0, 0, 0],
    scale: 1.35,
  },
  {
    id: 'software',
    label: 'Software',
    kind: 'domain',
    domain: 'Software Engineering',
    detail: domains[0].summary,
    color: domains[0].color,
    position: [-2.8, 1.25, -0.4],
    scale: 1.05,
  },
  {
    id: 'systems',
    label: 'Systems',
    kind: 'domain',
    domain: 'Systems and Embedded',
    detail: domains[1].summary,
    color: domains[1].color,
    position: [2.75, 1.05, 0.2],
    scale: 1.05,
  },
  {
    id: 'data',
    label: 'AI/Data',
    kind: 'domain',
    domain: 'AI and Data',
    detail: domains[2].summary,
    color: domains[2].color,
    position: [-2.2, -1.75, 0.55],
    scale: 1.05,
  },
  {
    id: 'product',
    label: 'Product',
    kind: 'domain',
    domain: 'Product Delivery',
    detail: domains[3].summary,
    color: domains[3].color,
    position: [2.2, -1.55, -0.5],
    scale: 1.05,
  },
  {
    id: 'react',
    label: 'React',
    kind: 'skill',
    domain: 'Software Engineering',
    detail: 'Interface engineering, component systems, typed state, routing, and production build workflows.',
    color: '#58d6a3',
    position: [-4.05, 2.25, -0.1],
  },
  {
    id: 'backend',
    label: 'APIs',
    kind: 'skill',
    domain: 'Software Engineering',
    detail: 'HTTP APIs, data modeling, service boundaries, authentication patterns, and deployable backend structure.',
    color: '#58d6a3',
    position: [-4.45, 0.2, 0.65],
  },
  {
    id: 'embedded',
    label: 'Embedded',
    kind: 'skill',
    domain: 'Systems and Embedded',
    detail: 'Microcontrollers, sensor interfaces, low-level debugging, and hardware-aware software constraints.',
    color: '#f3b45c',
    position: [4.1, 2.05, 0.75],
  },
  {
    id: 'linux',
    label: 'Linux',
    kind: 'tool',
    domain: 'Systems and Embedded',
    detail: 'Command-line development, networking tools, services, scripting, and operational debugging.',
    color: '#f3b45c',
    position: [4.35, 0, -0.65],
  },
  {
    id: 'python',
    label: 'Python',
    kind: 'skill',
    domain: 'AI and Data',
    detail: 'Automation, data processing, model experiments, notebooks, and practical scripting workflows.',
    color: '#9f8cff',
    position: [-3.75, -2.75, -0.55],
  },
  {
    id: 'evaluation',
    label: 'Evaluation',
    kind: 'skill',
    domain: 'AI and Data',
    detail: 'Testing model behavior with clear success criteria, benchmark cases, and failure analysis.',
    color: '#9f8cff',
    position: [-1.15, -3.05, 1.0],
  },
  {
    id: 'delivery',
    label: 'Delivery',
    kind: 'skill',
    domain: 'Product Delivery',
    detail: 'Scoping, documentation, deployment, demos, and communication that make technical work legible.',
    color: '#ff7d66',
    position: [3.6, -2.55, 0.3],
  },
  {
    id: 'capstone',
    label: 'ESP32',
    kind: 'project',
    domain: 'Featured Project',
    detail: 'Embedded video streaming, TCP framing, interpolation, and hand-gesture classification in one inspectable systems build.',
    color: '#ffffff',
    position: [0.95, 2.8, 0.8],
    scale: 1.15,
  },
  {
    id: 'fullstack',
    label: 'Flybee',
    kind: 'project',
    domain: 'Featured Project',
    detail: 'Travel planning product architecture across iOS, Go APIs, PostgreSQL, media, social features, and chat services.',
    color: '#ffffff',
    position: [-1.15, 2.95, -0.7],
    scale: 1.15,
  },
  {
    id: 'education',
    label: 'CE Degree',
    kind: 'education',
    domain: 'Education',
    detail: 'Computer engineering foundation across hardware, software, systems, data, and engineering design.',
    color: '#66d9ff',
    position: [0.15, -2.95, -0.75],
    scale: 1.15,
  },
];

export const constellationEdges: ConstellationEdge[] = [
  { from: 'mou', to: 'software' },
  { from: 'mou', to: 'systems' },
  { from: 'mou', to: 'data' },
  { from: 'mou', to: 'product' },
  { from: 'software', to: 'react' },
  { from: 'software', to: 'backend' },
  { from: 'software', to: 'fullstack' },
  { from: 'systems', to: 'embedded' },
  { from: 'systems', to: 'linux' },
  { from: 'systems', to: 'capstone' },
  { from: 'data', to: 'python' },
  { from: 'data', to: 'evaluation' },
  { from: 'product', to: 'delivery' },
  { from: 'product', to: 'fullstack' },
  { from: 'capstone', to: 'embedded' },
  { from: 'capstone', to: 'education' },
  { from: 'education', to: 'data' },
  { from: 'education', to: 'systems' },
  { from: 'fullstack', to: 'react' },
  { from: 'fullstack', to: 'backend' },
];
