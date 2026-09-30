export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  icon: string; // key used to look up an icon component
}

export const services: Service[] = [
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    shortDescription:
      "Production-grade AI systems built with the same rigor as the rest of your stack.",
    description:
      "We treat AI engineering as an engineering discipline first. That means version-controlled experiments, reproducible training pipelines, and models that are monitored and rolled back like any other production service. Our team designs the scaffolding around your models — data contracts, evaluation harnesses, deployment pipelines — so that the intelligent parts of your product are as dependable as the rest of it.",
    bullets: [
      "Model selection, fine-tuning, and evaluation frameworks",
      "Training and inference pipelines built for repeatability",
      "Observability, drift detection, and rollback strategy",
      "Cost and latency optimization across model serving",
    ],
    icon: "cpu",
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    shortDescription:
      "Classical and modern ML for forecasting, classification, and decision support.",
    description:
      "Not every problem needs a foundation model. We build lean, interpretable machine learning systems — gradient boosting, time-series forecasting, recommendation engines — where they outperform heavier tooling on cost, latency, and explainability. Our approach starts with the business question, not the algorithm.",
    bullets: [
      "Forecasting, scoring, and classification pipelines",
      "Feature engineering and data quality tooling",
      "Model explainability for regulated environments",
      "A/B testing and offline evaluation frameworks",
    ],
    icon: "chart",
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    shortDescription:
      "Vision systems for inspection, detection, and real-time understanding.",
    description:
      "From defect detection on a production line to real-time object tracking in a live video feed, we build vision systems that hold up outside the lab. Our work spans classical CV techniques and modern vision-language models, chosen based on what the deployment environment actually demands — edge hardware, lighting variance, latency budgets.",
    bullets: [
      "Object detection, tracking, and segmentation",
      "Optical character recognition and document parsing",
      "Edge deployment on constrained hardware",
      "Vision-language models for scene understanding",
    ],
    icon: "eye",
  },
  {
    slug: "natural-language-processing",
    title: "Natural Language Processing",
    shortDescription:
      "Understanding, extracting, and structuring meaning from unstructured text.",
    description:
      "Long before large language models, NLP meant careful pipelines for extracting structure from unstructured text — and that discipline still matters. We build entity extraction, classification, and summarization systems tuned to your domain vocabulary, whether that's clinical notes, legal contracts, or support tickets.",
    bullets: [
      "Entity extraction and document classification",
      "Summarization and semantic search",
      "Domain-specific fine-tuning on proprietary text",
      "Multilingual pipelines and localization support",
    ],
    icon: "type",
  },
  {
    slug: "end-to-end-ai-solutions",
    title: "End-to-End AI Solutions",
    shortDescription:
      "From data pipeline to deployed product, owned by a single accountable team.",
    description:
      "Many AI initiatives stall in the handoff between the team that builds the model and the team that ships the product. We remove that seam. A single CacheBrains team takes a solution from data architecture through model development to a deployed, monitored product — with one point of accountability the whole way through.",
    bullets: [
      "Discovery, scoping, and technical feasibility review",
      "Data architecture and pipeline construction",
      "Model development through to production deployment",
      "Ongoing monitoring and iteration post-launch",
    ],
    icon: "layers",
  },
  {
    slug: "automations",
    title: "Automations",
    shortDescription:
      "Removing manual, repetitive work from operational and back-office processes.",
    description:
      "A large share of the value in applied AI isn't glamorous — it's automating the manual reconciliation, data entry, and approval routing that quietly consumes hours every week. We map these workflows, identify where automation is safe and where a human should stay in the loop, and build systems that are boring in the best way: reliable.",
    bullets: [
      "Workflow mapping and automation feasibility audits",
      "Document and data-entry automation",
      "Human-in-the-loop approval and exception handling",
      "Integration with existing operational tooling",
    ],
    icon: "workflow",
  },
  {
    slug: "rag",
    title: "Retrieval-Augmented Generation (RAG)",
    shortDescription:
      "Grounding language models in your own documents, data, and policies.",
    description:
      "RAG lets a language model answer with your organization's actual knowledge instead of its training data alone. We design the retrieval layer — chunking strategy, embedding choice, ranking, and citation — with as much care as the generation layer, because a RAG system is only as good as what it retrieves.",
    bullets: [
      "Document ingestion and chunking strategy design",
      "Embedding model selection and vector store architecture",
      "Retrieval ranking, re-ranking, and citation handling",
      "Evaluation harnesses for answer accuracy and grounding",
    ],
    icon: "search",
  },
  {
    slug: "llm-agentic-systems",
    title: "LLM & Agentic AI Systems",
    shortDescription:
      "Multi-step, tool-using systems that plan, act, and check their own work.",
    description:
      "Agentic systems extend a language model with tools, memory, and a planning loop so it can complete multi-step tasks rather than answer a single prompt. We design these systems with explicit guardrails: bounded tool permissions, verification steps, and clear fallback behavior when the agent is uncertain.",
    bullets: [
      "Tool-use design and function-calling architecture",
      "Multi-agent orchestration and task planning",
      "Guardrails, permissioning, and human escalation paths",
      "Prompt and context engineering for reliability",
    ],
    icon: "network",
  },
  {
    slug: "voice-agents",
    title: "Voice Agents",
    shortDescription:
      "Conversational voice systems for support, intake, and scheduling.",
    description:
      "Voice remains the hardest interface to get right — latency, interruption handling, and tone all have to work together in real time. We build voice agents on modern speech-to-text and text-to-speech pipelines, tuned for the specific call flows they need to handle, from appointment scheduling to first-line support triage.",
    bullets: [
      "Real-time speech-to-text and text-to-speech pipelines",
      "Call flow design and interruption handling",
      "Integration with scheduling, CRM, and ticketing systems",
      "Escalation logic to human agents",
    ],
    icon: "mic",
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDescription:
      "The application layer that makes AI capability usable by real people.",
    description:
      "A model is not a product. We build the web applications, APIs, and internal tools that wrap AI capability into something a team can actually use day to day — with the same attention to code quality, testing, and maintainability we'd bring to any software project, AI or not.",
    bullets: [
      "Full-stack web application development",
      "API design and backend architecture",
      "Internal tooling and admin dashboards",
      "Code quality, testing, and long-term maintainability",
    ],
    icon: "code",
  },
  {
    slug: "ai-integration-legacy-systems",
    title: "AI Integration into Legacy Systems",
    shortDescription:
      "Bringing modern AI capability into decades-old, mission-critical infrastructure.",
    description:
      "Most organizations don't get to build on a blank slate — they run on systems written decades ago that are too critical to replace outright. This is where our team's background in mainframe, COBOL, and enterprise database systems matters: we know how to introduce AI capability at the edges of a legacy system without destabilizing the core it depends on.",
    bullets: [
      "Legacy system assessment and integration mapping",
      "API layers over mainframe and COBOL systems",
      "Incremental modernization without full rewrites",
      "Risk management for mission-critical infrastructure",
    ],
    icon: "server",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
