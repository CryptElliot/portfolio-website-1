import React from 'react'

import Section from '../Customs/Section'
import TestimonialCard from '../Customs/TestimonialCard'

const TestimonialSection = () => {
  const data = [
    {
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga nostrum ea ullam enim inventore.",
      author:{
        avatar:"/images/testimonial/avatar-1.jpg",
        name:"John Doe",
        description:"Sernior Web Developer"
      }
    },
    {
      content:"Lorem ipsum dolor sit amet consectetua nostrum ea ullam enim inventore.",
      author:{
        avatar:"/images/testimonial/avatar-2.jpg",
        name:"Alex",
        description:"Data Scientist"
      }
    },
    {
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elullam enim inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquam fuga nostrum ea ullam enim inventore.",
      author:{
        avatar:"/images/testimonial/avatar-3.jpg",
        name:"Emily",
        description:"UI/UX Designer"
      }
    },
    {
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elullam enim inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquam fuga nostrum ea ullam enim inventore.",
      author:{
        avatar:"/images/testimonial/avatar-4.jpg",
        name:"Boron",
        description:"Backend Developer"
      }
    },
  ]
  return (
    <Section id="testimonial" title="Testinomial" subtitle="What my Client's say about me" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquam fuga nostrum ea ullam enim inventore.">
      <div className="flex flex-wrap justify-center">
        {data.map(({content, author}, index) => (
          <TestimonialCard key={index} content={content} author={author} />
        ))}
      </div>
    </Section>
  )
}

export default TestimonialSection
