"use client"

import Navbar from './components/navbar.js'
import ProjectBox from './components/projectBox.js'
import SkillsBox from './components/skills.js'
import AboutMe from './components/aboutMe.js';
import Intro from './components/intro.js';

import content from './content/content.js';
const { skillsData, projectData } = content;
import { motion, useScroll } from "framer-motion";


export default function Home() {
  const boxStyle = {
    padding: '20px',
  }

  const { scrollYProgress } = useScroll();

  return (
    <div id='all'>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-24">
        {/* <div className='box' style={boxStyle}>
          <Intro />
        </div> */}
        <div id='about' style={boxStyle}>
          <AboutMe />
        </div>
        <div id="skills" style={boxStyle}>
          <h1 className='text-4xl font-extrabold dark:text-white text-center'>Skills</h1>
          <SkillsBox skills={skillsData} />
        </div>
        <div id='projects' style={boxStyle}>
          <h1 className='text-4xl font-extrabold dark:text-white text-center'>Projects</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {projectData.map((project, index) => (
              <div key={index}>
                <ProjectBox {...project} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
