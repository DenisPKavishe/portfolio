import { TechItem, Project, Experience, Education, Certification } from '../types'

export const dataTechStack: TechItem[] = [
  { icon: "📊", name: "Excel / Power Query" },
  { icon: "🐍", name: "Python (pandas)" },
  { icon: "🗄️", name: "SQL (PostgreSQL)" },
  { icon: "📈", name: "Tableau / Power BI" },
  { icon: "🎨", name: "Matplotlib / Seaborn" },
  { icon: "📉", name: "Statistical Analysis" }
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
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google • Coursera",
    date: "March 2024",
    credentialId: "GDA-8274-9KLM-2NOP",
    skills: ["Data Cleaning", "SQL", "Tableau", "R"],
    description: "Comprehensive program covering data cleaning, analysis, visualization, and R programming. Hands-on with spreadsheets, SQL, Tableau."
  },
  {
    id: 2,
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM • Coursera",
    date: "January 2025",
    credentialId: "IBM-DS-5X7Y-3Z1W",
    skills: ["Python", "pandas", "matplotlib", "ML Basics"],
    description: "10-course program covering Python, pandas, numpy, matplotlib, seaborn, SQL, and machine learning fundamentals."
  },
  {
    id: 3,
    title: "Microsoft Power BI Data Analyst (PL-300)",
    issuer: "Microsoft",
    date: "October 2024",
    credentialId: "PL300-7K9L-2M8N",
    skills: ["Power BI", "DAX", "Data Modeling", "Dashboard Design"],
    description: "Official Microsoft certification in Power BI data modeling, DAX, visualization, and dashboard deployment."
  },
  {
    id: 4,
    title: "Advanced Excel for Data Analysis",
    issuer: "LinkedIn Learning",
    date: "June 2024",
    credentialId: "LI-EXCEL-4F6H-9J2K",
    skills: ["Power Query", "Advanced Formulas", "PivotTables", "VBA"],
    description: "Advanced Excel skills including Power Query, Dynamic Arrays, Advanced Formulas, PivotTables, and automation."
  },
  {
    id: 5,
    title: "SQL for Data Analysis (Advanced)",
    issuer: "DataCamp",
    date: "August 2024",
    credentialId: "DC-SQL-ADV-7P8Q-1R2S",
    skills: ["Window Functions", "CTEs", "Query Optimization", "PostgreSQL"],
    description: "Mastering complex joins, window functions, CTEs, query optimization, and analytical SQL patterns."
  },
  {
    id: 6,
    title: "Tableau Desktop Specialist",
    issuer: "Tableau / Salesforce",
    date: "December 2024",
    credentialId: "TDS-3M4N-5P6Q-7R8S",
    skills: ["Tableau Desktop", "Data Storytelling", "Calculated Fields", "Dashboard Design"],
    description: "Official Tableau certification covering data connections, visual analytics, dashboards, and storytelling."
  }
]

export const dataExperience: Experience[] = [
  { 
    year: "May 2026", 
    title: "KH MMBAGA CONSTRUCTION & SUPPLIER", 
    role: "Data Analyst", 
    desc: "Developed interactive Excel dashboards tracking KPIs. Automated reporting using Python scripts saving 15 hours weekly. Analyzed supply chain data reducing inventory costs by 20%." 
  },
  { 
    year: "Feb–Apr 2026", 
    title: "God's Plan Charity Foundation", 
    role: "Data Analyst", 
    desc: "Built SQL queries for donor analytics. Created Tableau dashboards visualizing fundraising trends. Performed cohort analysis improving donor retention by 18%." 
  },
  { 
    year: "Jul–Sept 2025", 
    title: "e-Government Authority (e-GA)", 
    role: "Data Analytics Trainee", 
    desc: "Assisted in ETL processes using Python pandas. Generated statistical reports for government services. Cleaned and validated large datasets using SQL." 
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
  { number: "4+", label: "Years Exp." },
  { number: "50+", label: "Dashboards" }
]