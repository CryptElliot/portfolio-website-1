import Image from 'next/image';
import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiJamstack, SiTailwindcss, SiMaterialui} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import Section from '../Section'

const Skills = () => {
  const skills = [
    { name: "HTML 5", percentage: "85%" , icon:<FaHtml5 fontSize="40px"/>},
    { name: "CSS 3", percentage: "70%", icon:<FaCss3 fontSize="40px"/> },
    { name: "JavaScript", percentage: "60%", icon:<FaJs fontSize="40px"/> },
    { name: "Next Js", percentage: "65%", icon:<TbBrandNextjs fontSize="40px"/> },
    { name: "Tailwind CSS", percentage: "75%", icon:<SiTailwindcss fontSize="40px"/> },
    { name: "Material UI", percentage: "90%", icon:<SiMaterialui fontSize="40px"/> },
    { name: "MERN Stack", percentage: "70%", icon:<FaReact fontSize="40px"/> },
    { name: "JAM Stack", percentage: "35%", icon:<SiJamstack fontSize="40px"/> },
    { name: "Python", percentage: "60%", icon:<FaPython fontSize="40px"/> },
  ];

  return (
    <Section id="skills" title="skills" subtitle="What are my advantages ?" description="I learned these skills in last 2 years of web development">
      <div className=' mb-4 mx-4 md:mx-12'>
        <ul className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map(({ name, percentage,icon }, index) => (
            <li key={index} className="flex w-full">
              <div className="mr-4 text-secondary">
                {icon}
              </div>
              <div className='flex-grow'>
                <h3 className="capitalize flex">
                  <span className="text-sm font-bold text-textPrimary dark:text-darkTextPrimary">{name}</span>
                  <span className="ml-auto text-sm font-bold  text-textPrimary dark:text-darkTextPrimary">
                    {percentage}
                  </span>
                </h3>
                <div className="h-1 mt-2 bg-paper dark:bg-darkPaper shadow-sm relative">
                  <div
                    className="h-1 bg-primary/50 absolute w-[95%]"
                    style={{ width: percentage }}
                    ></div>
                  <div
                    className="h-1 bg-primary animate-[width] absolute w-[45%]"
                    style={{ width: `calc( ${percentage} / 1.25 )` }}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Skills