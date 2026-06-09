import { TechItem, Project, Experience, Education } from '../types'

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase
} from "react-icons/si"

import { FiRefreshCw } from "react-icons/fi"
import { IconType } from "react-icons"


export const frontendTechStack: TechItem[] = [
  { icon: SiReact as IconType, name: "React.js" },
  { icon: SiNextdotjs as IconType, name: "Next.js" },
  { icon: SiTypescript as IconType, name: "TypeScript" },
  { icon: SiTailwindcss as IconType, name: "Tailwind CSS" },
  { icon: FiRefreshCw as IconType, name: "API Integration" },
  { icon: SiSupabase as IconType, name: "Supabase" }
]


export const frontendProjects: Project[] = [
  {
    id: 1,
    image: "/projects/khmmbaga.png",
    tag: "Next.js • Tailwind • TypeScript",
    title: "KH MMBAGA Construction Company",
    desc: "Modern business website built with Next.js and TypeScript, featuring optimized performance, responsive UI, and improved loading speed for better user experience.",
    date: "April 2026",
    demoUrl: "https://khmmbaga-v2.vercel.app/",
    githubUrl: "https://github.com/DenisPKavishe/khmmbaga-v2.git"
  },
  {
    id: 2,
    image: "/projects/bbq.png",
    tag: "Next.js • E-commerce UI",
    title: "BBQ Restaurant Platform",
    desc: "Full-featured restaurant website with menu display, ordering system, and responsive design optimized for both mobile and desktop users.",
    date: "May 2026",
    demoUrl: "https://bbq-silk.vercel.app/",
    githubUrl: "https://github.com/DenisPKavishe/BBQ.git"
  },
  {
    id: 3,
    image: "/projects/godsplancharity.png",
    tag: "React • Supabase • Tailwind",
    title: "Gods Plan Charity Platform",
    desc: "Interactive charity platform with real-time data integration, Supabase backend connectivity, and modern UI for donation tracking and engagement.",
    date: "March 2026",
    demoUrl: "https://godplancharity.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 4,
    image: "/projects/BizSmartFrontend.png",
    tag: "Next.js • Dashboard UI",
    title: "BizSmart Frontend Dashboard",
    desc: "Business dashboard interface with dynamic components, optimized state management, and clean UI for financial and operational data visualization.",
    date: "March 2026",
    githubUrl: "https://github.com/DenisPKavishe/BizSmart-Frontend.git"
  }
]


export const frontendExperience: Experience[] = [
  {
    year: "May 2026",
    title: "KH MMBAGA CONSTRUCTION & SUPPLIER",
    role: "Frontend Developer",
    desc: "Improved application performance by 50% through Next.js optimization. Reduced development time by 40% using reusable components and enhanced UI consistency."
  },
  {
    year: "Feb–Apr 2026",
    title: "God's Plan Charity Foundation",
    role: "Frontend Developer",
    desc: "Built responsive React interfaces integrated with Supabase APIs. Improved SEO performance by 35% and enhanced user engagement through UI improvements."
  },
  {
    year: "Jul–Sept 2025",
    title: "e-Government Authority (e-GA)",
    role: "Frontend Trainee",
    desc: "Contributed to enterprise frontend systems, implemented responsive layouts, and collaborated on API integration with backend services."
  }
]


export const frontendEducation: Education[] = [
  {
    year: "2023–2026",
    title: "Institute of Accountancy Arusha",
    role: "Bachelor of Computer Science",
    desc: "Studied software engineering, frontend development, UI/UX design principles, and modern frameworks including React, Next.js, and TypeScript."
  }
]


export const frontendStats = [
  { number: "1+", label: "Years Exp." },
  { number: "5+", label: "Projects" }
]