// Portfolio items with full comment support
export const portfolioItems = [
  {
    id: "luas-ai",
    filterClass: "soundcloud", // Full Stack category
    title: "Luas.ai – AI Workflow Automation",
    categoryLabel: "Full Stack",
    thumb: "img/portfolio/luas/luas_login.png",
    cover: "img/portfolio/luas/luas_login.png",
    description: `Luas.ai is an <strong>AI-driven workflow automation platform</strong> designed to reduce manual effort in operational and sales processes. The platform enables teams to <strong>centralize data, automate repetitive tasks</strong>, and generate actionable insights using AI, without changing their existing tools.<br><br>From opportunity tracking and reporting to user management and analytics, Luas.ai acts as an <strong>intelligence layer</strong> on top of business operations. It helps decision-makers move faster by converting raw data into structured insights, automated reports, and AI-assisted actions.<br><br>Built with scalability and reliability in mind, Luas.ai is designed for <strong>growing teams that need automation, visibility, and control</strong>, without adding operational complexity.`,
    techStack:
      "Node.js, Python, LLMs, PostgreSQL, AWS, Next.js, Salesforce, SOOQL",
    date: "2025",
    gallery: [
      // "img/portfolio/luas/luas_login.png",
      "img/portfolio/luas/Luas_opp.png",
      "img/portfolio/luas/luas_reports.png",
      "img/portfolio/luas/luas_users.png",
    ],
    ctaText: "Visit Platform",
    ctaLink: "https://uat.luas.ai/",
  },
  {
    id: "oak-chatbot",
    filterClass: "detail", // Backend & AI
    title: "Enterprise NLP Chatbot (Conduit Event)",
    categoryLabel: "Backend & AI",
    thumb: "img/portfolio/oak/strimlit1.png",
    cover: "img/portfolio/oak/strimlit1.png",
    description: `This project involved building a <strong>white-labeled, production-grade NLP chatbot</strong> for Oak Network, deployed live during their Conduit enterprise event. The chatbot was designed to help <strong>non-technical users</strong> interact with Oak Network’s internal site and event databases using simple, conversational language, removing the need for SQL knowledge or manual dashboard analysis.<br><br>At its core, the system uses an <strong>NLP-to-SQL pipeline</strong> powered by OpenAI APIs and custom prompt engineering. User questions written in plain English are translated into optimized SQL queries, executed against curated datasets, and converted into meaningful business outputs such as KPIs, summaries, and comparisons. The results are presented through <strong>interactive histograms, graphs, and charts</strong>, enabling quick and intuitive data understanding.<br><br>Built for reliability and scale, the solution handled concurrent user queries smoothly during the live event. Overall, the chatbot demonstrated strong business value by <strong>transforming complex platform data into actionable insights</strong> delivered instantly through natural language interaction.`,
    techStack:
      "Node.js, NLP, Custom Training Pipelines, Gemini, Streamlit, Python, Oracle PLSQL",
    date: "2024",
    gallery: [
      "img/portfolio/oak/streamlit3.webp",
      "img/portfolio/oak/strimlit2.webp",
      "img/portfolio/oak/streamlit4.png",
    ],
    ctaText: "Learn More",
    ctaLink: "https://oak-network.com/",
  },
  {
    id: "rag-chatbot",
    filterClass: "detail", // Backend & AI
    title: "Enterprise RAG Chatbot",
    categoryLabel: "Backend & AI",
    thumb: "img/portfolio/lawGpt/rag1.jpeg",
    cover: "img/portfolio/lawGpt/rag1.jpeg",
    description: `An <strong>enterprise-grade RAG chatbot</strong> that overcomes LLM context-length limitations by combining vector search with large language models. Users can upload documents and interact conversationally, enabling <strong>long-context, multi-turn chats</strong> without token constraints. The system stores vectorized chunks in a <strong>vector database (Qdrant)</strong> and retrieves only relevant context at query time, making responses <strong>cost-efficient, scalable, and accurate</strong>.<br><br>Built with <strong>Python, LangChain, Qdrant</strong> and OpenAI/Gemini, this domain-specific implementation was trained on the latest <strong>Bharatiya Nyaya Sanhita (BNS) law rules</strong>. The RAG approach enables <strong>rapid updates, flexibility, and lower operational costs</strong> while delivering highly contextual answers – ideal for enterprise and regulatory domains where data changes frequently.`,

    techStack: "Python, LangChain, Qdrant, OpenAI/Gemini, RAG,",
    date: "2025",
    gallery: [
      "img/portfolio/lawGpt/rag2.png",
      "img/portfolio/lawGpt/rag3.png",
      "img/portfolio/lawGpt/rag4.webp",
    ],
    ctaText: "View on GitHub",
    ctaLink: "https://github.com/crysosancher/BNSGPT",
  },

  // {
  //   id: "law-ai",
  //   filterClass: "detail", // Backend & AI
  //   title: "Legal AI Assistant",
  //   categoryLabel: "Backend & AI",
  //   thumb: "img/thumbs/42-34.jpg",
  //   cover: "img/portfolio/law.png",
  //   description:
  //     "AI-powered legal assistant for answering law-related queries using structured knowledge and LLM reasoning.",
  //   techStack: "Node.js, Python, OpenAI",
  //   date: "2024",
  //   gallery: ["img/portfolio/law.png"],
  //   ctaText: "View Project",
  //   ctaLink: "#",
  // },
  {
    id: "hospital-saas",
    filterClass: "soundcloud", // Full Stack
    title: "Hospital Bed Availability SaaS",
    categoryLabel: "Full Stack",
    thumb: "img/portfolio/bestFit/BestFit_hero.png",
    cover: "img/portfolio/bestFit/BestFit_hero.png",
    description: `This was a <strong>SaaS model application</strong> designed to help users find the <strong>best senior care communities nearby</strong>. The platform streamlines the process of searching for quality care options in your area with ease and confidence.<br><br>The application features <strong>two distinct web applications</strong>: one built for <strong>clients to browse, book, and enquire</strong> about available care communities, and another dedicated to <strong>caretaker managers</strong> who oversee operations and occupancy at their facilities.<br><br>Caretaker managers can efficiently <strong>manage occupancy through an intuitive dashboard</strong> and instantly <strong>reflect vacancy updates in real-time</strong> across the public website, ensuring their listings are always current and accurate for potential clients.`,
    techStack: "Node.js, PostgreSQL, REST APIs, PL/pgSQL, Next.js",
    date: "2025",
    gallery: [
      // "img/portfolio/bestFit/BestFit_hero.png",
      "img/portfolio/bestFit/bestFit_3.png",
      "img/portfolio/bestFit/Bestfit_2.png",

      "img/portfolio/bestFit/bestFit_4.png",
    ],
    ctaText: "View Platform",
    ctaLink: "https://bestfitnetwork.com/",
  },
  // {
  //   id: "comfortjourney",
  //   filterClass: "soundcloud", // Full Stack
  //   title: "ComfortJourney",
  //   categoryLabel: "Full Stack",
  //   thumb: "img/thumbs/42-56.jpg",
  //   cover: "img/portfolio/comfort.png",
  //   description:
  //     "Full-stack travel and booking platform with integrations and backend-heavy logic.",
  //   techStack: "Node.js, React, MySQL",
  //   date: "2024",
  //   gallery: ["img/portfolio/comfort.png"],
  //   ctaText: "Visit Website",
  //   ctaLink: "https://www.comfortjourney.in/",
  // },
  {
    id: "clickup-ui",
    filterClass: "youtube", // Frontend
    title: "ClickUp UI Clone",
    categoryLabel: "Frontend",
    thumb: "img/thumbs/42-34.jpg",
    cover: "img/portfolio/clickup.png",
    description: `A <strong>simple landing page</strong> built as per the product requirements, inspired by ClickUp's clean and modern design.<br><br>The UI focuses on <strong>usability, layout precision, and responsiveness</strong>, ensuring a seamless experience across devices.<br><br>Developed with <strong>Next.js and React</strong>, this project demonstrates best practices in frontend development for landing pages and product showcases.`,
    techStack: "Next.js, HTML, CSS",
    date: "2024",
    gallery: [],
    ctaText: "View Demo",
    ctaLink: "https://prompt-mu.vercel.app/",
  },
  {
    id: "kiaan-tech",
    filterClass: "soundcloud", // Full Stack
    title: "KiaanTech Platform",
    categoryLabel: "Full Stack",
    thumb: "img/thumbs/42-34.jpg",
    cover: "img/portfolio/kiaan.png",
    description:
      "Business platform with authentication, dashboards, and scalable backend APIs.",
    techStack: "Node.js, React, MySQL",
    date: "2024",
    gallery: ["img/portfolio/kiaan.png"],
    ctaText: "View Project",
    ctaLink: "#",
  },

  {
    id: "firebond",
    filterClass: "youtube", // Frontend
    title: "Firebond Website",
    categoryLabel: "Frontend",
    thumb: "img/thumbs/42-34.jpg",
    cover: "img/portfolio/firebond.png",
    description:
      "Marketing website with polished UI components and responsive design.",
    techStack: "React",
    date: "2024",
    gallery: ["img/portfolio/firebond.png"],
    ctaText: "Visit Website",
    ctaLink: "https://www.firebond.xyz/",
  },
];
