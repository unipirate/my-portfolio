export const profile = {
  name: "FuQuan Gao",
  tagline: "Master of Information Technology | Full-Stack Software Engineer",
  email: "ws.fqg228@gmail.com",
  phone: "0450085228",
  linkedin: "https://www.linkedin.com/in/fuquangao/",
  github: "https://github.com/unipirate",

  summary: [
    "Master of Information Technology student at The University of Melbourne, eager to secure a Full-Stack Software Engineer role to leverage my background in distributed systems and cloud computing, committed to building sovereign, high-impact AI solutions in Australia.",
    "Detail-oriented professional with 7+ years of management experience and strong technical expertise in orchestrating Agile teams, optimising CI/CD pipelines, and deploying scalable solutions on AWS and Kubernetes.",
  ],

  education: [
    {
      degree: "Master of Information Technology",
      period: "Mar 2025 – Present",
      school: "The University of Melbourne",
      major: "AI",
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
      company: "Rhombus AI",
      period: "Feb 2026 – Present",
      category: "Web",
      description: "AI Data Platform, Sydney",
      stack: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Python", "Django", "PostgreSQL", "AWS", "Jest", "Terraform"],
      highlights: [
        "Full-Stack Product Development: Led the end-to-end delivery of multi-platform web applications with React 18, Next.js 14 and Vite, alongside TypeScript and Tailwind CSS, building accessible, responsive interfaces with high-fidelity animations using Radix UI and Framer Motion.",
        "Auth & Data Layer: Integrated Auth0, NextAuth and Supabase for unified SSO, session management and real-time data sync. Optimised performance using TanStack Query for server-state caching and Zustand/Redux for global client-state management.",
        "Complex Interactions & Visualization: Developed advanced workflow builders and canvas editors using React Flow (xyflow). Engineered data-dense dashboards with AG-Grid, Recharts and Plotly, and implemented 3D visualizations via React Three Fiber to enhance data clarity.",
        "Backend & Data Pipelines: Developed custom Fivetran connectors in Python (boto3, pandas) to process S3-hosted Excel data. Architected incremental sync and data-cleaning pipelines to streamline the flow from raw data to the frontend.",
        "Quality & Observability: Established robust testing suites using Jest, Cypress and Playwright with MSW for API mocking. Integrated Sentry for error tracking and PostHog for product analytics to drive data-informed stability and iterations.",
        "Engineering Excellence: Standardised code quality using ESLint, Prettier, Husky and lint-staged. Utilised OpenAPI specifications and mock servers to enforce API contracts and streamline frontend-backend collaboration.",
      ],
      link: "",
    },
    {
      title: "Full Stack Software Engineer",
      company: "MediaJira",
      period: "Oct 2025 – Feb 2026",
      category: "Web",
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
      company: "Calories Group",
      period: "Aug 2025 – Nov 2025",
      category: "Mobile",
      description: "Health & Fitness Tracking App, Melbourne",
      stack: ["React Native", "TypeScript", "Kotlin", "Spring Boot", "Google GenAI", "Firebase"],
      highlights: [
        "Mobile Engineering: Designed a cross-platform app with reusable components and strict type-safe APIs. Integrated camera-based meal logging and geolocation services, delivering features like weight history visualization and restaurant recommendations.",
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
      category: "Web",
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
      period: "May 2024 – Feb 2025",
      company: "Louvresky Pty Ltd, Melbourne, VIC",
      highlights: [
        "Led technical delivery and the full SDLC for 3 cloud-native applications, ensuring architectural scalability while meeting strict on-time delivery and budget constraints.",
        "Managed a cross-functional team of 6 developers and 2 QA engineers, resolving technical blockers and facilitating Agile ceremonies to streamline development workflows.",
        "Architected automated testing workflows and enforced GitLab version control standards, slashing code deployment time by 40% and reducing production bugs by 15%.",
        "Translated complex business requirements into technical specifications and user stories for the development team, achieving a 95% client satisfaction rate upon product release.",
      ],
    },
    {
      role: "Retail Manager",
      period: "May 2020 – Feb 2024",
      company: "Huawei Global Flagship Store, Shanghai, China",
      highlights: [
        "Spearheaded daily operations for a flagship store, managing a team of 200+ staff members and overseeing monthly turnover exceeding $5M.",
        "Implemented data-driven CRM strategies, boosting customer engagement and increasing repeat visits by 20% year-over-year.",
        "Led marketing campaigns and internal product training for 5 major product releases, ensuring 100% staff proficiency in technical specifications.",
        "Streamlined warehouse logistics and auditing processes, minimising inventory discrepancies to less than 1% annually.",
      ],
    },
    {
      role: "Store Manager",
      period: "Feb 2017 – Dec 2019",
      company: "VideoEzy, Ferntree Gully, Melbourne, VIC",
      highlights: [
        "Supervised day-to-day store activities, including rostering and performance management for a team of 5 employees.",
        "Revamped store layout and merchandising efficiency, directly contributing to a 25% increase in customer satisfaction scores.",
        "Resolved complex customer escalations, maintaining a 4.8/5 star service rating for the branch.",
      ],
    },
    {
      role: "Expert (Technical Specialist)",
      period: "Apr 2012 – Oct 2015",
      company: "Apple Retail Store, Doncaster, VIC",
      highlights: [
        "Delivered exceptional technical support and product demonstrations to over 20 customers daily, routinely exceeding personal sales targets by 20%.",
        "Mentored 10+ new employees on Apple product ecosystems and service standards.",
        "Collaborated with cross-functional teams to streamline the \"Genius Bar\" appointment flow, reducing customer wait times by 10 minutes on average.",
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
