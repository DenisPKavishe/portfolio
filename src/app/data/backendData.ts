import { TechItem, Project, Experience, Education } from '../types'

import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiPhp,
  SiMysql,
  SiGraphql
} from "react-icons/si"

import { TbApi, TbLock } from "react-icons/tb"
import { IconType } from "react-icons"


// ==========================================
// 1. TECH STACK SECTION
// ==========================================
export const backendTechStack: TechItem[] = [
  { icon: SiPython as IconType, name: "Python" },
  { icon: SiDjango as IconType, name: "Django / DRF" },
  { icon: SiPhp as IconType, name: "PHP" },
  { icon: TbApi as IconType, name: "RESTful APIs" },
  { icon: SiGraphql as IconType, name: "GraphQL" },
  { icon: SiPostgresql as IconType, name: "Supabase / Postgres" },
  { icon: SiRedis as IconType, name: "Redis Caching" },
  { icon: SiCelery as IconType, name: "Celery Task Queues" },
  { icon: TbLock as IconType, name: "JWT Auth" },
  { icon: SiMysql as IconType, name: "MySQL" }
]


// ==========================================
// 2. PROJECTS SECTION
// ==========================================
export const backendProjects: Project[] = [
  {
    id: 1,
    image: "/projects/BizsmartBackend.png",
    tag: "Django • Celery • Redis • REST API",
    title: "BizSmart ERP & Cashflow Management Engine",
    desc: "An enterprise-grade financial backend designed for high-throughput transactional consistency. Engineered with secure JWT authentication, optimized multi-tenant PostgreSQL queries, and an asynchronous processing layer powered by Celery and Redis to handle 2,000+ concurrent user sessions reliably.",
    techStack: ["Django REST", "Redis", "Celery", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/DenisPKavishe/BizSmart-Backend.git"
  },
  {
    id: 2,
    image: "projects/ExpensesTracker.jpeg",
    tag: "PHP • MySQL • Async Processing",
    title: "AI-Driven Financial Analytics & Expense Tracker",
    desc: "An event-driven backend platform processing over 10,000 financial events per hour. Integrates asynchronous background processing workflows with external LLM APIs via OpenRouter to deliver real-time, automated spending insights and automated financial categorization.",
    techStack: ["PHP", "OpenRouter", "MySQL", "HTML/CSS/JavaScript"],
    githubUrl: "https://github.com/DenisPKavishe/expenses-tracker.git"
  },
  {
    id: 3,
    image: "/projects/inventory.jpeg",
    tag: "PHP • MySQL • Redis Caching",
    title: "High-Concurrency Inventory Control System",
    desc: "A mission-critical inventory management system optimized with an aggressive Redis caching strategy that cut database strain by 70%. Implemented advanced row-level transactional locking and race-condition protections to guarantee flawless stock synchronization during peak traffic.",
    techStack: ["PHP", "MySQL", "HTML/CSS/JavaScript"],
    githubUrl: "https://github.com/DenisPKavishe/Inventory-Management-System.git"
  }
]


// ==========================================
// 3. EXPERIENCE SECTION
// ==========================================
export const backendExperience: Experience[] = [
  {
    year: "Feb–Apr 2026",
    title: "God's Plan Charity Foundation",
    role: "Backend Engineer",
    desc: "Architected a streamlined backend architecture leveraging Supabase and Django REST Framework to enable rapid, secure frontend integration. Utilized Supabase's managed PostgreSQL capabilities to bypass complex system overhead, while orchestrating Celery task queues and Redis for asynchronous donation workflows and background processing."
  },
  {
    year: "Jul–Sept 2025",
    title: "e-Government Authority (e-GA)",
    role: "Backend Engineer (Practical Training)",
    desc: "Immersed in enterprise-level public sector systems development during an intensive field placement. Gained hands-on experience designing and optimizing robust data layers with PostgreSQL, implementing secure stateless authentication via JWT, and building flexible, high-performance APIs utilizing both RESTful standards and GraphQL schemas within a Django architecture."
  }
]


// ==========================================
// 4. EDUCATION SECTION
// ==========================================
export const backendEducation: Education[] = [
  {
    year: "2023–2026",
    title: "Institute of Accountancy Arusha",
    role: "Bachelor of Computer Science",
    desc: "Specialized in backend systems design, database indexing and optimization, and distributed task queues. Rigorous focus on building high-performance, fault-tolerant network architectures."
  }
]


export const backendStats = [
  { number: "1+", label: "Years Exp." },
  { number: "3+", label: "API Projects" }
]