export const sectionsItems = [
  {
    name: "things_i_work_with",
    items: [
      { title: "react",      iconName: "react",      since: "06/01/2020" },
      { title: "typescript", iconName: "typescript", since: "06/01/2020" },
      { title: "tailwind",   iconName: "tailwind",   since: "01/01/2021" },
      { title: "laravel",    iconName: "laravel",    since: "09/01/2020" },
      { title: "docker",     iconName: "docker",     since: "01/01/2022" },
      { title: "postgresql", iconName: "postgresql", since: "01/01/2021" },
      { title: "redis",      iconName: "redis",      since: "01/06/2022" },
      { title: "rust",       iconName: "rust",       since: "01/10/2022" },
      { title: "next-js",    iconName: "next",       since: "04/01/2022" },
      { title: "kubernetes", iconName: "kubernetes", since: "01/01/2022" },
    ]
  },
  {
    name: "things_i_did",
    items: [
      {
        title: "ruve",
        description: "ruve_descr",
        links: [{ icon: "github", link: "https://github.com/AlessioGiacobbe/RuVe" }]
      },
      {
        title: "pogboy",
        description: "pogboy_descr",
        links: [{ icon: "github", link: "https://github.com/AlessioGiacobbe/PogBoy" }]
      },
      {
        title: "isaac_leaderboard",
        description: "isaac_leaderboard_descr",
        links: [
          { icon: "github",       link: "https://github.com/AlessioGiacobbe/IsaacLeaderboard-Frontend" },
          { icon: "arrowUpRight", link: "https://isaac.alessiogiacobbe.dev/" }
        ]
      },
      {
        title: "betamicroprocessor",
        description: "betamicroprocessor_descr",
        links: [{ icon: "github", link: "https://github.com/AlessioGiacobbe/BetaMp-2017" }]
      }
    ]
  },
  {
    name: "where_i_have_worked",
    items: [
      {
        title: "Reset energia", since: "01/05/2025", role: "Backend Developer", url: "https://resetenergia.it/",
        details: [
          "Designed and implemented the entire database architecture from the ground up, defining schemas, relationships, and indexing strategies to support scalability and high performance.",
          "Developed and maintained RESTful APIs and backend services, ensuring reliable communication between application layers and external integrations.",
        ]
      },
      {
        title: "onpage", since: "01/09/2023", end: "01/05/2025", role: "Full Stack Developer", url: "https://onpage.it/",
        details: [
          "Full-stack development using Laravel, PostgreSQL, and Vue.js, handling millions of requests every week.",
          "DevOps with Kubernetes and Docker, optimizing the CI/CD pipeline to achieve deployment times under one minute.",
        ]
      },
      {
        title: "finsa", since: "01/01/2022", end: "01/09/2023", role: "Full Stack Developer", url: "https://finsa.it/it",
        details: [
          "Backend development using Symfony framework, handling complex biomedical data.",
          "Deployment using Docker on Kubernetes, dockerizing old codebases and orchestrating enterprise-level infrastructures.",
        ]
      },
      {
        title: "gaslini", since: "09/01/2020", end: "01/01/2022", role: "Full Stack Developer", url: "https://www.gaslini.org/",
        details: [
          "Developed full-stack web applications using the Laravel PHP framework to manage biomedical patient data.",
          "Managed and optimized MariaDB databases, ensuring fast data retrieval while maintaining data anonymization.",
        ]
      },
    ]
  },
  {
    name: "certifications",
    items: [
      { title: "AZ-900", role: "Microsoft Azure Fundamentals" }
    ]
  }
]
