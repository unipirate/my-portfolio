export const profile = {
  name: "FuQuan Gao",
  tagline: "Master of Information Technology | Full-Stack Software Engineer",
  email: "ws.fqg228@gmail.com",
  phone: "0450085228",
  linkedin: "https://www.linkedin.com/in/fuquangao/",
  github: "https://github.com/unipirate",

  summary: [
    "Master of Information Technology student at The University of Melbourne, eager to secure a Full-Stack Software Engineer role to leverage my background in distributed systems and cloud computing.",
    "Detail-oriented professional with 7+ years of management experience and strong technical expertise in orchestrating Agile teams, optimising CI/CD pipelines, and deploying scalable solutions on AWS and Kubernetes.",
  ],

  education: [
    {
      degree: "Master of Information Technology",
      period: "Mar 2025 – Present",
      school: "The University of Melbourne",
      major: "Computing",
    },
    {
      degree: "Bachelor of Information Technology",
      period: "Mar 2009 – Oct 2016",
      school: "RMIT University",
      major: "Application Development",
    },
  ],

  projects: [
    {
      title: "Full Stack Software Engineer",
      company: "MediaJira",
      period: "Oct 2025 – Present",
      description: "SaaS Advertising Campaign Management Platform, Melbourne",
      stack: ["Next.js", "TypeScript", "Storybook", "Django REST Framework", "PyTest", "OpenAPI 3.0"],
      highlights: [
        "Frontend Engineering: Developed a Jira-style interactive Kanban board using Storybook components, implementing complex UI features including inline editing, dynamic column resizing, and sophisticated filtering, significantly enhancing task visualization capabilities.",
        "State Machine Logic: Architected a \"Decision Engine\" enforcing strict server-side state transitions (Draft -> Awaiting Approval -> Committed -> Reviewed). Implemented a logic-first frontend that strictly adheres to OpenAPI specifications and backend permission guards.",
        "Backend Reliability: Designed a comprehensive automated testing suite covering the entire decision lifecycle and RBAC permission boundaries. Ensured 0% side effects on invalid commit attempts by enforcing rigorous validation rules for signals and options.",
        "API & Workflow: Engineered the \"Signals\" management system with paired value/unit validation and delta tracking. Optimized data consistency by ensuring the UI strictly mirrors backend read-only states for committed records.",
      ],
      link: "",
    },
    {
      title: "Full Stack Developer",
      company: "Calories App",
      period: "Aug 2025 – Nov, 2025",
      description: "Health & Fitness Tracking App, Melbourne",
      stack: ["React Native", "TypeScript", "Kotlin", "Spring Boot", "OpenAI", "Firebase"],
      highlights: [
        "Mobile Engineering: Developed a cross-platform app with reusable components and strict type-safe APIs. Integrated camera-based meal logging and geolocation services, delivering features like weight history visualization and restaurant recommendations.",
        "Reactive Backend: Built a Kotlin + Spring Boot backend using Spring WebFlux and coroutines. Exposed RESTful endpoints for diet/workout logs with centralized exception handling and request validation, ensuring high concurrency support.",
        "AI Integration: Integrated Google GenAI (Gemini) to provide chat-based nutrition coaching. Engineered analytics endpoints (e.g., diet/workout analysis, fat loss and muscle gain recommendations) consumed by a dedicated chat UI, enhancing user engagement.",
        "Performance: Optimized mobile performance via image compression and local storage (AsyncStorage). Encapsulated HTTP client logic to reduce code duplication and improve UX responsiveness.",
      ],
      link: "https://github.com/unipirate/Mobile",
    },
    {
      title: "Developer and Designer",
      company: "University of Melbourne",
      period: "Mar 2025 – Jun 2025",
      description: "Cloud-Based Covid-19 Sentiment Analytics Platform, Melbourne",
      stack: ["Python", "Kubernetes", "Fission", "Elasticsearch", "Flask", "Docker", "NeCTAR Research Cloud"],
      highlights: [
        "Data Pipeline: Designed a scalable pipeline collecting posts from Reddit and Mastodon; cleaned and normalized content before ingesting into Elasticsearch for downstream analysis.",
        "Serverless Orchestration: Built serverless crawler tasks using Kubernetes and Fission. Implemented Python handlers triggered via HTTP for both scheduled and ad-hoc data collection.",
        "NLP Services: Developed sentiment analysis services using VADER running as Fission functions. Automated the workflow to read raw posts, compute polarity scores, and bulk-write results to dedicated dashboard indices.",
        "Visualization & API: Delivered Flask REST APIs to query sentiment results and utilized Jupyter notebooks for cross-platform sentiment comparison (Reddit vs Mastodon), enabling exploratory analysis for researchers.",
      ],
      link: "https://github.com/unipirate/CCC",
    },
  ],

  experience: [
    {
      role: "Technical Project Manager",
      period: "Mar 2025 – Present",
      company: "Melbourne (Remote)",
      highlights: [
        "Resolved technical blockers and facilitated Agile ceremonies to streamline development workflows.",
        "Architected automated testing workflows and enforced GitLab version control standards, slashing deployment time by 40% and reducing production bugs by 15%.",
        "Translated business requirements into technical specifications and user stories; achieved 95% client satisfaction upon release.",
      ],
    },
    {
      role: "Retail Manager",
      period: "May 2020 – Feb 2024",
      company: "Huawei Global Flagship Store, Shanghai, China",
      highlights: [
        "Spearheaded daily operations for a flagship store, managing 200+ staff and overseeing monthly turnover exceeding $5M.",
        "Implemented data-driven CRM strategies, boosting customer engagement and increasing repeat visits by 20% YoY.",
        "Led marketing campaigns and internal product training for 5 major releases; streamlined warehouse logistics with inventory discrepancies under 1% annually.",
      ],
    },
    {
      role: "Store Manager",
      period: "Feb 2017 – Dec 2019",
      company: "VideoEzy, Ferntree Gully, Melbourne, VIC",
      highlights: [
        "Supervised day-to-day store activities, rostering and performance management for a team of 5.",
        "Revamped store layout and merchandising, contributing to a 25% increase in customer satisfaction scores.",
        "Maintained a 4.8/5 star service rating through effective escalation resolution.",
      ],
    },
    {
      role: "Expert (Technical Specialist)",
      period: "Apr 2012 – Oct 2015",
      company: "Apple Retail Store, Doncaster, VIC",
      highlights: [
        "Delivered technical support and product demonstrations to 20+ customers daily, routinely exceeding sales targets by 20%.",
        "Mentored 10+ new employees on Apple product ecosystems and service standards.",
        "Collaborated with cross-functional teams to streamline Genius Bar appointment flow, reducing wait times by 10 minutes on average.",
      ],
    },
  ],

  skills: {
    languages: ["Java", "Python", "C#", "Swift", "Objective-C", "TypeScript", "JavaScript (ES6+)"],
    frameworks: ["Angular", "Node.js", "jQuery", "Bootstrap", "Webpack", "Vite", "Spring Boot"],
    cloudDevOps: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Kafka"],
    databases: ["MySQL", "Microsoft SQL Server", "MongoDB", "Elasticsearch"],
  },

  certifications: [
    "AWS Certified DevOps Engineer – Professional (Jul 2023)",
    "Cisco Certified Network Associate (CCNA) (2024)",
    "Microsoft Azure Fundamentals (AZ-900) (2024)",
    "Google Cloud Digital Leader (2024)",
    "Certified Kubernetes Administrator (CKA) – In Progress",
  ],
} as const;
