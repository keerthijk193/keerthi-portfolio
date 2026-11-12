export interface Project {
  id: string;
  title: string;
  year: string;
  category: 'data-engineering' | 'ai-ml' | 'backend' | 'cybersecurity';
  categoryLabel: string;
  tagline: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  honors?: string[];
}

export interface CertificationCategory {
  provider: string;
  iconName: string;
  badgeCount: number;
  certifications: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Working Knowledge';
    subskills?: string[];
  }[];
}

export const PERSONAL_INFO = {
  name: "Keerthi J K",
  initials: "KJK",
  title: "Data Engineer & Python Backend Developer",
  headline: "Computer Science Engineer | Building Scalable Data Pipelines, SCD Type 2 Warehouses, and AI Systems",
  location: "Bengaluru, Karnataka, India",
  email: "keerthijk193@gmail.com",
  phone: "+91 6361360788",
  phoneDisplay: "+91 6361360788",
  linkedin: "https://linkedin.com/in/keerthi-j-k-765522309",
  linkedinHandle: "keerthi-j-k-765522309",
  github: "https://github.com/keerthijk193",
  githubHandle: "keerthijk193",
  cgpa: "9.29",
  university: "CMR Institute of Technology, Bengaluru",
  batch: "2022 - 2026",
  status: "Open to Entry-Level & Graduate Opportunities",
  spokenLanguages: ["English", "Hindi", "Kannada", "Telugu"],
  aboutSummary: `I am a Computer Science graduate (CGPA 9.29) with hands-on industry internship experience across data engineering, Python backend development, AI/ML, and cybersecurity. 

I specialize in building production-ready ETL/ELT pipelines, star-schema data warehouses with Slowly Changing Dimensions (SCD Type 2), and high-throughput Python/FastAPI microservices. My experience spans architecting enterprise connector pipelines for 10+ cloud platforms at AeroAegis, building real-time honeypot intrusion detection systems at SuprMentr, and engineering multimodal AI agents with LangGraph and vision models.

I thrive at the intersection of data systems, resilient backend APIs, and analytical problem-solving, bringing strong algorithmic foundations, clean code practices, and relentless curiosity to real-world software products.`,
  corePillars: [
    {
      title: "Data Engineering & Warehousing",
      description: "ETL/ELT pipelines, Star Schema, SCD Type 2 history, Airflow orchestration, Redshift analytics, and transaction consistency.",
      icon: "Database"
    },
    {
      title: "Python Backend & API Systems",
      description: "FastAPI, Express.js, 10+ enterprise API connectors, CI/CD with Docker & Azure DevOps, and automated document generation.",
      icon: "Server"
    },
    {
      title: "AI/ML & Multimodal Agents",
      description: "LangGraph state workflows, Gemini Vision API, Mistral intent routing (93.3% accuracy), RAG, and predictive modeling.",
      icon: "Bot"
    },
    {
      title: "Cybersecurity & Defense",
      description: "NEXUS IDS honeypot, threat severity scoring, real-time alert broadcasting, Nmap, Wireshark, and Kali Linux.",
      icon: "ShieldCheck"
    }
  ],
  stats: [
    { label: "B.E. CGPA", value: "9.29", sub: "Top Academic Tier" },
    { label: "Industry Internships", value: "4", sub: "Data, Backend, AI & Security" },
    { label: "Production Projects", value: "7+", sub: "Full-Stack & Data Pipelines" },
    { label: "Technical Certifications", value: "15+", sub: "Databricks, IBM, Cisco" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for backend engineering, data pipelines, and system automation",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Advanced", subskills: ["FastAPI", "Pandas", "Pytest", "ETL"] },
      { name: "SQL", level: "Advanced", subskills: ["CTEs", "Window Functions", "Stored Procedures", "Joins"] },
      { name: "JavaScript (Node.js)", level: "Proficient", subskills: ["Express.js", "Socket.io", "Async I/O"] },
      { name: "Java (Basic)", level: "Working Knowledge", subskills: ["OOPs", "JDBC", "Core Java"] },
      { name: "HTML / CSS", level: "Proficient", subskills: ["Responsive UI", "Tailwind", "DOM"] }
    ]
  },
  {
    title: "Data Engineering & Big Data",
    description: "Architecting high-throughput ingestion, validation, and analytical data warehouses",
    icon: "Network",
    skills: [
      { name: "ETL / ELT Pipelines", level: "Advanced", subskills: ["Bronze-Silver-Gold", "Idempotent Re-runs"] },
      { name: "Data Warehousing", level: "Advanced", subskills: ["Star Schema", "6 Dims / 3 Fact Tables"] },
      { name: "SCD Type 2", level: "Advanced", subskills: ["Historical Tracking", "Atomic Transactions"] },
      { name: "Data Ingestion & Validation", level: "Advanced", subskills: ["PII Masking", "Schema Enforcement"] },
      { name: "Apache Airflow", level: "Proficient", subskills: ["DAG Orchestration", "Task Dependencies"] },
      { name: "Apache Kafka", level: "Working Knowledge", subskills: ["Stream Processing Fundamentals"] },
      { name: "Databricks & PySpark", level: "Proficient", subskills: ["Lakehouse Architecture", "DataFrame API"] },
      { name: "Grafana", level: "Proficient", subskills: ["Telemetry Dashboards", "Pipeline Monitoring"] }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational, document, and cloud analytical warehouses",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Advanced", subskills: ["Normalization", "100k OLTP Rows", "PBKDF2"] },
      { name: "Amazon Redshift", level: "Proficient", subskills: ["Cloud DW", "Analytical Queries"] },
      { name: "MongoDB", level: "Proficient", subskills: ["Flexible Document Schema", "BSON"] },
      { name: "SQLite", level: "Advanced", subskills: ["In-Memory Testing", "Lightweight Relational"] },
      { name: "Vector Databases", level: "Proficient", subskills: ["Embeddings", "Semantic Search"] }
    ]
  },
  {
    title: "AI / ML & Intelligent Agents",
    description: "Modern LLM orchestrations, multimodal vision, and predictive modeling",
    icon: "Brain",
    skills: [
      { name: "LangGraph & LangChain", level: "Advanced", subskills: ["Multi-Agent Routing", "State Graphs"] },
      { name: "Gemini Vision API", level: "Advanced", subskills: ["Multimodal Perception", "Scene Analysis"] },
      { name: "RAG & Semantic Search", level: "Advanced", subskills: ["Retrieval", "Context Augmentation"] },
      { name: "Scikit-learn & XGBoost", level: "Advanced", subskills: ["Classification", "Regression R² > 0.90"] },
      { name: "Prompt Engineering", level: "Proficient", subskills: ["System Prompts", "Structured JSON"] },
      { name: "SmolVLM2 & InsightFace", level: "Proficient", subskills: ["On-Device Vision", "Face Recognition"] },
      { name: "n8n", level: "Working Knowledge", subskills: ["Workflow Automation"] }
    ]
  },
  {
    title: "Backend & API Engineering",
    description: "Scalable REST APIs, enterprise connectors, and realtime socket communication",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: "Advanced", subskills: ["Async Endpoints", "Pydantic", "Swagger"] },
      { name: "Express.js", level: "Proficient", subskills: ["Middleware", "REST Routing"] },
      { name: "REST APIs & JSON", level: "Advanced", subskills: ["10+ Third-party Connectors"] },
      { name: "Postman & API Testing", level: "Advanced", subskills: ["Automated Test Collections"] },
      { name: "Streamlit", level: "Advanced", subskills: ["Interactive Analytics Apps"] },
      { name: "Socket.io", level: "Proficient", subskills: ["Real-time Event Broadcasting"] }
    ]
  },
  {
    title: "Analytics, BI & Visualization",
    description: "Translating raw transactional data into executive business intelligence",
    icon: "BarChart3",
    skills: [
      { name: "Pandas & NumPy", level: "Advanced", subskills: ["High-speed Data Manipulation"] },
      { name: "Power BI", level: "Proficient", subskills: ["DAX", "Executive Dashboards"] },
      { name: "Plotly & Matplotlib", level: "Advanced", subskills: ["Interactive & Publication Visuals"] },
      { name: "Seaborn", level: "Proficient", subskills: ["Statistical Exploratory Analysis"] },
      { name: "Microsoft Excel", level: "Proficient", subskills: ["Pivot Tables", "Formulas"] }
    ]
  },
  {
    title: "Testing, DevOps & Cloud",
    description: "Reliable CI/CD pipelines, containerization, and unit test coverage",
    icon: "Layers",
    skills: [
      { name: "Pytest", level: "Advanced", subskills: ["209 Mocked Tests", "Mongomock", "Smoke Tests"] },
      { name: "Docker", level: "Proficient", subskills: ["Containerization", "Multi-stage Builds"] },
      { name: "Azure DevOps & CI/CD", level: "Proficient", subskills: ["Build Pipelines", "Automated Releases"] },
      { name: "Git / GitHub", level: "Advanced", subskills: ["Branching", "Code Review"] },
      { name: "Linux", level: "Proficient", subskills: ["Bash", "Cron", "Environment Config"] }
    ]
  },
  {
    title: "Cybersecurity & Security Tools",
    description: "Network reconnaissance, vulnerability scanning, and proactive intrusion detection",
    icon: "Lock",
    skills: [
      { name: "NEXUS Honeypot IDS", level: "Advanced", subskills: ["SSH / SQLi / XSS / Port Scan Detection"] },
      { name: "Nmap & Wireshark", level: "Proficient", subskills: ["Packet Analysis", "Port Discovery"] },
      { name: "Burp Suite", level: "Proficient", subskills: ["Vulnerability Assessment"] },
      { name: "Kali Linux", level: "Proficient", subskills: ["Security Tooling Environment"] }
    ]
  }
];

