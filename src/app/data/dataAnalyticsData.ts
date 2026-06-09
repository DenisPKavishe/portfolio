import { SiChartdotjs, SiMaptiler, SiMysql, SiPowers, SiPython, SiStatista } from 'react-icons/si'
import { TechItem, Project, Experience, Education, Certification } from '../types'
import { SlPieChart } from 'react-icons/sl'

export const dataTechStack: TechItem[] = [
  { icon: SlPieChart, name: "Excel / Power Query" },
  { icon: SiPython, name: "Python (pandas)" },
  { icon: SiMysql, name: "SQL" },
  { icon: SiPowers, name: "Tableau / Power BI" },
  { icon: SiMaptiler, name: "Matplotlib / Seaborn" },
  { icon: SiStatista, name: "Statistical Analysis" }
]

export const dataProjects: Project[] = [
  {
    id: 1,
    icon: "📈",
    tag: "Python + Tableau",
    title: "Sales Performance Dashboard",
    desc: "Interactive dashboard analyzing 2M+ sales records. Identified key revenue drivers and seasonal trends, resulting in 15% sales increase.",
    techStack: ["Python", "Pandas", "Tableau"],
    demoUrl: "#"
  },
  {
    id: 2,
    icon: "🏥",
    tag: "Excel + Power BI",
    title: "Healthcare Analytics",
    desc: "Patient wait time analysis and resource optimization. Reduced average wait time by 25% through data-driven scheduling.",
    techStack: ["Excel", "Power BI", "DAX"],
    demoUrl: "#"
  },
  {
    id: 3,
    icon: "💰",
    tag: "SQL + Python",
    title: "Financial Fraud Detection",
    desc: "Anomaly detection model identifying fraudulent transactions with 92% accuracy using Python and SQL pattern recognition.",
    techStack: ["SQL", "Python", "Seaborn"],
    demoUrl: "#"
  }
]

export const certifications: Certification[] = [
  
  {
    id: 1,
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM Skill Build",
    date: "January 2025",
    skills: ["Python", "pandas", "matplotlib", "ML Basics"],
    description: "10-course program covering Python, pandas, numpy, matplotlib, seaborn, SQL, and machine learning fundamentals."
  },
]

export const dataExperience: Experience[] = [
  { 
    year: "May 2026", 
    title: "KH MMBAGA CONSTRUCTION & SUPPLIER", 
    role: "Data Analyst", 
    desc: "Developed interactive Excel dashboards tracking KPIs. Automated reporting using Python scripts saving 15 hours weekly. Analyzed supply chain data reducing inventory costs by 20%." 
  }
]

export const dataEducation: Education[] = [
  { 
    year: "2023–2026", 
    title: "Institute of Accountancy Arusha", 
    role: "Bachelor of Computer Science", 
    desc: "Specialization in Data Analytics & Business Intelligence. Completed projects on predictive modeling and data visualization using Python and Tableau." 
  }
]

export const dataStats = [
  { number: "1+", label: "Years Exp." },
  { number: "2+", label: "Dashboards" }
]

