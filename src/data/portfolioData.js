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
  {
    id: "comfortjourney",
    filterClass: "soundcloud", // Full Stack
    title: "ComfortJourney",
    categoryLabel: "Full Stack",
    thumb: "img/thumbs/42-56.jpg",
    cover: "img/portfolio/comfort.png",
    description: `ComfortJourney is a <strong>full-stack travel and bus booking platform</strong> designed to simplify seat selection and booking across multiple routes and stations.<br><br>The platform features <strong>real-time seat vacancy display</strong> between stations, allowing travelers to instantly see available seats on specific routes. Users can browse routes, check <strong>live occupancy status for each leg of the journey</strong>, and complete bookings with integrated payment gateways and booking confirmations.<br><br>Built with <strong>Node.js backend, React frontend, and MySQL database</strong>, the system handles complex logistics including multi-leg journeys, dynamic pricing, and third-party integrations for reliable, scalable operations.`,
    techStack: "Node.js, React, MySQL",
    date: "2024",
    gallery: ["img/portfolio/comfort.png"],
    ctaText: "Visit Website",
    ctaLink: "https://www.comfortjourney.in/",
  },
  // {
  //   id: "clickup-ui",
  //   filterClass: "youtube", // Frontend
  //   title: "ClickUp UI Clone",
  //   categoryLabel: "Frontend",
  //   thumb: "img/thumbs/42-34.jpg",
  //   cover: "img/portfolio/clickup.png",
  //   description: `A <strong>simple landing page</strong> built as per the product requirements, inspired by ClickUp's clean and modern design.<br><br>The UI focuses on <strong>usability, layout precision, and responsiveness</strong>, ensuring a seamless experience across devices.<br><br>Developed with <strong>Next.js and React</strong>, this project demonstrates best practices in frontend development for landing pages and product showcases.`,
  //   techStack: "Next.js, HTML, CSS",
  //   date: "2024",
  //   gallery: [],
  //   ctaText: "View Demo",
  //   ctaLink: "https://prompt-mu.vercel.app/",
  // },
  {
    id: "kiaan-tech",
    filterClass: "soundcloud", // Full Stack
    title: "KiaanTech Platform",
    categoryLabel: "Full Stack",
    thumb: "img/thumbs/42-34.jpg",
    cover: "img/portfolio/kiaan/kiaan_2.png",
    description: `KiaanTech Platform is a <strong>comprehensive warehouse resource management software</strong> designed to streamline operations for businesses handling inventory and logistics.<br><br>The platform enables efficient management of <strong>sales, purchase bills, and site-to-site transfers</strong>, along with a dedicated <strong>HR panel</strong> for personnel oversight. It includes custom warehouse management CRM features like <strong>inventory tracking and ledger systems</strong> to ensure accurate record-keeping and operational transparency.<br><br>Built with <strong>authentication, dashboards, and scalable backend APIs</strong>, KiaanTech provides a robust solution for businesses seeking to optimize their warehouse and resource management processes.`,
    techStack: "Node.js, Angular Js, MySQL, AWS, REST APIs",
    date: "2025",
    gallery: [
      "img/portfolio/kiaan/kiaan_hero.png",
      "img/portfolio/kiaan/kiaan_3.png",
      "img/portfolio/kiaan/kiaan_4.png",
    ],
    ctaText: "Internal Use",
    ctaLink: "#",
  },

  {
    id: "telegram-whatsapp-automation",
    filterClass: "detail", // Backend
    title: "Telegram & WhatsApp Automation",
    categoryLabel: "Backend",
    thumb: "img/thumbs/42-34.jpg",
    cover: "img/portfolio/telegram/tele_hero.png",
    description: `A <strong>backend automation pipeline</strong> that streamlines publishing deals shared to a Telegram bot into short links with referral IDs and distributes them across platforms.<br><br>The system <strong>scrapes target pages in real-time</strong>, extracts pricing and metadata (title, images), and generates short/referral-enabled URLs before posting them to the website and sending via WhatsApp channels.<br><br>Built for reliability and throughput, the pipeline uses <strong>headless scraping, link shorteners, message queues, and API integrations</strong> (Telegram Bot API, WhatsApp/Twilio) to ensure accurate, timely distribution and tracking of deals.`,
    techStack:
      "Node.js, Puppeteer (or Playwright), Redis, PostgreSQL, Telegram Bot API, WhatsApp/Twilio API",
    date: "2025",
    gallery: [
      // "img/portfolio/telegram/tele_hero.png",
      "img/portfolio/telegram/tele_1.png",
      "img/portfolio/telegram/tele_2.png",
      "img/portfolio/telegram/tele_3.png",
    ],
    ctaText: "Not Maintained",
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

  {
    id: "sakhimaster",
    filterClass: "youtube", // Frontend
    title: "SakhiMaster — Everyday Nourishment",
    categoryLabel: "Frontend",
    thumb: "img/portfolio/shakhimaster/shakhi_hero.png",
    cover: "img/portfolio/shakhimaster/shakhi_hero.png",
    description: `SakhiMaster is a <strong>brand-focused product site</strong> showcasing premium rice and wheat products with rich imagery and clear product calls-to-action.<br><br>The site highlights a curated product catalog with detailed product pages, nutritional information, and visual product grids that make it easy for visitors to explore variants such as Royal Bashkati and Golden Wheat Sharbati Atta.<br><br>Front-end design emphasizes <strong>clean layouts, responsive components, and accessible navigation</strong>, with integrated contact and social links to support customer engagement and local distribution inquiries.`,
    techStack: "HTML, CSS, JavaScript",
    date: "2025",
    gallery: [
      // "img/portfolio/shakhimaster/shakhi_hero.png",
      "img/portfolio/shakhimaster/shakhi_2.png",
      "img/portfolio/shakhimaster/shakhi_3.png",
      "img/portfolio/shakhimaster/shakhi_4.png",
    ],
    ctaText: "Visit Website",
    ctaLink: "https://www.sakhimaster.com/",
  },

  {
    id: "synapse-website",
    filterClass: "youtube", // Frontend
    title: "Synapse — Workforce Solutions",
    categoryLabel: "Frontend",
    thumb: "img/portfolio/synapse/synapse_hero.png",
    cover: "img/portfolio/synapse/synapse_hero.png",
    description: `Synapse is a <strong>comprehensive workforce solutions</strong> website offering staffing, payroll, HR training, and candidate services tailored for employers and job seekers.<br><br>The site presents clear service pathways — from <strong>staffing and payroll</strong> to <strong>recruitment training</strong> — with rich visual sections, client testimonials, and call-to-action flows designed to convert both employers and candidates.<br><br>Built with a focus on clarity and accessibility, the frontend emphasizes <strong>clean layouts, responsive components, and straightforward navigation</strong> to make complex HR services approachable for visitors.`,
    techStack: "Next.js, React",
    date: "2025",
    gallery: [
      // "img/portfolio/synapse/synapse_hero.png",
      "img/portfolio/synapse/synapse_2.png",
      "img/portfolio/synapse/synapse_3.png",
      "img/portfolio/synapse/synapse_4.png",
    ],
    ctaText: "Visit Website",
    ctaLink: "https://www.synapse-org.com/",
  },

  {
    id: "kiaan-infra",
    filterClass: "youtube", // Frontend
    title: "Kiaan Infrastructure — Construction Services",
    categoryLabel: "Frontend",
    thumb: "img/portfolio/kiaan-infra/infra_hero.png",
    cover: "img/portfolio/kiaan-infra/infra_hero.png",
    description: `Kiaan Infrastructure is a <strong>construction and infrastructure company website</strong> presenting A-grade commercial, residential, and industrial projects with emphasis on <strong>safety, sustainability, and quality</strong>.<br><br>The site showcases recent and ongoing projects, detailed service sections (architecture, piling, road works, interiors), client testimonials, and a clear <strong>request-a-quote</strong> flow to convert leads into appointments.<br><br>Frontend focuses on <strong>professional presentation, project galleries, and accessible contact paths</strong>, making it easy for prospective clients and partners to explore capabilities and initiate engagement.`,
    techStack: "HTML, CSS, JavaScript",
    date: "2025",
    gallery: [
      // "img/portfolio/kiaan-infra/infra_hero.png",
      "img/portfolio/kiaan-infra/infra_2.png",
      "img/portfolio/kiaan-infra/infra_3.png",
      "img/portfolio/kiaan-infra/infra_4.png",
    ],
    ctaText: "Visit Website",
    ctaLink: "https://www.kiaaninfra.in/",
  },
];
