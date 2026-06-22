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
  point: [number, number];
  scale?: number;
};

export type ConstellationEdge = {
  from: string;
  to: string;
};

export const profile = {
  name: 'Abdulaziz',
  role: 'Data Science & Production Engineering',
  location: 'Dammam, Saudi Arabia',
  headline: 'Domain-driven data science, built down the stack to production.',
  summary:
    'Abdulaziz starts from a domain’s real requirements, models the data to fit its story, then installs each layer down the stack until the work ships as a production-grade product.',
  availability: 'Open to data science, ML, and full-stack production engineering roles.',
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
    {
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1cqDHmYJWUeMEJCwetF6XhyXHr0EF_KyB/view?usp=sharing',
      kind: 'resume',
    },
  ] satisfies ProfileLink[],
};

export const domains: SkillDomain[] = [
  {
    id: 'data',
    label: 'Data Science & ML',
    shortLabel: 'Data Sci',
    color: '#9f8cff',
    summary:
      'Modeling data around the domain’s story — pipelines, evaluation, and validation you can trust.',
    skills: ['Python', 'ML modeling', 'Data analysis', 'Model validation', 'Experimentation'],
  },
  {
    id: 'product',
    label: 'Production Delivery',
    shortLabel: 'Product',
    color: '#ff7d66',
    summary:
      'Taking scoped, documented work all the way to a deployed, maintainable production product.',
    skills: ['Deployment', 'API design', 'Documentation', 'UX thinking', 'Release scoping'],
  },
  {
    id: 'software',
    label: 'Software Engineering',
    shortLabel: 'Software',
    color: '#58d6a3',
    summary:
      'Typed, tested applications with clean state and architecture that holds up in production.',
    skills: ['TypeScript', 'React', 'API design', 'Testing', 'Git workflows'],
  },
  {
    id: 'systems',
    label: 'Systems & Embedded',
    shortLabel: 'Systems',
    color: '#f3b45c',
    summary:
      'Reasoning close to the machine: microcontrollers, operating systems, and performance limits.',
    skills: ['C/C++', 'Microcontrollers', 'Digital logic', 'Linux', 'Networking'],
  },
];

