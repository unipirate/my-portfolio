export const profile = {
  name: "Eldon Gao",
  tagline: "Full-Stack Software Engineer | AWS Certified DevOps Engineer",
  email: "ws.fqg228@gmail.com",
  phone: "+61 450 085 228",
  linkedin: "https://www.linkedin.com/in/fuquangao/",
  github: "https://github.com/unipirate",

  summary: [
    "Full-Stack Software Engineer with 2 years of commercial experience building responsive web applications, RESTful APIs, and cloud-based solutions using TypeScript, React, C#/.NET, and AWS within Agile environments.",
    "Extensive experience in CI/CD, automation, and cloud services as an AWS Certified DevOps Engineer – Professional, with expertise in GenAI and cloud technologies and a strong focus on delivering scalable, reliable, and maintainable software.",
  ],

  education: [
    {
      degree: "Master of Information Technology",
      period: "Mar 2025 – Jul 2026",
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
      company: "Rhombus AI",
      period: "Feb 2026 – Present",
      category: "Web",
      description: "Sydney / Melbourne",
      stack: ["C#/.NET", "ASP.NET Core", "React", "TypeScript", "PostgreSQL", "AWS", "Docker"],
      highlights: [
        "Developed cross-browser and cross-device responsive single-page web applications using TypeScript and React, improving user experience and accessibility.",
        "Built scalable RESTful APIs and backend services using C# ASP.NET Core, integrated with the UI for dynamic data rendering and reliable user workflows.",
        "Wrote unit tests using xUnit and Jest, strengthening regression coverage for APIs and React components.",
        "Optimised PostgreSQL schemas and SQL queries, improving application performance, scalability, and data integrity.",
        "Automated CI/CD workflows using GitHub Actions, Docker, and cloud services, streamlining deployment and improving delivery efficiency.",
        "Collaborated with developers through Agile planning, code reviews, debugging, and iterative delivery, ensuring reliable and maintainable releases.",
      ],
      link: "",
    },
    {
      title: "Full Stack Software Engineer",
      company: "MediaJira",
      period: "Oct 2025 – Feb 2026",
      category: "Web",
      description: "Melbourne",
      stack: ["React", "TypeScript", "Next.js", "Django REST Framework", "OpenAPI"],
      highlights: [
        "Developed responsive user-facing web applications using React, TypeScript, and Next.js, integrated with REST APIs for dynamic, data-driven workflows.",
        "Refactored existing frontend and backend components, improving maintainability, application reliability, and development efficiency.",
        "Implemented client-side and server-side validation, strengthening reliability and reducing invalid data across system workflows.",
        "Maintained OpenAPI documentation and API contracts, improving consistency between frontend and backend development.",
      ],
      link: "",
    },
    {
      title: "Technical Developer",
      company: "Louvresky Pty Ltd",
      period: "May 2024 – Feb 2025",
      category: "Mobile",
      description: "Melbourne",
      stack: ["React Native", "TypeScript", "Spring Boot", "REST APIs", "Google GenAI", "Firebase"],
      highlights: [
        "Developed end-to-end cross-platform application features using React Native and TypeScript, integrated with Spring Boot backend services and REST APIs.",
        "Integrated Google GenAI capabilities into user-facing workflows, delivering AI-enabled features and enhancing product functionality.",
        "Implemented robust validation and error-handling across frontend and backend services, improving application reliability.",
        "Improved application performance and user experience through client-side caching, debugging, and iterative feature optimisation.",
      ],
      link: "",
    },
  ],

  experience: [],

  skills: {
    languages: ["C#", "TypeScript", "JavaScript", "Python", "SQL"],
    frontend: ["React", "Next.js", "React Native", "Responsive SPAs"],
    backend: ["ASP.NET Core", "REST APIs", "OpenAPI", "Django REST Framework", "Spring Boot"],
    data: ["PostgreSQL", "MySQL"],
    cloudDevOps: ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD", "Git"],
    ai: ["Google GenAI", "ChatGPT", "Claude Code", "Cursor", "MCP", "Context Engineering"],
  },

  certifications: [
    "AWS Certified DevOps Engineer – Professional (Jul 2023)",
    "Cisco Certified Network Associate (CCNA) (Nov 2024)",
  ],
} as const;
