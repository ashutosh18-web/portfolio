/**
 * ====================================================================
 * PORTFOLIO PROFILE CONFIGURATION
 * ====================================================================
 * Edit your details, social links, skills, and projects here!
 * Everything on the website automatically updates from this file.
 */

export const profileData = {
  // --- Personal Information ---
  name: "Ashutosh Chaudhari",
  role: "Future Software Developer",
  tagline: "B.Tech CSE (AI & ML) student crafting immersive, interactive web experiences with JavaScript, React, and Three.js.",
  status: "2nd Year CSE (AI & ML) • Batch of 2029",
  college: "KCC Institute of Technology and Management",
  degree: "B.Tech CSE (AI & ML)",
  batch: "2026 - 2029",
  location: "Greater Noida, India",
  phone: "+91 9934113207",
  whatsapp: "https://wa.me/919934113207?text=Hi%20Ashutosh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  email: "ashutoshchaudhari188@gmail.com",
  resumeUrl: "#", // Link to your Google Drive resume or PDF file

  // --- Quick Stats in Hero ---
  stats: [
    { label: "College Year", value: "2nd Year (2026)" },
    { label: "Branch", value: "CSE (AI & ML)" },
    { label: "Batch", value: "Batch of 2029" },
    { label: "Tech Stack", value: "React • Three.js" },
  ],

  // --- About Me Story ---
  about: {
    story: `Hey! I'm Ashutosh Chaudhari, a 2nd-year B.Tech student specializing in Computer Science & Engineering (AI & ML) at KCC Institute of Technology and Management, Greater Noida (Batch of 2029).
    
While building a strong foundation in core computer science, data structures, and AI/ML principles, I fell in love with interactive frontend engineering and 3D graphics on the web. I build high-performance, visually striking applications using React, Tailwind CSS, and WebGL/Three.js.
    
I love bridging engineering logic with cutting-edge visual experiences. My goal is to secure a software engineering or frontend development internship where I can contribute to high-impact web apps and learn from experienced engineers.`,
    highlights: [
      "B.Tech CSE (AI & ML) at KCC Institute of Technology and Management",
      "2nd Year Undergrad (2026) • Batch of 2029",
      "Focused on React, Three.js, and Modern Component Architecture",
      "Active problem solver practicing Data Structures, Algorithms & AI/ML",
    ],
  },

  // --- Social Media Links ---
  socials: {
    github: "https://github.com/ashutosh18-web",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    whatsapp: "https://wa.me/919934113207",
    phone: "tel:+919934113207",
    email: "ashutoshchaudhari188@gmail.com",
  },

  // --- Skills & Technologies ---
  skills: [
    {
      category: "Core Languages",
      items: [
        { name: "JavaScript (ES6+)", level: "Intermediate", icon: "Code2", focus: true },
        { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout" },
        { name: "C++", level: "DSA & Academic", icon: "Cpu" },
        { name: "Python", level: "Basics & Scripting", icon: "Terminal" },
      ],
    },
    {
      category: "Frontend & 3D Creative",
      items: [
        { name: "React.js", level: "Intermediate", icon: "Atom", focus: true },
        { name: "Three.js / WebGL", level: "Learning & Building", icon: "Box", focus: true },
        { name: "Tailwind CSS", level: "Intermediate", icon: "Palette" },
        { name: "Responsive Design", level: "Advanced", icon: "Smartphone" },
      ],
    },
    {
      category: "Tools & Development",
      items: [
        { name: "Git & GitHub", level: "Version Control", icon: "GitBranch" },
        { name: "Vite", level: "Build Tooling", icon: "Zap" },
        { name: "VS Code", level: "Daily Driver", icon: "AppWindow" },
        { name: "Chrome DevTools", level: "Debugging & Profiling", icon: "Search" },
      ],
    },
    {
      category: "Currently Learning Roadmap",
      items: [
        { name: "TypeScript", level: "Type Safety", icon: "FileCode", focus: true },
        { name: "Node.js & Express", level: "Backend APIs", icon: "Server" },
        { name: "Custom GLSL Shaders", level: "Advanced 3D Effects", icon: "Sparkles" },
        { name: "Next.js", level: "Full-Stack React", icon: "Layers" },
      ],
    },
  ],

  // --- Featured Projects ---
  projects: [
    {
      id: "portfolio-3d",
      title: "Interactive 3D WebGL Portfolio",
      category: "Creative Web / Three.js",
      description:
        "A futuristic developer portfolio featuring interactive 3D particle systems, cursor-reactive geometries, glassmorphism UI, and zero-config GitHub Pages deployment.",
      detailedDescription:
        "Built to showcase frontend mastery and creative coding as a 2nd-year student. Integrates pure Three.js WebGL canvas with React lifecycle hooks, utilizing requestAnimationFrame optimization, lerp cursor interpolation, and Tailwind CSS backdrop filters for a cutting-edge aesthetic.",
      tags: ["React", "Three.js", "WebGL", "Tailwind CSS", "Vite"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "#",
      stats: { fps: "60 FPS", particles: "800+", loadTime: "< 0.8s" },
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "apex-horizon",
      title: "Apex Horizon - Weather & Analytics App",
      category: "Frontend Web App",
      description:
        "A real-time weather and environmental analytics dashboard utilizing public REST APIs, dynamic temperature charts, and location-based forecasting.",
      detailedDescription:
        "Features asynchronous API data fetching with error boundaries, dynamic UV and wind metric cards, responsive search with autocomplete, and responsive SVG weather trend visualizations.",
      tags: ["React", "REST API", "Tailwind CSS", "Chart.js", "LocalStorage"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "#",
      stats: { data: "Live API", theme: "Dark / Light", responsive: "100%" },
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: "pulseflow",
      title: "PulseFlow - Modern Kanban & Task Workspace",
      category: "Productivity Tool",
      description:
        "An intuitive task management board with drag-and-drop workflow columns, priority tagging, persistent local state, and productivity metrics.",
      detailedDescription:
        "Designed to help students organize college assignments and coding milestones. Supports creating, editing, and categorizing tasks into custom lanes, with full local persistence so data never disappears.",
      tags: ["React", "Drag & Drop", "Tailwind CSS", "State Management"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "#",
      stats: { storage: "LocalStorage", columns: "Customizable", tags: "Color Coded" },
      color: "from-pink-500 to-rose-600",
    },
  ],

  // --- Education & Journey Timeline ---
  education: [
    {
      period: "2025 - 2029 (Current: 2nd Year, 2026)",
      title: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "KCC Institute of Technology and Management, Greater Noida",
      description:
        "Pursuing B.Tech with specialization in Artificial Intelligence & Machine Learning. Studying core computer science subjects (Data Structures & Algorithms, OOP, Database Systems) while building high-performance 3D web applications.",
      badge: "In Progress",
    },
    {
      period: "2026",
      title: "Frontend & 3D WebGL Specialization",
      institution: "Self-Directed & Project Building",
      description:
        "Mastering modern JavaScript, React component architecture, Tailwind CSS, and Three.js WebGL for immersive interactive user interfaces.",
      badge: "Active Focus",
    },
    {
      period: "Prior",
      title: "Higher Secondary (12th Grade) - Science & Mathematics",
      institution: "CBSE / State Board",
      description:
        "Completed higher secondary schooling with strong analytical foundations in Mathematics, Physics, and logical problem solving.",
      badge: "Completed",
    },
  ],
};