export const projects: Project[] = [
  {
    name: 'Blitz',
    domain: 'Data Science & ML',
    status: 'Public',
    repoStatus: 'public',
    summary:
      'GPU-accelerated actuarial reserving: parses loss triangles, runs AMD HIP bootstrap chain-ladder simulations, and validates IBNR distributions against observed outcomes.',
    stack: ['AMD HIP', 'ROCm', 'Python', 'Bootstrap simulation'],
    impact: 'Domain data, GPU parallelism, and model validation taken to a runnable result.',
    links: [{ label: 'Repository', href: 'https://github.com/Alomair02/Blitz', kind: 'repo' }],
  },
  {
    name: 'Flybee Platform',
    domain: 'Production Delivery',
    status: 'Private-prep',
    repoStatus: 'private-prep',
    summary:
      'A travel-planning product across an iOS client, Go backend, social graph, media flows, and chat services.',
    stack: ['Swift', 'Go', 'PostgreSQL', 'XMPP'],
    impact: 'Full-stack production architecture from mobile UX down to the API and data layers.',
    links: [
      { label: 'Backend', href: 'https://github.com/Alomair02/flybee-backend', kind: 'case-study' },
      { label: 'iOS', href: 'https://github.com/Alomair02/Flybee', kind: 'case-study' },
    ],
  },
  {
    name: 'ESP32 Video Interpolation',
    domain: 'Systems & Embedded',
    status: 'Public',
    repoStatus: 'public',
    summary:
      'Real-time ESP32-S3 camera streaming over TCP with server-side frame interpolation and a gesture-recognition CNN.',
    stack: ['ESP32-S3', 'MicroPython', 'OpenCV', 'PyTorch'],
    impact: 'Embedded capture, networking, image processing, and model training in one running system.',
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
    domain: 'Systems & Embedded',
    status: 'Public',
    repoStatus: 'public',
    summary:
      'A C systems project for CPU scheduling behavior, workload simulation, and testable operating-systems concepts.',
    stack: ['C', 'Make', 'Scheduling', 'Systems testing'],
    impact: 'A compact public systems artifact with source, tests, and reproducible workflows.',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/Alomair02/os-project-cpu-scheduler',
        kind: 'repo',
      },
    ],
  },
  {
    name: 'Project Mou',
    domain: 'Production Delivery',
    status: 'Public',
    repoStatus: 'public',
    summary:
      'A deployed React and WebGL portfolio that turns repositories, skills, and direction into an inspectable technical map.',
    stack: ['React', 'TypeScript', 'Vite', 'React Three Fiber'],
    impact: 'A portfolio-first surface, designed and shipped end to end.',
    links: [{ label: 'Repository', href: 'https://github.com/Alomair02/Mou', kind: 'repo' }],
  },
  {
    name: 'Credit Analyst RAG',
    domain: 'Data Science & ML',
    status: 'Private-prep',
    repoStatus: 'private-prep',
    summary:
      'A retrieval-augmented analysis prototype held private after a clean history rebuild until its exposed key is rotated and the implementation is filled out.',
    stack: ['Python', 'RAG', 'Database retrieval', 'Streamlit'],
    impact: 'Keeps the data-science showcase visible without exposing unsafe repository history.',
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
    id: 'blitz-parallel-actuarial-modeling',
    title: 'Embarrassingly Parallel Finance Models',
    domain: 'GPU Computing and Actuarial Data',
    summary:
      'How Blitz frames reserving work as a parallel data problem: many independent scenarios, large input volumes, and repeatable validation loops.',
    tags: ['GPU', 'Monte Carlo', 'Actuarial', 'Parallel data'],
    body: [
      'A lot of financial and actuarial modeling becomes practical when the work is framed as independent scenario evaluation. One policy, one company, one accident year, one bootstrap trial, or one simulation path can often be computed without waiting on the others. That makes the problem embarrassingly parallel: the hard part is not inventing dependency-heavy logic, it is moving data cleanly, launching enough work, and validating the outputs.',
      'Blitz is a small inspectable version of that idea. It parses insurance loss triangles, sends compact arrays to AMD HIP kernels, and runs thousands of bootstrap reserve projections in parallel. The same shape appears at industry scale when teams process millions or billions of rows across pricing, reserving, capital modeling, stress testing, fraud signals, market risk, and stochastic cash-flow projections.',
      'Monte Carlo-derived models are especially suited to this pattern because they are built from repeated runs. You can tune assumptions, change priors, vary overdispersion, test stress cases, compare calibration, and rerun the model many times. Each iteration becomes more valuable when the compute layer is fast enough to make experimentation routine instead of exceptional.',
      'The engineering lesson is that model quality depends on more than the formula. Data layout, reproducible pipelines, runtime performance, diagnostics, and test cases all decide whether a model can be trusted. In actuarial work, that trust matters because the outputs connect directly to reserves, solvency, risk margins, and management decisions.',
    ],
  },
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
    label: 'Foundation',
    period: 'Computer Engineering',
    title: 'Hardware to software',
    summary:
      'A full-stack base across programming, digital systems, networks, databases, and engineering design.',
  },
  {
    label: 'Practice',
    period: 'Production',
    title: 'Build, validate, ship',
    summary:
      'Taking data science down the stack into running, inspectable, production-grade systems.',
  },
  {
    label: 'Direction',
    period: 'Next role',
    title: 'Data science & production engineering',
    summary:
      'Teams shipping data-driven products end to end — modeling, backend, and delivery.',
  },
];

const domainById = (id: string): SkillDomain => {
  const match = domains.find((domain) => domain.id === id);
  if (!match) {
    throw new Error(`Unknown domain id: ${id}`);
  }
  return match;
};