export const CORE_CS_CONCEPTS = [
  "Data Structures & Algorithms (DSA)",
  "Object-Oriented Programming (OOPs)",
  "Database Management Systems (DBMS)",
  "Operating Systems (OS)",
  "Computer Networks (CN)",
  "Software Development Life Cycle (SDLC)"
];

export const PROJECTS: Project[] = [
  {
    id: "enterprise-employee-analytics",
    title: "Enterprise Employee Analytics & SCD Type 2 Data Warehouse",
    year: "2026",
    category: "data-engineering",
    categoryLabel: "Data Engineering & Warehousing",
    tagline: "End-to-end employee data platform with 100k OLTP rows, Star Schema OLAP, and atomic SCD Type 2 history.",
    description: "Engineered an enterprise-grade employee data platform synchronizing a normalized OLTP MySQL database of 100,000 records with a dimensional star-schema data warehouse (6 dimension tables, 3 fact tables) through a custom Python/Pandas ETL pipeline and SQL stored procedures.",
    keyContributions: [
      "Implemented Slowly Changing Dimensions (SCD Type 2) tracking historical records with atomic dual-database transactions (commit or full rollback across OLTP and OLAP).",
      "Engineered an idempotent, re-runnable ETL engine that automatically classifies ingested records as new, changed, or unchanged.",
      "Built advanced SQL analytics with CTEs and window functions (LAG, DENSE_RANK, RANK) for year-over-year performance, top talent identification, and attrition risk scoring.",
      "Secured with Role-Based Access Control (HR/Manager/Employee), PBKDF2-SHA256 password hashing, parameterized SQL, and deployed on Aiven Cloud MySQL & Streamlit Cloud.",
      "Maintained 209 mocked pytest unit tests alongside a 41-check live database smoke test suite."
    ],
    technologies: ["Python", "MySQL", "Pandas", "Streamlit", "Plotly", "Aiven Cloud", "Pytest", "Star Schema", "SCD Type 2"],
    metrics: [
      { label: "OLTP Records", value: "100,000" },
      { label: "DW Schema", value: "6 Dims / 3 Facts" },
      { label: "Unit Tests", value: "209 Passed" },
      { label: "DB Smoke Checks", value: "41 Automated" }
    ],
    githubUrl: "https://github.com/keerthijk193/Enterprise-Employee-Analytics_final",
    featured: true
  },
  {
    id: "voice-multimodal-ai-assistant",
    title: "Voice-Controlled Multimodal AI Assistant",
    year: "2026",
    category: "ai-ml",
    categoryLabel: "Multimodal AI & Assistive Tech",
    tagline: "Assistive AI orchestrated with LangGraph, Mistral-7B intent routing (93.3% accuracy), and Gemini Vision.",
    description: "Designed and built an end-to-end voice-controlled multimodal assistant specifically engineered for visually impaired individuals, orchestrated dynamically using LangGraph state machine workflows.",
    keyContributions: [
      "Trained and implemented Mistral-based intent routing pipeline achieving 93.3% classification accuracy across complex user requests.",
      "Combined Google Gemini Vision API for rich semantic scene understanding with SmolVLM2-2.2B for rapid on-device visual question answering.",
      "Integrated InsightFace for real-time facial recognition and familiar contact identification.",
      "Developed a fluid voice-in voice-out interaction loop prioritizing speed, accessibility, and high acoustic clarity."
    ],
    technologies: ["LangGraph", "Mistral", "Gemini Vision API", "InsightFace", "SmolVLM2-2.2B", "Python", "RAG"],
    metrics: [
      { label: "Intent Accuracy", value: "93.3%" },
      { label: "Vision Model", value: "Gemini + SmolVLM2" },
      { label: "Face Recognition", value: "InsightFace" },
      { label: "Orchestration", value: "LangGraph" }
    ],
    githubUrl: "https://github.com/keerthijk193",
    featured: true
  },
  {
    id: "nexus-ids",
    title: "NEXUS IDS: Honeypot-Based Intrusion Detection System",
    year: "2026",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity & Defense",
    tagline: "Real-time honeypot IDS detecting SSH brute-force, SQL injection, XSS, and port scans with auto-blocking.",
    description: "Architected a real-time honeypot-based intrusion detection system designed to actively trap adversaries, log intrusive payloads, classify attack severity, and trigger automated defensive counter-measures.",
    keyContributions: [
      "Detected SSH brute force, SQL injection patterns, cross-site scripting (XSS), and reconnaissance port scanning in real time.",
      "Streamed live attack telemetry and attacker behavior to a web dashboard using Node.js, Express.js, Socket.io, and Chart.js.",
      "Engineered automated threat severity classification and dynamic firewall/iptables rules to auto-block repeat malicious IP addresses.",
      "Conducted extensive attack simulations and packet validations using Nmap, Wireshark, Burp Suite, and Kali Linux."
    ],
    technologies: ["Node.js", "Express.js", "Socket.io", "Chart.js", "Nmap", "Wireshark", "Burp Suite", "Kali Linux"],
    metrics: [
      { label: "Detection Vectors", value: "SSH, SQLi, XSS, Ports" },
      { label: "Alert Latency", value: "< 100ms Live" },
      { label: "Mitigation", value: "Auto-Blocking" },
      { label: "Interface", value: "Socket.io Telemetry" }
    ],
    githubUrl: "https://github.com/keerthijk193",
    featured: true
  },
  {
    id: "employee-performance-tracking",
    title: "Employee Performance Tracking System",
    year: "2026",
    category: "backend",
    categoryLabel: "Polyglot Systems & Backend",
    tagline: "Modular Python CLI combining SQLite relational storage with MongoDB documents and mock-isolated tests.",
    description: "Engineered a polyglot persistence command-line application combining SQLite for structured organizational records (employees, projects, assignments) with MongoDB for evolving, schema-flexible performance review documents.",
    keyContributions: [
      "Architected clean relational-to-document join aggregations generating cross-system analytical performance summaries.",
      "Built duplicate-email protection, custom domain exception handling, and rigorous input validation pipelines.",
      "Designed a decoupled, modular codebase with dedicated manager modules per business entity.",
      "Wrote comprehensive Pytest test suite using ephemeral in-memory SQLite and mongomock, achieving high test coverage with zero external DB dependencies."
    ],
    technologies: ["Python", "SQLite", "MongoDB", "Pytest", "Mongomock", "OOPs"],
    metrics: [
      { label: "Architecture", value: "Polyglot DB" },
      { label: "Test Isolation", value: "100% Mocked" },
      { label: "Storage", value: "SQLite + Mongo" },
      { label: "Validation", value: "Custom Exceptions" }
    ],
    githubUrl: "https://github.com/keerthijk193/Employee_Performance_Tracker",
    featured: false
  },
  {
    id: "retail-sales-pipeline",
    title: "Retail Sales Data Engineering Pipeline",
    year: "2025",
    category: "data-engineering",
    categoryLabel: "Data Engineering & Analytics",
    tagline: "Medallion Architecture (Bronze -> Silver -> Gold) with PII masking, data validation, and Power BI dashboards.",
    description: "Built an end-to-end sales analytics pipeline implementing the industry-standard Medallion Architecture across Bronze (raw ingestion), Silver (validated, cleaned, PII masked), and Gold (aggregated business KPIs) tiers.",
    keyContributions: [
      "Built automated data ingestion pipelines processing multi-source retail transactions with schema validation.",
      "Implemented strict PII data masking to protect customer personal identifiers across analytical stages.",
      "Created enriched, curated analytical datasets aggregating gross profit margins, inventory velocities, and sales trends.",
      "Designed an interactive executive Power BI dashboard with dynamic slicing, trend analysis, and KPI cards."
    ],
    technologies: ["Python", "Pandas", "Power BI", "Microsoft Excel", "ETL", "Medallion Architecture"],
    metrics: [
      { label: "Architecture", value: "Bronze-Silver-Gold" },
      { label: "Data Security", value: "PII Masking" },
      { label: "Reporting", value: "Interactive Power BI" },
      { label: "Ingestion", value: "Automated Pipeline" }
    ],
    githubUrl: "https://github.com/keerthijk193",
    featured: false
  },
  {
    id: "car-price-prediction-system",
    title: "Used-Car Valuation & Price Prediction System",
    year: "2025",
    category: "ai-ml",
    categoryLabel: "Machine Learning & Regression",
    tagline: "Comparative regression modeling benchmarking Lasso, Ridge, Random Forest, and XGBoost to R² > 0.90.",
    description: "Developed a predictive machine learning system estimating used-car market valuations from vehicle attributes including mileage, fuel type, transmission, vehicle age, and ownership history.",
    keyContributions: [
      "Engineered categorical encoding pipelines, handled non-linear relationships, missing value imputations, and feature scaling.",
      "Systematically benchmarked multiple regressors: baseline Lasso Regression reached R² = 0.87.",
      "Evaluated Ridge, Decision Trees, Random Forests, and Gradient Boosting, tuning XGBoost Regressor to exceed R² > 0.90 accuracy.",
      "Rendered visual residual diagnostics, feature importance distributions, and error heatmaps using Matplotlib and Seaborn."
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Peak Model", value: "XGBoost Regressor" },
      { label: "Peak R² Score", value: "> 0.90" },
      { label: "Baseline Lasso", value: "R² = 0.87" },
      { label: "Diagnostics", value: "Residual Plots" }
    ],
    githubUrl: "https://github.com/keerthijk193",
    featured: false
  },
  {
    id: "bus-ticket-booking-system",
    title: "Bus Ticket Booking Management System",
    year: "2024",
    category: "backend",
    categoryLabel: "Full-Stack & Relational Systems",
    tagline: "Database-driven multi-user reservation portal with seat availability tracking and admin fleet management.",
    description: "Engineered a database-driven booking and reservation platform handling transit route schedules, dynamic seat inventory, reservation workflows, cancellations, and transaction histories.",
    keyContributions: [
      "Designed normalized relational database schema in MySQL managing buses, routes, schedules, fares, and user transactions.",
      "Implemented comprehensive booking workflows with concurrency protection to prevent double-booking of seats.",
      "Created an administrative interface for fleet scheduling, route configuration, and ticket cancellation audits.",
      "Built responsive front-end interface in HTML5/CSS3 connected to backend services."
    ],
    technologies: ["Java", "MySQL", "HTML5", "CSS3", "JDBC", "Relational Modeling"],
    metrics: [
      { label: "Database", value: "MySQL Normalized" },
      { label: "Role Portals", value: "Admin & Customer" },
      { label: "Transactions", value: "ACID Compliant" },
      { label: "Core Tech", value: "Java Backend" }
    ],
    githubUrl: "https://github.com/keerthijk193",
    featured: false
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "v4c-intern",
    company: "V4C",
    companyUrl: "https://v4c.ai",
    role: "Data Engineer Intern",
    period: "Sep 2026 – Present",
    location: "Remote (Pune, Maharashtra)",
    type: "Internship",
    summary: "Hands-on data engineering role focusing on Python-based data workflows and database management systems (DBMS).",
    highlights: [
      "Developing and optimizing data transformation pipelines using Python and robust DBMS solutions.",
      "Collaborating on data engineering architecture to support data ingestion and relational analytical workflows."
    ],
    technologies: ["Python", "DBMS", "SQL", "Data Pipelines", "Data Ingestion"]
  },
  {
    id: "aeroaegis-intern",
    company: "AeroAegis Pvt Ltd",
    role: "Associate Software Engineer Intern (Python Backend Developer)",
    period: "May 2026 – Aug 2026",
    location: "Bengaluru, Karnataka",
    type: "Internship",
    summary: "Built high-performance FastAPI backends, enterprise cloud connectors, Airflow data workflows, and document generation microservices for an AI-powered RAG assistant platform.",
    highlights: [
      "Developed Python/FastAPI backend APIs and core services powering an enterprise AI-assisted RAG platform.",
      "Engineered production data ingestion pipelines and custom REST API connectors across 10+ cloud platforms: Amazon Seller, Jira, Salesforce, Shopify, Pipedrive, ServiceNow, Azure DevOps, Google Drive, OneDrive, AWS S3, and Basecamp.",
      "Automated connector validations and test suites with Postman, ensuring robust error handling across disparate API specs.",
      "Orchestrated complex data pipelines with Apache Airflow, monitored system telemetry and pipeline SLAs with Grafana, and queried Amazon Redshift for high-speed analytical data retrieval.",
      "Configured containerized Docker builds and streamlined CI/CD automated deployment pipelines with Azure DevOps.",
      "Implemented automated document generation workflows for dynamic PDF, DOCX, XLSX, CSV, and PPT files including asynchronous upload, in-app preview rendering, and secure downloads."
    ],
    technologies: ["Python", "FastAPI", "Apache Airflow", "Grafana", "Amazon Redshift", "Azure DevOps", "Docker", "REST APIs", "Postman", "RAG"]
  },
  {
    id: "suprmentr-intern",
    company: "SuprMentr Technologies",
    companyUrl: "https://vtu.ac.in",
    role: "Cyber Security & Ethical Hacking Intern",
    period: "Feb 2026 – May 2026",
    location: "Bengaluru, Karnataka (NASSCOM Future Skills & VTU)",
    type: "Internship",
    summary: "Architected NEXUS IDS, a real-time honeypot intrusion detection platform with threat severity classification, live alerting, and automated malicious actor blocking.",
    highlights: [
      "Engineered NEXUS IDS, a honeypot-based intrusion detection platform detecting SSH brute-force attempts, SQL injections, XSS attacks, and network port scanning.",
      "Built multi-level threat severity classification algorithms and live dashboard telemetry streaming via WebSockets.",
      "Implemented automated firewall blocking mechanisms to isolate and drop traffic from repeat malicious actors.",
      "Conducted network vulnerability assessments and threat monitoring using Nmap, Wireshark, Burp Suite, and Kali Linux."
    ],
    technologies: ["Node.js", "Express.js", "Socket.io", "Chart.js", "Nmap", "Wireshark", "Burp Suite", "Kali Linux", "Honeypots"]
  },
  {
    id: "internpe-intern",
    company: "Internpe",
    role: "AI / ML Intern",
    period: "Feb 2025 – Mar 2025",
    location: "Remote (Client: Confidential)",
    type: "Internship",
    summary: "Built and evaluated predictive machine learning models across healthcare, sports analytics, and commercial pricing domains.",
    highlights: [
      "Developed predictive models using Python, Scikit-learn, and Pandas for Diabetes Prediction and Breast Cancer Diagnostic Classification.",
      "Built an IPL Winning Team Prediction pipeline leveraging historical match data and player performance metrics.",
      "Engineered used-car price valuation regressors with feature encoding, missing value imputation, and model evaluation."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Supervised Learning"]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "cmrit",
    institution: "CMR Institute of Technology",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    period: "2022 – 2026",
    location: "Bengaluru, Karnataka",
    score: "9.29",
    scoreLabel: "CGPA (out of 10.0)",
    honors: [
      "1st Rank Subject Topper in Research Methodology & IPR (5th Semester CSE)",
      "Centum Achiever (100/100 full marks in CAED External Exam, VTU, 2023)"
    ]
  },
  {
    id: "spsm",
    institution: "SPSM PU College",
    degree: "Pre-University Course (PUC)",
    field: "Science Stream (PCMB)",
    period: "2019 – 2021",
    location: "Davangere, Karnataka",
    score: "96.6%",
    scoreLabel: "Distinction Percentage",
    honors: ["Academic Distinction in Physics, Chemistry, and Mathematics"]
  },
  {
    id: "onps",
    institution: "Om National Public School (CBSE)",
    degree: "Class 10 (Secondary School Examination)",
    field: "General CBSE Science & Mathematics",
    period: "2019",
    location: "Ranebennur, Karnataka",
    score: "92.0%",
    scoreLabel: "Board Exam Percentage",
    honors: ["3rd Rank in School across Class 10 CBSE Board Examinations"]
  }
];

export const CERTIFICATION_CATEGORIES: CertificationCategory[] = [
  {
    provider: "Databricks",
    iconName: "Flame",
    badgeCount: 6,
    certifications: [
      "Azure Databricks Foundations",
      "Databricks Fundamentals",
      "Lakehouse Architecture Fundamentals",
      "Data Analytics Fundamentals",
      "Introduction to Python for Data Science and Data Engineering",
      "Generative AI Fundamentals"
    ]
  },
  {
    provider: "IBM",
    iconName: "Cpu",
    badgeCount: 4,
    certifications: [
      "Cloud Computing Fundamentals",
      "Artificial Intelligence Fundamentals",
      "Information Technology Fundamentals",
      "Generative AI Essentials"
    ]
  },
  {
    provider: "Cisco Networking Academy",
    iconName: "Wifi",
    badgeCount: 3,
    certifications: [
      "Introduction to Modern AI",
      "Networking Basics",
      "Introduction to Cybersecurity"
    ]
  },
  {
    provider: "Simplilearn & freeCodeCamp",
    iconName: "Code",
    badgeCount: 4,
    certifications: [
      "Data Analysis with Python (freeCodeCamp)",
      "Introduction to PySpark (Simplilearn)",
      "Introduction to MongoDB (Simplilearn)",
      "Python for Beginners (Simplilearn)"
    ]
  },
  {
    provider: "Industry & Professional",
    iconName: "Award",
    badgeCount: 4,
    certifications: [
      "AI Skills Passport (EY & Microsoft)",
      "Power BI (Office Master)",
      "AI Tools Workshop (Be10x)",
      "The Complete Python Developer (Udemy)"
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "centum",
    title: "Centum Achiever (100/100 Full Marks)",
    organization: "Visvesvaraya Technological University (VTU), 2023",
    description: "Awarded perfect score (100/100) in CAED external university examination.",
    badge: "Academic Excellence",
    icon: "Trophy"
  },
  {
    id: "subject-topper",
    title: "1st Rank Subject Topper",
    organization: "Department of Computer Science, CMRIT",
    description: "Secured 1st rank subject topper in Research Methodology & Intellectual Property Rights (IPR) in 5th semester CSE.",
    badge: "Top Rank",
    icon: "Medal"
  },
  {
    id: "school-rank",
    title: "3rd Rank in School (Class 10 CBSE)",
    organization: "Om National Public School, 2019",
    description: "Ranked 3rd across the entire school cohort with a 92% aggregate in Class 10 CBSE board examinations.",
    badge: "Honor Roll",
    icon: "GraduationCap"
  },
  {
    id: "hackathons",
    title: "Competitive Hackathon Participant",
    organization: "Assistive Tech 2024, CypherQuest 2025, Gen AI Hackfest 2025",
    description: "Competed in high-intensity engineering hackathons including the 24-hour CypherQuest 2025 and Gen AI Hackfest 2025 developing assistive and LLM-powered applications.",
    badge: "Hackathons",
    icon: "Sparkles"
  },
  {
    id: "dance",
    title: "1st & 2nd Place in Dance Competitions",
    organization: "AURA '23 & AURA '24 (Inter-Departmental Cultural Fest)",
    description: "Won 1st and 2nd positions in competitive choreography showcasing artistic expression and team synchronization.",
    badge: "Cultural",
    icon: "Star"
  },
  {
    id: "nss-leadership",
    title: "NSS & Campus Community Leadership",
    organization: "National Service Scheme (NSS), Pregos Dance Club, CSE Fashion Team",
    description: "Active member driving community service, environmental sustainability drives, and collegiate cultural initiatives.",
    badge: "Community & Leadership",
    icon: "Heart"
  }
];
