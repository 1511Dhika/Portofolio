'use client';
import Image from "next/image";

import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from "./components/ProjectCard";
import SkillCategory from "./components/SkillCategory";
import ContactForm from "./components/ContactForm";
import { useTranslation } from 'react-i18next';
import '../lib/i18n';


const projectsData = [
  {
    title: "E-learning Platform",
    description: "A multi-user project with roles for admins and users. Admins can upload modules and exams, while users can take exams, access materials, and view their certificates.",
    imageUrl: "/assets/project/e-learning.png",
    techStack: ["PHP", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/1511Dhika/Project-elearning",
  },
  {
    title: "Library Management (PHP)",
    description: "This project supports admin and user roles. Admins manage book uploads, track borrowers, and monitor returns. Users can borrow books and browse the catalog.",
    imageUrl: "",
    techStack: ["PHP", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/1511Dhika/Perpustakaan-versiPHP",
  },
  {
    title: "Library Management (Java)",
    description: "A desktop-based library system with similar features. Admins handle book inventory and user management, while users can interact with the library's collection.",
    imageUrl: "/assets/project/perpus-java.png",
    techStack: ["Java"],
    githubUrl: "https://github.com/1511Dhika/Perpustakaan",
  },
];

const skillsData = {
  languages: ["JavaScript", "Python", "Java", "C++", "PHP", "HTML", "CSS", "SQL"],
  frameworks: ["Next.js", "React.js", "Tailwind CSS", "Bootstrap", "CodeIgniter", "Laravel"],
};

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-[#19222D] text-gray-900 dark:text-white">
      <SplashCursor />
      <Navbar />

      <header className="w-full px-4 py-20 flex flex-col items-center justify-center md:flex-row gap-6">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-10">
          
          <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
            <div className="flex flex-col gap-6">
              <AnimatedContent direction="horizontal" config={{ tension: 80, friction: 20 }}>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h1 className="text-2xl font-bold"> {t('readyFor')} </h1>

                  <span className="sr-only"> {t('srList')} </span>

                  <RotatingText 
                    texts={['Web Design', 'Development', 'Programming']}
                    mainClassName="px-3 bg-[#C6F10E] text-black overflow-hidden py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </AnimatedContent>

              <div className="flex flex-col items-center md:items-start">
                <div className="sr-only"> {t('srName')} </div>
                <SplitText 
                  text={t('name')}
                  className="text-5xl lg:text-6xl font-semibold text-center md:text-start"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                />

                <div className="sr-only"> {t('srRole')} </div>
                <SplitText 
                  text={t('role')}
                  className="text-5xl lg:text-6xl font-semibold text-center md:text-start text-[#C6F10E]"
                  delay={75}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                />
              </div>

              <BlurText 
                text= {t('about')}
                delay={75}
                animateBy="words"
                className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/5 h-96 md:h-auto mt-8 md:mt-0">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>

        </div>
      </header>

      <section id="projects" className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section id="skills" className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center items-start gap-8">
          <SkillCategory title="Programming Languages" skills={skillsData.languages} />
          <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
        </div>
      </section>

      <ContactForm />
      <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
         <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Dhika Ramdhana. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}