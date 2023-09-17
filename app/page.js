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
  return (
    <div id='all'>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-20">
        <div id='about' className='my-5'>
          <AboutMe />
        </div>
        <div id="skills" className='my-5'>
          
              <h1 className='text-4xl font-extrabold dark:text-dark text-center'>Skills</h1>
            
              <SkillsBox skills={skillsData} />
            
          
        </div>
        <div id='projects' className='my-5'>
          <h1 className='text-4xl font-extrabold dark:text-dark text-center'>Projects</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6">
            {projectData.map((project, index) => (
              <div key={index} className="sm:w-1/2 md:w-full">
                <ProjectBox {...project} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
