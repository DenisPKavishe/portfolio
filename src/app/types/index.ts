export interface TechItem {
    icon: string
    name: string
    category?: string
    proficiency?: number
  }
  
  export interface Project {
    id: number
    image?: string
    icon?: string
    tag: string
    title: string
    desc: string
    techStack?: string[]
    date?: string
    demoUrl?: string
    githubUrl?: string
  }
  
  export interface Experience {
    year: string
    title: string
    role: string
    desc: string
  }
  
  export interface Education {
    year: string
    title: string
    role: string
    desc: string
  }
  
  export interface Certification {
    id: number
    title: string
    issuer: string
    date: string
    credentialId: string
    skills: string[]
    description?: string
    icon?: string
  }
  
  export interface Stat {
    number: string
    label: string
  }
  
  export interface SocialLink {
    url: string
    icon: React.ReactNode
  }
  
  export interface NavbarVariant {
    variant: 'default' | 'frontend' | 'backend' | 'data'
  }