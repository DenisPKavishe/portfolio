import { TechItem, Project, Experience, Education } from '../types'

export const backendTechStack: TechItem[] = [
  { icon: "🐍", name: "Python" },
  { icon: "🌿", name: "Django / DRF" },
  { icon: "📡", name: "RESTful APIs" },
  { icon: "⚡", name: "Redis" },
  { icon: "🐝", name: "Celery" },
  { icon: "🐘", name: "PostgreSQL" }
]

export const backendProjects: Project[] = [
  {
    id: 1,
    icon: "🚀",
    tag: "Django + Celery + Redis",
    title: "E‑Commerce API Gateway",
    desc: "High‑throughput API with JWT auth, Redis caching, Celery for async invoice generation, rate limiting supporting 2k+ concurrent users.",
    techStack: ["Django REST", "Redis", "Celery", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    icon: "📊",
    tag: "Async Tasks + Webhooks",
    title: "Analytics Pipeline",
    desc: "Real‑time event processing using Celery + Redis as message broker, batched inserts, and async webhook delivery for 10k+ events/hour.",
    techStack: ["Celery", "Redis Streams", "Django", "Docker"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    icon: "🗄️",
    tag: "Optimized Caching Layer",
    title: "Redis‑Backed Microservice",
    desc: "Implemented Redis for session storage, database query caching (70% reduction in response time), and distributed locking for race conditions.",
    techStack: ["Redis", "DRF", "Docker", "JWT"],
    demoUrl: "#",
    githubUrl: "#"
  }
]

export const backendExperience: Experience[] = [
  { 
    year: "May 2026", 
    title: "KH MMBAGA CONSTRUCTION & SUPPLIER", 
    role: "Backend Developer", 
    desc: "Built RESTful APIs with Django REST Framework. Integrated Redis caching reducing response time by 60%. Implemented Celery for automated email notifications and report generation." 
  },
  { 
    year: "Feb–Apr 2026", 
    title: "God's Plan Charity Foundation", 
    role: "Backend Developer", 
    desc: "Developed async task queues with Celery + Redis for donation processing. Optimized PostgreSQL queries, implemented JWT authentication, and designed scalable webhook endpoints." 
  },
  { 
    year: "Jul–Sept 2025", 
    title: "e-Government Authority (e-GA)", 
    role: "Backend Trainee", 
    desc: "Collaborated on API versioning strategies, implemented Redis-based rate limiting, and assisted in migrating legacy systems to Django-based microservices." 
  }
]

export const backendEducation: Education[] = [
  { 
    year: "2023–2026", 
    title: "Institute of Accountancy Arusha", 
    role: "Bachelor of Computer Science", 
    desc: "Focus on backend architectures, distributed systems, and database optimization. Completed projects using Django, DRF, and message queues." 
  }
]

export const backendStats = [
  { number: "4+", label: "Years Exp." },
  { number: "20+", label: "API Projects" }
]