// /src/app/data/mobileData.ts
import { 
    SiFlutter, 
    SiDart, 
    SiFirebase,
    SiSqlite, 
  } from 'react-icons/si'
  import { HiOutlineCloudUpload } from 'react-icons/hi'
  
  export const mobileStats = [
    { number: "1+", label: "Years Exp." },
    // { number: "8+", label: "Mobile Apps" },
    { number: "100%", label: "Cross-Platform" }
  ]
  
  export const mobileTechStack = [
    { icon: SiFlutter, name: "Flutter" },
    { icon: SiDart, name: "Dart" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: HiOutlineCloudUpload, name: "RESTful APIs" },
    { icon: SiSqlite, name: "SQLite/Hive" }
  ]
  
  export const mobileProjects = [
    {
      id: 1,
      title: "Flutter SignUp and SignIn UI",
      tag: "Flutter ",
      desc: "Flutter SignUp and SignIn page with a beautiful User Interface.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tech: ["Flutter"],
      date: "May 2026",
      previewUrl: "#",
      githubUrl: "https://github.com/DenisPKavishe/Flutter-SignUp-and-SignIn.git"
    },
  ]
  
  export const mobileExperience = [
    {
      year: "Jul–Sept 2025",
      title: "e-Government Authority (e-GA)",
      role: "Mobile Development Trainee",
      desc: "Assisted in developing government service mobile applications. Gained hands-on experience with Flutter state management (Provider, Riverpod). Implemented responsive UI components following Material Design 3 guidelines. Participated in code reviews and agile development sprints. Integrated RESTful APIs for data synchronization."
    }
  ]
  
  export const mobileEducation = [
    {
      year: "2023–2026",
      title: "Institute of Accountancy Arusha",
      role: "Bachelor of Computer Science",
      desc: "Completed courses in Mobile Development, UI/UX Design, and Database Management. Built multiple Flutter projects as part of coursework."
    }
  ]