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
    id: "savory-bistro",
    name: "Savoria Gourmet Dining",
    badge: "Concept Project",
    category: "Web Design",
    secondaryCategory: "Web Development",
    shortDesc: "A luxury restaurant web experience featuring dynamic menu interaction, online table reservation, and ambient visual story.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    overview: "Savoria is a high-end culinary establishment seeking to elevate its online presence to match its offline dining experience.",
    challenge: "The restaurant suffered from an outdated static menu PDF and cumbersome phone reservations, resulting in drop-offs and low online bookings.",
    strategy: "We architected an immersive dark-mode web application featuring rich food imagery, categorized digital menus with allergen tags, and a seamless 3-step instant reservation system.",
    designApproach: "Utilized rich warm amber tones mixed with charcoal navy glassmorphism to reflect the ambient lighting of the physical restaurant.",
    development: "Built with React and Tailwind CSS for rapid loading under 0.8 seconds, optimized image loading with Next-gen WebP formats.",
    finalResult: "Simulated 45% increase in online reservation inquiries and a 3.2x increase in menu viewing duration.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "prime-estates",
    name: "Apex Luxury Real Estate",
    badge: "Self-Initiated Project",
    category: "Web Development",
    secondaryCategory: "Web Design",
    shortDesc: "Modern real estate portal with property filter system, virtual tour showcases, and direct agent inquiry modules.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    overview: "A premium real estate platform showcasing commercial and high-net-worth residential properties across metropolitan regions.",
    challenge: "Traditional listing platforms are cluttered with heavy popups and slow map integrations, confusing prospective buyers.",
    strategy: "Designed a clean, minimalist property listing interface with instant search filters by price, location, bedroom count, and property type.",
    designApproach: "High-contrast clean white and deep navy palette, giving precedence to high-resolution architectural photography.",
    development: "Engineered responsive grid cards with quick quick-view modals and integrated direct WhatsApp lead routing to listing agents.",
    finalResult: "Streamlined property browsing experience with instantaneous search filtering and mobile-friendly layout.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "pulse-fitness",
    name: "PulseX Performance Gym",
    badge: "Concept Project",
    category: "Web Design",
    secondaryCategory: "Graphic Design",
    shortDesc: "High-energy fitness club web identity with membership calculator, class schedules, and trainer portfolios.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    overview: "PulseX is a modern fitness center offering personalized training, group crossfit classes, and holistic wellness programs.",
    challenge: "Converting passive website visitors into physical gym trial signups required a strong visual hook and clear call-to-actions.",
    strategy: "Created an energetic landing page featuring bold typography, dynamic video backgrounds, and a free 1-day pass booking widget.",
    designApproach: "Vibrant electric orange paired with dark slate gray, utilizing high-contrast typography and subtle glowing hover states.",
    development: "Developed an interactive class timetable grid allowing users to filter workouts by intensity and preferred timing.",
    finalResult: "Crafted a compelling, high-converting digital portal that clearly highlights gym amenities and membership perks.",
    technologies: ["React", "Tailwind CSS", "Lucide React"],
    gallery: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "fintech-saas",
    name: "FlowPay SaaS Landing Page",
    badge: "Self-Initiated Project",
    category: "Web Design",
    secondaryCategory: "Web Development",
    shortDesc: "Clean UI/UX landing page for a modern B2B financial automation software targeting growing startups.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    overview: "FlowPay provides automated invoice processing, real-time analytics, and instant payout rails for SaaS founders.",
    challenge: "Explaining complex financial tech concepts to decision makers within seconds before they lose attention.",
    strategy: "Structured the page around key user pain points, feature highlight cards with glassmorphism dashboards, and transparent pricing tables.",
    designApproach: "Minimalist corporate aesthetic with smooth blue-to-orange subtle gradients and crisp UI mockup cards.",
    development: "Implemented smooth scroll animations and responsive interactive ROI calculators built with lightweight JavaScript.",
    finalResult: "Delivered a silicon-valley grade SaaS landing page built for high conversion and maximum trust.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "lumina-coffee",
    name: "Lumina Artisan Coffee",
    badge: "Concept Project",
    category: "Branding",
    secondaryCategory: "Graphic Design",
    shortDesc: "Complete brand visual identity, eco-packaging design, typography rules, and social media media kit.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    overview: "Lumina is a specialty roastery sourcing ethically harvested coffee beans for international distribution.",
    challenge: "Creating a standout identity in a saturated coffee market while signaling premium quality and environmental responsibility.",
    strategy: "Developed an organic yet modern visual system centered around geometric line art, minimalist typography, and warm earthy tones.",
    designApproach: "Monochromatic earthy canvas accented with crisp warm orange highlights, minimalist product mockups, and custom badge stamps.",
    development: "Delivered a complete 30-page brand guidelines PDF, packaging assets for 3 bean roast profiles, and digital promo templates.",
    finalResult: "Established a cohesive visual identity ready for print packaging, retail displays, and digital storefronts.",
    technologies: ["Adobe Illustrator", "Photoshop", "Brand System Architecture"],
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "zenith-campaign",
    name: "Zenith Apparel Digital Marketing",
    badge: "Concept Project",
    category: "Social Media",
    secondaryCategory: "Video",
    shortDesc: "Comprehensive Meta & Instagram growth campaign including reel creative editing, ad copies, and social strategy.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    overview: "Zenith is a modern sustainable fashion line launching their autumn collection across digital platforms.",
    challenge: "Driving organic engagement and paid ad conversions amidst rising CPM costs on Meta ad networks.",
    strategy: "Curated 15 high-converting vertical video reels focusing on outfit styling, fabric durability, and behind-the-scenes production.",
    designApproach: "Fast-paced aesthetic video editing with custom typography overlays, rhythmic beat matching, and compelling Call To Actions.",
    development: "Ran targeted retargeting funnels and created reusable Instagram grid templates for long-term brand consistency.",
    finalResult: "Established a scalable content workflow producing high-impact social assets tailored for modern audiences.",
    technologies: ["Premiere Pro", "After Effects", "Meta Ads Manager", "Canva"],
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "aura-store",
    name: "Aura Essentials E-Commerce",
    badge: "Self-Initiated Project",
    category: "Web Development",
    secondaryCategory: "Web Design",
    shortDesc: "High-performance direct-to-consumer online store with instant cart drawer, product filters, and checkout flow.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    overview: "Aura Essentials sells organic skincare products directly to health-conscious consumers worldwide.",
    challenge: "Decreasing shopping cart abandonment and improving page speed on mobile devices.",
    strategy: "Re-architected the e-commerce storefront with single-click buy buttons, customer review drawers, and micro-animations.",
    designApproach: "Clean, hygienic aesthetic with soft off-white backgrounds, glass cards, and crisp product photography display grids.",
    development: "Optimized bundle footprint with React, reducing page load to under 1.1s on standard 4G mobile networks.",
    finalResult: "Created a frictionless online shopping experience with seamless navigation across mobile and desktop devices.",
    technologies: ["React.js", "Tailwind CSS", "REST API", "Lucide Icons"],
    gallery: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "exec-portfolio",
    name: "Dr. K. Mehta Executive Portfolio",
    badge: "Self-Initiated Project",
    category: "Graphic Design",
    secondaryCategory: "Web Design",
    shortDesc: "Sleek executive portfolio and personal brand website highlighting publications, keynote speeches, and consulting services.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    overview: "Dr. K. Mehta is a tech advisor and keynote speaker seeking an authoritative digital hub to manage speaking requests.",
    challenge: "Consolidating 15+ years of research papers, media appearances, and book launches into an elegant, readable experience.",
    strategy: "Built a timeline-driven portfolio with downloadable media press kits, video keynotes embed, and an automated booking form.",
    designApproach: "Sophisticated navy slate paired with warm gold-orange accents and editorial serif typography pairings.",
    development: "Fully responsive single-page web app with smooth anchor links and zero layout shifting.",
    finalResult: "Delivered a world-class personal branding website that projects immediate authority and credibility.",
    technologies: ["React", "Tailwind CSS", "HTML5", "CSS3"],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
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
