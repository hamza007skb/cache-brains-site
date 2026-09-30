import mentorhubImage from "@/assets/project-mentorhub.jpg";
import zamLawImage from "@/assets/project-zam-law.jpg";
import roomstateImage from "@/assets/project-roomstate.jpg";
import penscanImage from "@/assets/project-penscan.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  tag: string;
  summary: string;
  image: string;
  screenshots?: string[]; // Prototype / UI screenshots shown in a gallery
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  highlights: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: "mentorhub",
    title: "MentorHub",
    category: "EdTech Platforms",
    tag: "Learning & Mentorship",
    summary:
      "A microservices-based platform connecting students with verified tutors through AI-driven matching and real-time sessions.",
    image: mentorhubImage,
    screenshots: [mentorhubImage],
    overview:
      "MentorHub is a full-stack learning platform built to connect students with verified tutors at scale. Rather than a single monolith, it's architected as a set of independently deployable services — React on the front end, .NET and Spring Boot handling core domains, and a Python service powering AI-driven recommendations — all routed through an Ocelot API Gateway.",
    challenge:
      "Matching students with the right tutor, verifying credentials, and supporting live sessions all demand different kinds of reliability and scale — a single service handling authentication, matching, and real-time messaging would become a bottleneck and a single point of failure as usage grew.",
    solution:
      "We split the platform into domain-driven services communicating through a gateway, secured access with JWT plus OTP verification, and layered in an AI recommendation engine to surface the right tutors. Real-time messaging and session coordination run on SignalR, with the whole system containerized in Docker and shipped through GitHub Actions pipelines backed by PostgreSQL.",
    result:
      "The result is a platform that mirrors how production ed-tech systems are actually built — independently scalable services, automated deployment, and AI-assisted matching — and a deep, hands-on grounding in distributed systems and Domain-Driven Design.",
    highlights: [
      "Domain-driven services behind an Ocelot API gateway",
      "AI recommendation engine for student–tutor matching",
      "Real-time sessions and messaging over SignalR",
      "Containerized delivery through GitHub Actions pipelines",
    ],
    stack: [
      "React",
      ".NET",
      "Spring Boot",
      "Python",
      "SignalR",
      "Ocelot API Gateway",
      "Docker",
      "PostgreSQL",
      "GitHub Actions",
      "JWT + OTP Auth",
    ],
  },
  {
    slug: "zam-ai-law-agent",
    title: "LexAI",
    category: "Legal Tech / RAG",
    tag: "Legal Research",
    summary:
      "An AI co-counsel for Pakistani legal professionals — automating statute lookup, precedent retrieval, and document drafting.",
    image: zamLawImage,
    screenshots: [zamLawImage],
    overview:
      "LexAI Law Agent is a full-stack legal assistant built for the Pakistani judicial system. It acts as a digital co-counsel, automating the research-heavy parts of case preparation so legal professionals can spend less time hunting for statutes and precedent and more time on strategy.",
    challenge:
      "Case preparation in the Pakistani legal system involves manually cross-referencing evidence against statutes and prior rulings scattered across local legal databases — a slow, error-prone process, especially when evidence arrives as scanned documents rather than searchable text.",
    solution:
      "The platform pairs a React front end with a Node.js and MongoDB backend for auth and storage, while the core intelligence runs on a Python and FastAPI service. That service uses Google Cloud Vision for OCR to pull text straight out of uploaded evidence, then LangChain-orchestrated Retrieval-Augmented Generation to cross-reference it against local legal databases and surface relevant statutes and precedent automatically.",
    result:
      "Legal professionals get statute identification, precedent retrieval, and drafting support in a fraction of the time manual research would take — with a decoupled architecture that keeps the OCR/RAG pipeline free to evolve independently of the core application.",
    highlights: [
      "OCR pipeline that reads scanned evidence into searchable text",
      "LangChain RAG over local statute and precedent databases",
      "Citation-backed answers lawyers can verify",
      "Drafting support for routine case documents",
    ],
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "FastAPI",
      "LangChain",
      "Google Cloud Vision OCR",
      "RAG",
    ],
  },
  {
    slug: "roomstate-ai",
    title: "RoomState AI",
    category: "Generative AI / Computer Vision",
    tag: "Interior Design",
    summary:
      "Upload a photo of any room and redesign it with AI — restyle walls, swap materials, remove objects, all while preserving structure and lighting.",
    image: roomstateImage,
    screenshots: [roomstateImage],
    overview:
      "RoomState AI is an AI-powered interior design assistant: upload a photo of a room and reshape it — new styles, wall and floor colors and textures, material swaps, object removal or replacement — without regenerating the whole image from scratch each time.",
    challenge:
      "Most generative image tools redraw the entire scene for every edit, which means small changes wreck the room's geometry, lighting, and everything the user didn't ask to change — unusable for a real design workflow where edits need to compose and stay consistent.",
    solution:
      "We built a persistent RoomState representation of the scene that every edit reads from and writes back to, so changes can be layered, reversed, and combined consistently. A pipeline combining segmentation, depth and normal estimation, deterministic image processing, and diffusion models identifies exactly which region or object an edit targets and applies it while preserving everything else — structure, geometry, lighting included.",
    result:
      "The end-to-end platform spans a web app, mobile app, backend API, and the AI inference pipeline itself, giving users a design tool that behaves like real editing software rather than a one-shot image generator.",
    highlights: [
      "Persistent scene state so edits compose instead of collide",
      "Segmentation plus depth estimation for precise object targeting",
      "Structure and lighting preserved across every edit",
      "Web app, mobile app, API, and inference pipeline in one system",
    ],
    stack: [
      "Computer Vision",
      "Segmentation Models",
      "Depth / Normal Estimation",
      "Diffusion Models",
      "React",
      "Mobile App",
      "Python",
      "FastAPI",
    ],
  },
  {
    slug: "penscan",
    title: "PenScan",
    category: "Autonomous Cybersecurity",
    tag: "Penetration Testing",
    summary:
      "An AI-powered autonomous penetration testing platform that automates reconnaissance, attack planning, and execution via coordinated AI agents.",
    image: penscanImage,
    screenshots: [penscanImage],
    overview:
      "PenScan simulates a human penetration tester end-to-end — reconnaissance, vulnerability analysis, attack planning, execution, and feedback — by coordinating specialized AI agents that operate real security tools inside an isolated Kali Linux Docker environment.",
    challenge:
      "Traditional vulnerability scanning is rule-based and shallow: it flags known signatures but can't reason about attack paths the way a human tester connects findings across a target's infrastructure.",
    solution:
      "Built on Python, FastAPI, and LangGraph, PenScan's agents share a Neo4j knowledge graph that structures reconnaissance data as it's gathered, letting later agents make context-aware decisions instead of working from a flat log. LLM-driven reasoning and retrieval-augmented generation over structured security knowledge guide planning and execution, with continuous feedback looping reconnaissance, planning, and execution agents together.",
    result:
      "The result is a modular, extensible platform for authorized security assessments and pentesting-lab research — built with room to grow into ML-based vulnerability prediction, episodic memory, and multi-agent collaboration.",
    highlights: [
      "Specialized agents coordinated through LangGraph",
      "Neo4j knowledge graph shared across the agent pipeline",
      "Real security tooling inside an isolated Kali container",
      "Continuous recon → plan → execute feedback loop",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Neo4j",
      "Kali Linux",
      "Docker",
      "RAG",
      "LLM Agents",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
