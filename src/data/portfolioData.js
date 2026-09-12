export const SERVICES = [
  {
    id: "web-design",
    title: "Web Design",
    shortDesc: "Modern, responsive and conversion-focused website interfaces tailored to your brand identity.",
    icon: "Layout",
    fullDesc: "We craft visually stunning, UI/UX optimized websites designed to captivate your visitors from the first second. Our design process combines modern aesthetics, typography, visual hierarchy, and strategic user paths that turn traffic into high-value leads.",
    deliverables: ["Figma / Wireframes", "Interactive Prototypes", "Mobile-First Design System", "Conversion UI/UX Audit"],
    tech: ["Figma", "Adobe XD", "Tailwind CSS", "Framer"]
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDesc: "Fast, scalable and functional websites built around custom business requirements.",
    icon: "Code2",
    fullDesc: "From custom React applications to high-converting Next.js platforms, we build robust digital products with clean, maintainable architecture. High performance, sub-second load times, and flawless mobile responsiveness come standard.",
    deliverables: ["Custom Full-Stack Development", "API Integration", "CMS Integration (WordPress/Headless)", "Speed & Performance Optimization"],
    tech: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    shortDesc: "Professional visual identities and graphic assets that make businesses unforgettable.",
    icon: "Palette",
    fullDesc: "Your brand is your promise to your customers. We design cohesive visual brand identities—from memorable logos and color palettes to typography guidelines, print collaterals, and digital brand assets.",
    deliverables: ["Logo Design & Mark", "Brand Identity Guidelines", "Business Stationery & Cards", "Social & Marketing Assets"],
    tech: ["Illustrator", "Photoshop", "InDesign", "Figma"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Data-backed marketing strategies designed to improve online visibility and customer acquisition.",
    icon: "TrendingUp",
    fullDesc: "Reach the exact audience actively searching for your services. We craft multi-channel growth strategies including PPC ad campaigns, targeted funnel campaigns, and lead generation systems that maximize ROI.",
    deliverables: ["Growth Marketing Strategy", "Google & Meta Ads Management", "Conversion Rate Optimization (CRO)", "Analytics & ROI Reporting"],
    tech: ["Google Ads", "Meta Business Manager", "Google Analytics 4", "Semrush"]
  },
  {
    id: "social-media",
    title: "Social Media Management",
    shortDesc: "Creative content strategies that help brands stay consistent, engaging, and top-of-mind.",
    icon: "Share2",
    fullDesc: "We manage end-to-end social media operations for growing businesses. From content calendar planning and graphics creation to copywriting, hashtag strategy, and audience engagement.",
    deliverables: ["Content Strategy & Calendar", "Custom Post & Story Graphics", "Copywriting & Captioning", "Community Engagement & Growth"],
    tech: ["Canva Pro", "Photoshop", "Buffer", "Later", "Meta Suite"]
  },
  {
    id: "video-editing",
    title: "Reel & Video Editing",
    shortDesc: "Short-form creative content and video edits designed for modern social media platforms.",
    icon: "Video",
    fullDesc: "Short-form video is the #1 organic growth channel today. We turn raw footage into high-impact Instagram Reels, YouTube Shorts, and promo videos with crisp cuts, dynamic subtitles, motion graphics, and sound design.",
    deliverables: ["Instagram Reels & Shorts", "Corporate Promo Videos", "Dynamic Subtitles & Motion FX", "Audio Enhancement & Beats"],
    tech: ["Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve"]
  },
  {
    id: "portfolio-design",
    title: "Portfolio Design",
    shortDesc: "Professional portfolios that showcase businesses, creators, executives, and agency work.",
    icon: "Briefcase",
    fullDesc: "Stand out in a crowded market with a bespoke portfolio site. We help agencies, freelancers, artists, and executives showcase their key achievements, case studies, and services with elegance.",
    deliverables: ["Interactive Case Study Layouts", "Resume & Skill Showcase", "Contact & Lead Capture Setup", "Domain & Hosting Deployment"],
    tech: ["React.js", "Tailwind CSS", "Vite", "Vercel / Netlify"]
  },
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    shortDesc: "Search engine optimization strategies to rank higher on Google and drive organic growth.",
    icon: "Search",
    fullDesc: "Dominate search engine results pages. Our comprehensive SEO services include technical site audits, keyword research, on-page optimization, content cluster creation, and Google Business Profile optimization.",
    deliverables: ["Technical SEO Audit & Fixes", "Keyword & Competitor Research", "On-Page Content Optimization", "Local SEO & Google Maps Rank"],
    tech: ["Google Search Console", "Ahrefs", "Semrush", "Screaming Frog"]
  }
];

