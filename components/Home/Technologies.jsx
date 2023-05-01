import React from 'react'

import { FaCss3Alt, FaGit, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa"

const Technologies = () => {
  const data = [
    {
      name: "Python",
      icon: <FaPython className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white"/>
    },
    {
      name: "Node JS",
      icon: <FaNodeJs className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white"/>
    },
    {
      name: "Git",
      icon: <FaGit className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white"/>
    },
    {
      name: "React JS",
      icon: <FaReact className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white"/>
    },
    {
      name: "JavaScript",
      icon: <FaJs className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white"/>
    },
    {
      name: "Java",
      icon: <FaJava className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white"/>
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white"/>
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white"/>
    },
  ]
  return (
    <section id="technologies" className="bg-paper/80 py-12 px-10 body-font">
      <div className=' w-full capitalize md:w-[60%] mx-auto mb-10 text-center'>
        <h2 className='text-2xl font-bold mb-3'>
          My Advantages
        </h2>
        <p className='text-sm w-[80%] mx-auto text-textSecondary  font-medium'>
          Technologies that i have learnt and have an experience of over 5 years
        </p>
      </div>
      <div className="mx-auto flex md:flex-row-reverse flex-col-reverse justify-center items-center">
        <div className='flex justify-center items-center flex-wrap max-w-[420px] m-auto'>
          {data.map(({icon}, index) => (
           <div key={index} className='border-[3px] cursor-pointer transition duration-300 border-primary p-2 m-2 rounded-full group hover:text-primary group-hover:text-white hover:bg-primary'>
                <div className='w-[35px] h-[35px] '>
                  {icon}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Technologies