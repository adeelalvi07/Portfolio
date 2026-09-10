export const profile = {
  name: "Muhammad Adeel",
  role: "Artificial Intelligence Undergraduate",
  tagline: "Building Intelligent AI Systems for Real-World Problems",
  email: "adeel444alvi@gmail.com",
  phone: "+92 336 2447035",
  github: "https://github.com/adeelalvi07",
  linkedin: "https://www.linkedin.com/in/muhammadadeelroshaan/",
  resumeUrl: "/resume.pdf",
  location: "Rawalpindi, Pakistan",
};

export const typingRoles = [
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Retrieval-Augmented Generation",
  "AI Automation",
  "AI Agents",
];

export const orbitTech = [
  "Python",
  "JavaScript",
  "C++",
  "SQL",
  "FastAPI",
  "React",
  "Next.js",
  "Node.js",
  "OpenCV",
  "Scikit-learn",
  "Sentence Transformers",
  "FAISS",
  "XGBoost",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Pydantic",
  "JWT",
  "Git",
  "GitHub",
  "Postman",
  "Figma",
  "VS Code",
  "Google Colab",
  "Groq",
  "ElevenLabs",
  "n8n",
];

export const stats = [
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Internship", value: 10, suffix: " wks" },
];

export const about = {
  paragraphs: [
    "I'm an Artificial Intelligence undergraduate at Air University, currently building end-to-end intelligent systems that combine machine learning, computer vision, and language models with production-grade engineering.",
    "During a 10-week technical internship at Software Productivity Strategists, Inc. (SPS), I worked across multiple software and development tracks, strengthening how I collaborate and ship in a remote engineering environment.",
    "My work spans disease-prediction platforms, real-time computer vision pipelines, and retrieval-augmented chatbots — with a growing focus on healthcare AI, AI SaaS products, and autonomous AI agents that can reason, retrieve, and act.",
  ],
  interests: [
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "RAG Systems",
    "Healthcare AI",
    "AI SaaS",
    "AI Agents",
  ],
};

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C++", "SQL", "Assembly"],
  },
  {
    category: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "RAG",
      "Explainable AI",
      "Transfer Learning",
      "Multimodal AI",
    ],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "REST APIs", "Pydantic", "JWT"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js",  "HTML5", "CSS3", "Streamlit"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    category: "AI Automation",
    items: ["FAISS", "n8n", "Groq", "ElevenLabs"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Google Colab", "VS Code",  "Figma"],
  },
  {
    category: "Currently Exploring",
    items: ["PostgreSQL", "Voice AI", "AI SaaS", "Agentic Workflows"],
    highlight: true,
  },
];

export const timeline = [
  {
    year: "2023",
    title: "Started BS Artificial Intelligence",
    org: "Air University",
    description:
      "Began undergraduate studies in AI, laying the foundation in programming, mathematics, and data structures.",
  },
  {
    year: "2024",
    title: "Machine Learning & Computer Vision",
    org: "Coursework & Projects",
    description:
      "Built classical ML pipelines and CV systems, including real-time detection and OCR-based applications.",
  },
  {
    year: "2024",
    title: "NLP & Information Retrieval",
    org: "Coursework & Projects",
    description:
      "Explored language modeling, N-Gram systems, and the fundamentals of retrieval-augmented generation.",
  },
  {
    year: "2025",
    title: "Full Stack AI Development",
    org: "Personal Projects",
    description:
      "Combined FastAPI, React, and MongoDB with ML models to ship complete, deployable AI products.",
  },
  {
    year: "2025",
    title: "Technical Internship",
    org: "Software Productivity Strategists, Inc. (SPS)",
    description:
      "Completed a 10-week remote internship across multiple software and development tracks.",
  },
  {
    year: "Now",
    title: "Building AI Agents",
    org: "Current Focus",
    description:
      "Designing autonomous AI agents and agentic workflows that reason, retrieve, and take action.",
  },
];