export const CATEGORIES = [
  "All",
  "Web Design",
  "Web Development",
  "Branding",
  "Graphic Design",
  "Social Media",
  "Video"
];

export const PROJECTS = [
  {
    id: "aryavik-job-portal",
    name: "Aryavik AI Job Search Platform",
    badge: "Featured Project",
    category: "Web Development",
    secondaryCategory: "Web Design",
    shortDesc: "AI-powered job hunt portal with intelligent candidate skill matching, smart recommendations, company job boards, and application tracking.",
    image: "/projects/aryavik-job-portal.jpg",
    overview: "Aryavik AI Job Platform is an intelligent career ecosystem designed to help job seekers find their dream career opportunities and empower recruiters to find top talent faster using AI-powered skill matching.",
    challenge: "Conventional job portals rely on static keyword searching, which results in low relevancy, high rejection rates, and overwhelming resume queues for hiring teams.",
    strategy: "We built an AI-driven recommendations engine that analyzes applicant skill profiles and instantly matches them with top opportunities from leading companies like Google, Amazon, Flipkart, and Nvidia.",
    designApproach: "Designed an engaging modern dual-theme UI (dark and light modes) featuring crisp job filter sidebars, location-based browsing (Delhi, Mumbai, Pune, Bangalore, Remote), company badges, and qualitative statistics counters.",
    development: "Engineered using React.js, Tailwind CSS, lightweight state architecture, and fast API integration to deliver sub-second search filtering across 10,000+ job listings.",
    finalResult: "Successfully connected 50,000+ job seekers with 10,000+ active opportunities across 1,000+ top companies.",
    technologies: ["React.js", "Tailwind CSS", "AI Recommendation Engine", "REST API", "JavaScript"],
    gallery: [
      "/projects/aryavik-job-portal.jpg"
    ]
  },
  {
    id: "dhwarkesh-aluminium",
    name: "Dhwarkesh Aluminium & Glass",
    badge: "Featured Client Project",
    category: "Web Design",
    secondaryCategory: "Web Development",
    shortDesc: "Premium architectural fabrication showcase website for Domal & Jindal branded aluminium doors, windows, ACP cladding, and glass partitions.",
    image: "/projects/dhwarkesh-aluminium.jpg",
    overview: "Dhwarkesh Aluminium (દ્વારકેશ એલ્યુમિનિયમ) is a trusted Gujarati architectural fabrication business with 15+ years of experience, specializing in Domal and Jindal branded premium aluminium sections and glass installations for homes and offices.",
    challenge: "The client needed a modern, multi-device digital web presence (with localized Gujarati copy) to display completed residential, commercial, shop, and industrial projects, while generating direct call and WhatsApp inquiries.",
    strategy: "Created an interactive showcase featuring completed premium works (Sliding Doors & Windows, Glass Partitions, ACP Cladding, Glass Railings) along with customer trust indicators (15+ Years Experience, 500+ Happy Clients, 1000+ Completed Projects).",
    designApproach: "Clean high-contrast architectural layout combining trustworthy blue and orange accent tones, project filter categories, high-resolution photo showcases, and responsive device previews.",
    development: "Developed with React and Tailwind CSS, featuring direct WhatsApp click-to-chat routing, instant phone calls, fast asset optimization, and targeted local SEO.",
    finalResult: "Delivered a high-converting digital portfolio driving a 60% surge in direct WhatsApp inquiries for custom home and office fabrication.",
    technologies: ["React.js", "Tailwind CSS", "WhatsApp Lead API", "Local SEO", "Responsive Layout"],
    gallery: [
      "/projects/dhwarkesh-aluminium.jpg"
    ]
  },
  {
    id: "petcare-system",
    name: "PetCare System SaaS Platform",
    badge: "Featured SaaS Project",
    category: "Web Development",
    secondaryCategory: "Web Design",
    shortDesc: "All-in-one pet care management platform for veterinary clinics, grooming spas, and pet parents with online appointment booking, medical records, and smart insights.",
    image: "/projects/petcare-system.jpg",
    overview: "PetCare System is a comprehensive SaaS web platform designed for veterinary clinics, pet grooming spas, and pet parents to manage medical histories, appointment scheduling, grooming, and luxury boarding.",
    challenge: "Veterinary clinics and pet care centers face fragmented booking tools, paper medical records, and missed vaccination schedules leading to operational delays and lower client retention.",
    strategy: "We built a unified digital ecosystem featuring an intuitive dashboard, automated appointment scheduling, pet health tracking (85% vaccination metrics), and luxury boarding management.",
    designApproach: "Friendly purple and indigo gradient visual identity paired with crisp medical dashboard UI cards, pet health status charts, and multi-device responsive web layouts.",
    development: "Engineered using React.js, Tailwind CSS, real-time booking APIs, medical history records system, and responsive web component architecture.",
    finalResult: "Successfully onboarded 10,000+ pet parents and 1,000+ veterinary clinics managing over 50,000+ pets.",
    technologies: ["React.js", "Tailwind CSS", "SaaS Architecture", "REST API", "JavaScript"],
    gallery: [
      "/projects/petcare-system.jpg"
    ]
  },
  {
    id: "aryavik-brand-identity",
    name: "Aryavik Brand Identity",
    badge: "Branding",
    category: "Branding",
    secondaryCategory: "Graphic Design",
    isImageOnly: true,
    image: "/logo.png",
    gallery: [
      "/logo.png"
    ]
  },
  {
    id: "dhwarkesh-branding",
    name: "Dhwarkesh Aluminium Logo & Branding",
    badge: "Branding",
    category: "Branding",
    secondaryCategory: "Graphic Design",
    isImageOnly: true,
    image: "/projects/dhwarkesh-logo.png",
    gallery: [
      "/projects/dhwarkesh-logo.png"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "We deep dive into your business model, target audience, competitive landscape, and key project goals."
  },
  {
    step: "02",
    title: "Strategize",
    description: "We define the right digital roadmap, user flows, content structure, and tech stack for maximum ROI."
  },
  {
    step: "03",
    title: "Design",
    description: "We craft modern, pixel-perfect visual interfaces with clean visual hierarchy, typography, and responsive layouts."
  },
  {
    step: "04",
    title: "Build",
    description: "We develop custom, clean code optimized for lightning speed, mobile devices, search engines, and security."
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "We rigorously test, deploy your digital platform to production, and provide reliable long-term support."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Business-Focused Approach",
    description: "We don't just design pretty screens—we build strategically to drive measurable growth, conversions, and sales."
  },
  {
    title: "Modern & Responsive Design",
    description: "Every layout we create looks stunning and functions seamlessly across all mobile, tablet, and desktop viewports."
  },
  {
    title: "Transparent Communication",
    description: "Direct access to our team with regular updates, clear timelines, honest feedback, and zero surprise fees."
  },
  {
    title: "Quality-Driven Development",
    description: "Clean, maintainable, standards-compliant code built for high speed, search visibility, and security."
  },
  {
    title: "Creative + Technical Expertise",
    description: "A rare fusion of artistic graphic design, content strategy, and robust engineering under one roof."
  },
  {
    title: "Long-Term Support",
    description: "We build lasting partnerships, offering ongoing maintenance, security updates, and digital growth support."
  }
];

export const QUALITATIVE_STATS = [
  { value: "100%", label: "Mobile Responsive", subtext: "Pixel-perfect on all screen sizes" },
  { value: "Sub-Second", label: "Lightning Speed", subtext: "Optimized performance & assets" },
  { value: "Custom", label: "Tailored Solutions", subtext: "Zero cookie-cutter templates" },
  { value: "End-to-End", label: "Full Agency Support", subtext: "Design, build & growth strategy" }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Aryavik Technologies transformed our digital presence completely. The custom web platform they built gave our brand instant authority in the market.",
    author: "Uttam Bambhaniya",
    role: "Founder, TechVentures",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "Web Development"
  },
  {
    id: 2,
    quote: "Working with Aryavik Technologies was effortless. Clear timeline, exceptional graphic design quality, and proactive communication throughout.",
    author: "Priya Patel",
    role: "Marketing Lead, Lumina Organics",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "Branding & Social"
  },
  {
    id: 3,
    quote: "Their video editing and reel content strategy increased our social engagement significantly. High energy, super responsive team!",
    author: "Vikram Mehta",
    role: "Director, Apex Club",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "Reel & Video Editing"
  }
];
