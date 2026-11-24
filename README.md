# Abinaya Thendral M - Personal Portfolio

A modern, elegant, and responsive personal portfolio website for **Abinaya Thendral M**, Aspiring Software Developer and undergraduate student in **B.Tech CSE (AI & ML)** at **Kalasalingam Academy of Research and Education (2024–2028)**.

Built with **React**, **Vite**, and **Modular CSS**.

---

## 🎨 Design System

- **Theme:** Elegant light theme with pure whites (`#ffffff`) and soft whites (`#f8fafc`).
- **Accents:** Soft sky-blue (`#0284c7`, `#0ea5e9`, `#38bdf8`, `#e0f2fe`).
- **Typography:** Dark navy (`#0f172a`, `#1e293b`, `#334155`).
- **Responsive:** Fluid layout adapted across desktop, tablet, and mobile devices.
- **Interactions:** Subtle floating animations, card hover effects, interactive project modals, and ATS-ready printable resume preview.

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg             # Custom AT brand monogram icon
├── src/
│   ├── assets/                 # Static media and logos
│   ├── components/
│   │   ├── Navbar/             # Sticky navigation with active spy & mobile drawer
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/               # Hero banner with code visualizer & metric pills
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/              # Narrative and academic snapshot cards
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Skills/             # Categorized skill taxonomy with filter tabs
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Projects/           # Featured projects, mini projects & Farm2Home concept
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── AcademicProjects.jsx
│   │   │   ├── ProjectConcept.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── Projects.css
│   │   │   └── ProjectConcept.css
│   │   ├── Education/          # Academic degree card with 9.47 CGPA highlight
│   │   │   ├── Education.jsx
│   │   │   └── Education.css
│   │   ├── Resume/             # CV section with preview trigger & download options
│   │   │   ├── Resume.jsx
│   │   │   └── Resume.css
│   │   ├── Contact/            # Interactive contact form with validation & email copy
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/             # Professional footer & back-to-top button
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── common/             # Reusable modal dialogs (Project detail, Resume preview)
│   │       ├── ProjectModal.jsx
│   │       ├── ProjectModal.css
│   │       ├── ResumeModal.jsx
│   │       └── ResumeModal.css
│   ├── data/
│   │   └── portfolioData.js    # Centralized portfolio content & metadata
│   ├── App.jsx                 # Main application layout & toast notifications
│   ├── App.css
│   ├── index.css               # Global typography, color variables & resets
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Installation
Install the project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port indicated in your terminal).

### 3. Production Build
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 👤 Personal Details
- **Name:** Abinaya Thendral M
- **Role:** Aspiring Software Developer
- **Degree:** B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning)
- **Institution:** Kalasalingam Academy of Research and Education (2024–2028)
- **CGPA:** 9.47 / 10.0
- **Email:** [abinayathendral25@gmail.com](mailto:abinayathendral25@gmail.com)
- **GitHub:** [https://github.com/abinayathendral25-png](https://github.com/abinayathendral25-png)
