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
      title: "Bank Pick App UI",
      tag: "Flutter • Figma",
      desc: "Convert high-fidelity Figma design into a modern, pixel-perfect mobile banking application UI.",
      image: "/projects/bankpick.jpeg",
      tech: ["Flutter"],
      date: "July 2026",
      demoUrl: "https://www.figma.com/design/0xrbZ6mTELoYBQ59DOHmqb/Free-Banking-Mobile-App-Ui-Kit-With-light---Dark-Mode-High-Quality-Ui-43--Screen-template--Community-?node-id=1-4&p=f&t=B3AjAhjci2AorGOq-0",
      githubUrl: "https://github.com/DenisPKavishe/BankPick-Mobile-UI.git"
    },
    {
      id: 2,
      title: "Fitness App UI",
      tag: "Flutter • Figma",
      desc: "Build a responsive layouts and interactive visual elements from Figma Design specific tailored for fitness tracking.",
      image: "/projects/workout.jpeg",
      tech: ["Flutter"],
      date: "July 2026",
      demoUrl: "https://www.figma.com/design/F0b6HahyBLELqBZq5buiVW/Fitness-App--Community-?node-id=0-1&p=f&t=30R7d90IMEdZZx4M-0",
      githubUrl: "https://github.com/DenisPKavishe/Fitness-App.git"
    },
    {
      id: 3,
      title: "Contact App",
      tag: "Flutter • Hard Coded Data",
      desc: "Develop a state managed app handling full contact lifecyle and favourite bookmarking.",
      image: "/projects/contact.jpeg",
      tech: ["Flutter"],
      date: "May 2026",
      demoUrl: "#",
      githubUrl: "https://github.com/DenisPKavishe/Contact-Flutter-App.git"
    },
    {
      id: 4,
      title: "Flutter SignUp and SignIn UI",
      tag: "Flutter ",
      desc: "Flutter SignUp and SignIn page with a beautiful User Interface.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tech: ["Flutter"],
      date: "May 2026",
      demoUrl: "#",
      githubUrl: "https://github.com/DenisPKavishe/Flutter-SignUp-and-SignIn.git"
    },
    {
      id: 5,
      title: "BMI Calculator App",
      tag: "Flutter ",
      desc: "Precise calculation logic for BMI calculation with dynamic UI feedback based on user metrics.",
      image: "https://tse3.mm.bing.net/th/id/OIP.ebRMAeiW88Wzj4XMPq1xuAHaHw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      tech: ["Flutter"],
      date: "June 2026",
      demoUrl: "https://www.figma.com/design/zkcKuYUWfcbqNcu2QUmUyB/BMI-Calculator-1--Community-?node-id=1-5&t=pqt2tPgRNY05brRh-0",
      githubUrl: "https://github.com/DenisPKavishe/BMI-Calculate.git"
    },
    {
      id: 6,
      title: "Task Management and activity tracker UI",
      tag: "Flutter ",
      desc: "Designed and built intuitive user interface from Figma to track daily user activities.",
      image: "/projects/daytask.jpeg",
      tech: ["Flutter"],
      date: "July 2026",
      demoUrl: "https://www.figma.com/design/0u1NusJbW8DIBfpQGEsKbc/DayTask---Task-Management-App-UI-Kit--Community-?node-id=0-1&p=f&t=kAjFz9UkkdhuRlgb-0",
      githubUrl: "https://github.com/DenisPKavishe/taskmanagement-App.git"
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