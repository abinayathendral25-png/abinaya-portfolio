export const PERSONAL_INFO = {
  name: "Abinaya Thendral M",
  role: "Aspiring Software Developer",
  educationDegree: "B.Tech CSE (AI & ML)",
  college: "Kalasalingam Academy of Research and Education",
  duration: "2024–2028",
  cgpa: "9.47",
  email: "abinayathendral25@gmail.com",
  github: "https://github.com/abinayathendral25-png",
  linkedin: "https://www.linkedin.com/in/placeholder", // Placeholder as requested
  resumeUrl: "#", // Placeholder as requested
  location: "Tamil Nadu, India",
  tagline: "Building intuitive software solutions with a foundation in artificial intelligence and machine learning.",
  bio: [
    "I am a passionate B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Kalasalingam Academy of Research and Education with an outstanding academic record of 9.47 CGPA.",
    "Driven by curiosity and systematic problem-solving, I enjoy building software applications that bridge clean code, efficient algorithms, and intelligent data systems. My foundational skillset encompasses core languages like Python, Java, and C, modern web development, and applied machine learning tools.",
    "I am actively seeking software engineering internships and collaborative development opportunities where I can apply my analytical skills, learn from experienced engineering teams, and deliver impactful digital solutions."
  ]
};

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    description: "Core languages used for problem solving, algorithmic design, and application logic.",
    skills: [
      { name: "Python", level: "Proficient", icon: "Code2", tag: "Core Language" },
      { name: "Java", level: "Intermediate", icon: "Coffee", tag: "OOP & Systems" },
      { name: "C", level: "Foundational", icon: "Cpu", tag: "System Foundations" }
    ]
  },
  {
    category: "Web Technologies",
    description: "Markup, styling, and client-side scripting for responsive interfaces.",
    skills: [
      { name: "HTML", level: "Proficient", icon: "FileCode", tag: "Semantic Markup" },
      { name: "CSS", level: "Proficient", icon: "Palette", tag: "Modern Styling" },
      { name: "JavaScript", level: "Basics", icon: "Sparkles", tag: "Interactive UI" }
    ]
  },
  {
    category: "Databases",
    description: "Structured and document-oriented storage management systems.",
    skills: [
      { name: "SQL", level: "Intermediate", icon: "Database", tag: "Relational DB" },
      { name: "MongoDB", level: "Foundational", icon: "Server", tag: "NoSQL DB" }
    ]
  },
  {
    category: "Data Science & Machine Learning",
    description: "Libraries and frameworks for data exploration, predictive modeling, and analytics.",
    skills: [
      { name: "Pandas", level: "Intermediate", icon: "Table", tag: "Data Wrangling" },
      { name: "NumPy", level: "Intermediate", icon: "Binary", tag: "Numerical Arrays" },
      { name: "Matplotlib", level: "Intermediate", icon: "BarChart3", tag: "Visualization" },
      { name: "Scikit-learn", level: "Intermediate", icon: "Workflow", tag: "ML Classifiers" },
      { name: "TensorFlow", level: "Basics", icon: "BrainCircuit", tag: "Deep Learning Foundations" }
    ]
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "fraud-activity-monitor",
    title: "Fraud Activity Monitor",
    category: "Machine Learning & Security",
    summary: "An intelligent monitoring system designed to detect anomalous transactions and potentially fraudulent operations using data analysis techniques.",
    description: "Developed to identify deceptive financial or user behavioral patterns by analyzing historical transaction attributes. The system preprocesses transaction indicators, applies classification logic, and flags outlier behaviors with anomaly detection mechanisms.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    highlights: [
      "Analyzes transaction volumes, frequency, and deviation metrics.",
      "Implements classification and threshold-based anomaly detection algorithms.",
      "Visualizes flagged activities and detection rates through analytical charts."
    ],
    githubUrl: "https://github.com/abinayathendral25-png",
    status: "Completed",
    featured: true
  },
  {
    id: "diabetes-detection",
    title: "Diabetes Detection System",
    category: "Healthcare Predictive Analytics",
    summary: "A predictive healthcare diagnostic model evaluating key medical indicators to assess the likelihood of diabetes in patients.",
    description: "A machine learning pipeline built to assist proactive health screening. Features clinical diagnostic data processing, missing value handling, exploratory statistical analysis, and predictive model training using standard diagnostic datasets.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    highlights: [
      "Processes vital biometric features including glucose levels, BMI, age, and blood pressure.",
      "Compares classification algorithms to maximize precision and recall.",
      "Generates confusion matrices and feature importance evaluations."
    ],
    githubUrl: "https://github.com/abinayathendral25-png",
    status: "Completed",
    featured: true
  },
  {
    id: "student-attendance-management",
    title: "Student Attendance Management System",
    category: "Application Software & Databases",
    summary: "A structured administrative software solution facilitating automated attendance tracking, record-keeping, and reporting for academic institutions.",
    description: "Built to streamline daily attendance registration, eliminate manual paperwork, and provide instant insights into student attendance percentages. Incorporates relational data tables to manage students, course subjects, and session timestamps.",
    technologies: ["Java", "SQL", "Database Design", "OOP"],
    highlights: [
      "Automates daily roll-call tracking and monthly aggregate calculations.",
      "Integrates relational database queries to query records by roll number, date, or subject.",
      "Provides alerts and reports for students falling below mandatory attendance thresholds."
    ],
    githubUrl: "https://github.com/abinayathendral25-png",
    status: "Completed",
    featured: true
  },
  {
    id: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    summary: "A modern, highly responsive developer portfolio engineered with React, Vite, and clean modular CSS showcasing academic and technical accomplishments.",
    description: "Crafted with an elegant light theme featuring soft sky-blue accents, dark navy typography, smooth transitions, interactive project modal views, and clean component architecture.",
    technologies: ["React", "Vite", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Structured component design with dedicated CSS styling.",
      "Custom responsive design adapted across mobile, tablet, and widescreen viewports.",
      "Interactive modals, accessible navigation, and client-side contact validation."
    ],
    githubUrl: "https://github.com/abinayathendral25-png",
    status: "Completed",
    featured: true
  }
];