export const projects = [
  {
    title: "MediAssist",
    subtitle: "Smart Medical Assistant System",
    description:
      "A clinical AI platform combining Scikit-Learn multi-disease diagnostic models, an NLP & RAG-powered medical guidance bot, and a NetworkX shortest-path hospital locator for emergency response.",
    tech: ["Scikit-learn", "NLP & RAG", "NetworkX", "Python", "FastAPI"],
    metrics: { latency: "< 180ms", architecture: "RAG + Graph Search" },
    image: "/images/projects/mediassist.jpg",
    github: "https://github.com/adeelalvi07",
    featured: true,
  },
  {
    title: "Automatic Number Plate Recognition",
    subtitle: "Real-Time Computer Vision System",
    description:
      "High-throughput license plate detection pipeline running at 15–25 FPS across live webcam feeds and video streams, powered by OpenCV object detection, OCR extraction, and Streamlit analytics.",
    tech: ["OpenCV", "Tesseract OCR", "Streamlit", "Python", "Computer Vision"],
    metrics: { latency: "15-25 FPS", architecture: "CV Pipeline + OCR" },
    image: "/images/projects/anpr.jpg",
    github: "https://github.com/adeelalvi07",
    featured: true,
  },
  {
    title: "Auto Complete System",
    subtitle: "N-Gram Language Model from Scratch",
    description:
      "Foundational NLP next-word prediction engine built from first principles in Python, featuring custom tokenization, Out-of-Vocabulary (OOV) handling, and Laplace smoothing probability estimation.",
    tech: ["Python", "NLP", "N-Gram Models", "Probability Estimation"],
    metrics: { latency: "< 12ms", architecture: "NLP Preprocessing" },
    image: "/images/projects/autocomplete.jpg",
    github: "https://github.com/adeelalvi07",
    featured: false,
  },
  {
    title: "AI Chatbot for US Plumbing Business",
    subtitle: "Commercial AI Assistant & Booking System",
    description:
      "Customer-facing AI conversational assistant deployed for a US plumbing service business, featuring FastAPI REST endpoints, SQLite persistence, automated appointment scheduling, and alert dispatches.",
    tech: ["FastAPI", "SQLite", "Embeddable JS", "REST APIs", "Python"],
    metrics: { latency: "< 220ms", architecture: "FastAPI + Webhooks" },
    image: "/images/projects/plumbing.jpg",
    github: "https://github.com/adeelalvi07",
    featured: true,
  },
  {
    title: "Heart Disease Prediction",
    subtitle: "Full-Stack ML Application",
    description:
      "Production-ready medical ML service wrapping a tuned Random Forest classifier behind a high-performance FastAPI server, React dashboard, JWT authentication, and MongoDB storage.",
    tech: ["React", "FastAPI", "MongoDB", "JWT", "Random Forest"],
    metrics: { latency: "< 95ms", architecture: "FastAPI + React + Mongo" },
    image: "/images/projects/heart_disease.jpg",
    github: "https://github.com/adeelalvi07",
    featured: true,
  },
  {
    title: "DeepCure",
    subtitle: "Multi-Disease Diagnostic Platform",
    description:
      "Unified multi-model diagnostic engine capable of predicting 7 clinical conditions from patient vitals, intelligently routing query inputs across model ensembles behind a single unified interface.",
    tech: ["Scikit-learn", "Python", "Ensemble Models", "Clinical AI"],
    metrics: { latency: "< 150ms", architecture: "Unified Model Router" },
    image: "/images/projects/deepcure.jpg",
    github: "https://github.com/adeelalvi07",
    featured: false,
  },
  {
    title: "Chess via Socket Programming",
    subtitle: "Networked Concurrent Systems Game",
    description:
      "Low-level 2-player client-server chess platform with TCP socket communication over LAN, implementing game state synchronization, concurrency handling, and move validation.",
    tech: ["Python", "Sockets", "TCP/IP", "Concurrency"],
    metrics: { latency: "< 5ms LAN", architecture: "Client-Server Socket" },
    image: "/images/projects/chess.jpg",
    github: "https://github.com/adeelalvi07",
    featured: false,
  },
];

export const experience = [
  {
    role: "Technical Intern",
    org: "Software Productivity Strategists, Inc. (SPS)",
    location: "Remote",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Completed a structured 10-week technical internship across multiple software and development tracks.",
      "Demonstrated adaptability, technical learning, and professional collaboration in a remote software engineering environment.",
      "Contributed to assigned technical tasks while strengthening practical development and workflow management skills.",
    ],
  },
];

export const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI — Coursera",
    date: "Jul 2025",
  },
  {
    title: "Generative AI: Introduction and Application",
    issuer: "IBM — Coursera",
    date: "Jul 2025",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM — Coursera",
    date: "Aug 2025",
  },
  {
    title: "Oracle Fusion AI Agent Studio Foundations Associate",
    issuer: "Oracle",
    date: "2025",
  },
];

export const education = {
  school: "Air University, Islamabad",
  degree: "Bachelor of Science in Artificial Intelligence",
  period: "Sep 2023 – Present",
  cgpa: "2.97 / 4.00",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Information Retrieval",
    "Data Structures & Algorithms",
    "Full Stack Web Development",
    "Database Systems",
  ],
};
