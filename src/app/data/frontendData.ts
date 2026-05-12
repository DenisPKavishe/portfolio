import { TechItem, Project, Experience, Education } from '../types'

export const frontendTechStack: TechItem[] = [
  { icon: "⚛️", name: "React.js" },
  { icon: "▲", name: "Next.js" },
  { icon: "📘", name: "TypeScript" },
  { icon: "🎨", name: "Tailwind CSS" },
  { icon: "🔄", name: "API Integration" },
  { icon: "📦", name: "Supabase" }
]

export const frontendProjects: Project[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tag: "Next.js / React",
    title: "Modern E-commerce Platform",
    desc: "Full-featured e-commerce with cart, payments, and admin dashboard.",
    date: "May 2026",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    tag: "React Native",
    title: "TaskFlow Mobile App",
    desc: "Productivity app with real-time sync and offline support.",
    date: "April 2026",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    tag: "Next.js / Tailwind",
    title: "Analytics Dashboard",
    desc: "Interactive dashboard with real-time data visualization.",
    date: "March 2026",
    demoUrl: "#",
    githubUrl: "#"
  }
]

export const frontendExperience: Experience[] = [
  { 
    year: "May 2026", 
    title: "KH MMBAGA CONSTRUCTION & SUPPLIER", 
    role: "Frontend Developer", 
    desc: "Optimized performance → 50% faster load times. Implemented Next.js → 40% faster development. Boosted user engagement by 30%." 
  },
  { 
    year: "Feb–Apr 2026", 
    title: "God's Plan Charity Foundation", 
    role: "Frontend Developer", 
    desc: "React.js implementation → 60% faster development. Integrated Supabase API for real-time data. SEO optimization → 35% increase." 
  },
  { 
    year: "Jul–Sept 2025", 
    title: "e-Government Authority (e-GA)", 
    role: "Practical Trainee", 
    desc: "Real-world project collaboration with industry professionals. Critical problem-solving & client communication." 
  }
]

export const frontendEducation: Education[] = [
  { 
    year: "2023–2026", 
    title: "Institute of Accountancy Arusha", 
    role: "Bachelor of Computer Science", 
    desc: "Participated in coding competitions. Completed projects on Frontend, Backend Development." 
  }
]

export const frontendStats = [
  { number: "3+", label: "Years Exp." },
  { number: "15+", label: "Projects" }
]