export const constellationNodes: ConstellationNode[] = [
  {
    id: 'mou',
    label: 'Abdulaziz',
    kind: 'identity',
    domain: 'Core',
    detail: 'Computer engineer working data science down the stack into production-grade products.',
    color: '#f8f4e8',
    point: [0, 0],
    scale: 1.35,
  },
  {
    id: 'software',
    label: 'Software',
    kind: 'domain',
    domain: 'Software Engineering',
    detail: domainById('software').summary,
    color: domainById('software').color,
    point: [-0.46, -0.3],
    scale: 1.05,
  },
  {
    id: 'systems',
    label: 'Systems',
    kind: 'domain',
    domain: 'Systems & Embedded',
    detail: domainById('systems').summary,
    color: domainById('systems').color,
    point: [0.45, -0.26],
    scale: 1.05,
  },
  {
    id: 'data',
    label: 'Data Sci',
    kind: 'domain',
    domain: 'Data Science & ML',
    detail: domainById('data').summary,
    color: domainById('data').color,
    point: [-0.37, 0.34],
    scale: 1.05,
  },
  {
    id: 'product',
    label: 'Product',
    kind: 'domain',
    domain: 'Production Delivery',
    detail: domainById('product').summary,
    color: domainById('product').color,
    point: [0.37, 0.3],
    scale: 1.05,
  },
  {
    id: 'react',
    label: 'React',
    kind: 'skill',
    domain: 'Software Engineering',
    detail: 'Interface engineering, component systems, typed state, routing, and production build workflows.',
    color: '#58d6a3',
    point: [-0.68, -0.52],
  },
  {
    id: 'backend',
    label: 'APIs',
    kind: 'skill',
    domain: 'Software Engineering',
    detail: 'HTTP APIs, data modeling, service boundaries, authentication patterns, and deployable backend structure.',
    color: '#58d6a3',
    point: [-0.74, -0.04],
  },
  {
    id: 'embedded',
    label: 'Embedded',
    kind: 'skill',
    domain: 'Systems and Embedded',
    detail: 'Microcontrollers, sensor interfaces, low-level debugging, and hardware-aware software constraints.',
    color: '#f3b45c',
    point: [0.69, -0.49],
  },
  {
    id: 'linux',
    label: 'Linux',
    kind: 'tool',
    domain: 'Systems and Embedded',
    detail: 'Command-line development, networking tools, services, scripting, and operational debugging.',
    color: '#f3b45c',
    point: [0.73, 0],
  },
  {
    id: 'python',
    label: 'Python',
    kind: 'skill',
    domain: 'AI and Data',
    detail: 'Automation, data processing, model experiments, notebooks, and practical scripting workflows.',
    color: '#9f8cff',
    point: [-0.63, 0.62],
  },
  {
    id: 'evaluation',
    label: 'Evaluation',
    kind: 'skill',
    domain: 'AI and Data',
    detail: 'Testing model behavior with clear success criteria, benchmark cases, and failure analysis.',
    color: '#9f8cff',
    point: [-0.19, 0.7],
  },
  {
    id: 'delivery',
    label: 'Delivery',
    kind: 'skill',
    domain: 'Product Delivery',
    detail: 'Scoping, documentation, deployment, demos, and communication that make technical work legible.',
    color: '#ff7d66',
    point: [0.6, 0.58],
  },
  {
    id: 'capstone',
    label: 'ESP32',
    kind: 'project',
    domain: 'Featured Project',
    detail: 'Embedded video streaming, TCP framing, interpolation, and hand-gesture classification in one inspectable systems build.',
    color: '#ffffff',
    point: [0.16, -0.66],
    scale: 1.15,
  },
  {
    id: 'fullstack',
    label: 'Flybee',
    kind: 'project',
    domain: 'Featured Project',
    detail: 'Travel planning product architecture across iOS, Go APIs, PostgreSQL, media, social features, and chat services.',
    color: '#ffffff',
    point: [-0.19, -0.7],
    scale: 1.15,
  },
  {
    id: 'blitz',
    label: 'Blitz',
    kind: 'project',
    domain: 'Featured Project',
    detail:
      'AMD HIP actuarial reserving sandbox for parsing insurance loss triangles, running bootstrap IBNR simulations, and validating uncertainty against observed outcomes.',
    color: '#ffffff',
    point: [-0.39, 0.74],
    scale: 1.12,
  },
  {
    id: 'education',
    label: 'COE Degree',
    kind: 'education',
    domain: 'Education',
    detail: 'Computer engineering foundation across hardware, software, systems, data, and engineering design.',
    color: '#66d9ff',
    point: [0.03, 0.68],
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
  { from: 'data', to: 'blitz' },
  { from: 'blitz', to: 'python' },
  { from: 'blitz', to: 'evaluation' },
  { from: 'systems', to: 'blitz' },
  { from: 'product', to: 'delivery' },
  { from: 'product', to: 'fullstack' },
  { from: 'capstone', to: 'embedded' },
  { from: 'capstone', to: 'education' },
  { from: 'education', to: 'data' },
  { from: 'education', to: 'systems' },
  { from: 'fullstack', to: 'react' },
  { from: 'fullstack', to: 'backend' },
];
