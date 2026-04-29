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

export type EngineeringNote = {
  id: string;
  title: string;
  domain: string;
  summary: string;
  tags: string[];
  body: string[];
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

export const engineeringNotes: EngineeringNote[] = [
  {
    id: 'flybee-locality-data',
    title: 'Turning Locality Data Into Tourism Products',
    domain: 'Tourism Tech, AI, and Data',
    summary:
      'How high-quality data about places, context, timing, and user intent can become close-to-user travel software.',
    tags: ['Tourism tech', 'Locality data', 'Ranking', 'Personalization'],
    body: [
      'Tourism products become useful when they understand locality beyond a place name. A good travel system needs structured data about venues, geography, opening context, popularity signals, trip timing, social intent, and what a user is trying to do in the moment.',
      'The interesting engineering problem is transforming those sources into product behavior. Search results need ranking, not just retrieval. Recommendations need context, not just a list of attractions. Planning flows need to account for distance, time, density, and whether a place fits the trip. AI is most valuable when it sits on top of grounded data and turns local signals into explanations, suggestions, and next actions users can trust.',
      'Flybee is the product lens for that direction: tourism tech where data quality, AI-assisted reasoning, and mobile UX meet. The goal is not to show a model for its own sake, but to build travel experiences that feel local, practical, and close to the user.',
    ],
  },
  {
    id: 'retrieval-before-generation',
    title: 'Retrieval Before Generation',
    domain: 'NLP and RAG',
    summary:
      'Why useful AI systems depend first on ingestion quality, retrieval behavior, grounding, and evaluation.',
    tags: ['NLP', 'RAG', 'Evaluation', 'Grounding'],
    body: [
      'For retrieval-augmented systems, generation is the visible layer, but retrieval is where most product quality is decided. If documents are chunked poorly, indexed without useful metadata, or retrieved with weak ranking, the model receives the wrong context and produces confident but fragile answers.',
      'I think about RAG as a data product before an LLM product. The system should make ingestion explicit, keep source boundaries clear, rank evidence by usefulness, and expose enough traceability to evaluate failure cases. That makes the final answer easier to trust and easier to improve.',
      'The same pattern applies outside document QA: when an AI feature is close to real user decisions, the important questions are what data grounds the system, what gets retrieved, how relevance is measured, and how the user can tell when the system is uncertain.',
    ],
  },
  {
    id: 'computer-vision-realtime',
    title: 'Computer Vision Under Real-Time Constraints',
    domain: 'Computer Vision and Edge Systems',
    summary:
      'What changes when image processing, interpolation, and gesture recognition have to work with live device constraints.',
    tags: ['Computer vision', 'ESP32', 'Latency', 'PyTorch'],
    body: [
      'Computer vision feels different when the input is a live constrained device instead of a clean offline dataset. The ESP32 streaming project forced the system to care about packet framing, unreliable timing, camera quality, Wi-Fi behavior, and the cost of every processing step.',
      'The pipeline combines embedded capture, TCP streaming, server-side frame handling, interpolation, and a lightweight gesture classifier. That creates a useful engineering tradeoff: better visual smoothness and recognition quality have to be balanced against latency and robustness.',
      'That constraint is valuable. It turns CV from a notebook result into an end-to-end system where networking, model behavior, UI responsiveness, and hardware limits all matter at the same time.',
    ],
  },
  {
    id: 'data-pipeline-decision-support',
    title: 'From Data Pipeline to Decision Support',
    domain: 'Data Science',
    summary:
      'How raw data becomes useful only after preparation, feature design, measurement, and product framing.',
    tags: ['Data pipelines', 'Features', 'Metrics', 'Decision support'],
    body: [
      'A data science project is only useful if its outputs help someone decide or act. That means the pipeline matters as much as the model: collection, preparation, feature design, validation, and presentation all shape whether the result becomes usable.',
      'I try to frame data work around the decision it supports. What signal is the user missing? What error would be costly? What metric shows improvement? Those questions keep the implementation connected to usefulness instead of stopping at a score or chart.',
      'This is the bridge I want my portfolio to show: not only building models, but turning data into practical systems that can be inspected, evaluated, and improved.',
    ],
  },
  {
    id: 'embedded-product-constraints',
    title: 'Embedded Software Meets Product Constraints',
    domain: 'Embedded SWE',
    summary:
      'Protocol design, reliability, and hardware limits are product concerns when software touches the physical world.',
    tags: ['Embedded', 'Protocols', 'Reliability', 'Networking'],
    body: [
      'Embedded work makes constraints concrete. Memory, timing, camera bandwidth, connectivity, and recovery behavior are not background details; they define what the product can feel like.',
      'That is why I like designing simple explicit protocols around device behavior. A framed stream, clear commands, reconnection logic, and predictable fallback behavior make the system easier to debug and easier to trust.',
      'The broader lesson is that embedded software is still product software. The user experiences the reliability of the whole system, not the elegance of one isolated component.',
    ],
  },
  {
    id: 'project-mou-interface',
    title: 'Project Mou as a Technical Interface',
    domain: 'SWE and System Design',
    summary:
      'Why this portfolio is structured as an inspectable interface instead of a static resume page.',
    tags: ['React', 'System design', 'Portfolio', 'UX'],
    body: [
      'Project Mou is built as an interface because a technical portfolio should make relationships visible. Skills, projects, domains, and direction are more useful when they can be scanned as a connected system rather than read as a long static page.',
      'The constellation is not just visual decoration. It is a way to show how software engineering, AI and data, systems, and product delivery connect across the work. The rest of the page then gives recruiters and engineers a practical path from high-level signal to concrete project evidence.',
      'That structure reflects how I want to present myself: broad computer engineering foundation, but organized around useful products and inspectable engineering decisions.',
    ],
  },
  {
    id: 'cpu-scheduling-systems-lens',
    title: 'CPU Scheduling as a Systems Lens',
    domain: 'Operating Systems',
    summary:
      'A compact way to reason about fairness, throughput, latency, simulation, and testable systems behavior.',
    tags: ['C', 'Scheduling', 'Operating systems', 'Simulation'],
    body: [
      'CPU scheduling is a small topic with a large systems lesson: every policy encodes tradeoffs. Optimizing for responsiveness, fairness, throughput, or simplicity changes how the system behaves under load.',
      'A scheduler project is useful because the behavior can be simulated, tested, and compared. Workloads make assumptions visible, and test cases expose whether the implementation matches the policy.',
      'It sits lower in my current positioning than AI, data, and product systems, but it still matters. It shows comfort with fundamentals and with reasoning about system behavior through code.',
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