export const ACADEMIC_MINI_PROJECTS = [
  {
    id: "gui-quiz-app",
    title: "GUI Quiz Application",
    category: "Desktop Application",
    summary: "An interactive desktop quiz program built with graphical controls, multiple-choice questions, live scoring, and timer mechanics.",
    description: "Designed to reinforce object-oriented programming concepts and event-driven GUI development. Features question randomization, instant answer validation, and post-quiz performance summaries.",
    technologies: ["Python", "GUI Framework", "OOP Concepts"],
    highlights: [
      "Clean graphical user interface with responsive option selection.",
      "Dynamic score tracker with real-time feedback and review summary."
    ],
    githubUrl: "https://github.com/abinayathendral25-png"
  },
  {
    id: "todo-list-app",
    title: "To-Do List Application",
    category: "Web Application",
    summary: "A lightweight task management web utility allowing users to organize daily objectives, prioritize tasks, and track completion states.",
    description: "Implements core DOM manipulation, persistent state via local browser storage, dynamic element generation, and intuitive task editing.",
    technologies: ["JavaScript", "HTML", "CSS", "DOM API"],
    highlights: [
      "Add, mark complete, edit, and filter tasks seamlessly.",
      "Lightweight, clean UI with satisfying status toggles."
    ],
    githubUrl: "https://github.com/abinayathendral25-png"
  },
  {
    id: "registration-form",
    title: "Interactive Registration Form",
    category: "Web Development",
    summary: "A client-side validated registration interface with comprehensive input checks, regex formatting, and accessible feedback indicators.",
    description: "Focuses on robust user input handling, structured layout techniques, error messaging states, and secure field validations for academic and software registration workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "Form Validation"],
    highlights: [
      "Instant real-time validation for email patterns, required fields, and credentials.",
      "Mobile-friendly form controls with accessible error cues."
    ],
    githubUrl: "https://github.com/abinayathendral25-png"
  }
];

export const PROJECT_CONCEPT = {
  id: "farm2home",
  title: "Farm2Home",
  tagline: "Direct Farm-to-Consumer Agricultural Platform",
  type: "Future Project Concept & In-Progress Architecture",
  conceptStatus: "Conceptual Phase / Architecture Planning",
  summary: "A transformative concept aiming to bridge agricultural producers directly with local consumers, eliminating middlemen, securing fair compensation for farmers, and delivering fresh produce with AI-driven demand forecasting.",
  problemStatement: "Traditional agricultural supply chains involve multiple intermediary levels, causing substantial post-harvest markups for consumers while leaving primary farmers with minimal profit margins and unpredictable demand.",
  proposedSolution: "Farm2Home envisions a decentralized direct-to-consumer marketplace with real-time crop availability listings, automated fair pricing calculation, route-optimized delivery aggregation, and machine learning models for seasonal demand prediction.",
  plannedArchitecture: [
    {
      pillar: "Direct Farmer Portal",
      detail: "Simple, accessible listing module for growers to post harvest schedules, available quantities, and transparent base prices."
    },
    {
      pillar: "Consumer Mobile & Web App",
      detail: "Clean catalog enabling households and neighborhood cooperatives to pre-order fresh produce directly from regional farms."
    },
    {
      pillar: "AI Demand & Harvest Forecasting",
      detail: "Predictive ML models analyzing historical demand, weather shifts, and localized consumption patterns to reduce produce wastage."
    },
    {
      pillar: "Fair Pricing & Transparent Ledger",
      detail: "Transparent cost breakdown detailing farmer revenue, logistics overhead, and fair consumer pricing without predatory markups."
    }
  ],
  techStackIntent: ["Python", "Machine Learning", "React", "MongoDB / SQL", "RESTful APIs"]
};

export const EDUCATION_DATA = {
  institution: "Kalasalingam Academy of Research and Education",
  degree: "Bachelor of Technology - B.Tech",
  specialization: "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
  duration: "2024 – 2028",
  cgpa: "9.47",
  maxCgpa: "10.0",
  location: "Krishnankoil, Tamil Nadu, India",
  description: "Pursuing rigorous undergraduate coursework focused on core computer science foundations, algorithm design, software engineering methodologies, and specialized machine learning architectures.",
  relevantCoursework: [
    "Object-Oriented Programming (Java / Python)",
    "Data Structures & Algorithms",
    "Database Management Systems (SQL)",
    "Probability, Statistics & Linear Algebra",
    "Python for Data Science & AI",
    "Computer Organization & Architecture"
  ],
  academicHighlights: [
    "Maintained a stellar 9.47 CGPA demonstrating strong academic discipline and conceptual understanding.",
    "Active participant in technical coding problem solving, coding laboratories, and university technical forums.",
    "Proactively building software applications applying theoretical computer science principles to practical challenges."
  ]
};
