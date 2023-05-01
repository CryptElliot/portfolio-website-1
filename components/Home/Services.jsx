import React from 'react'

import Section from "../Customs/Section"
import ServiceCard from "../Customs/ServiceCard"
import { HiOutlinePencilAlt, HiOutlineChartBar, HiOutlineMoon, HiOutlineDeviceMobile } from "react-icons/hi"

const Services = () => {
    const data = [
        { title: "Creative Designs", description: "In publishing and graphic design, Lorem ipsum is a placee without them.", icon: <HiOutlinePencilAlt className="w-6 h-6 stroke-2" /> },
        { title: "Responsiveness", description: "hing and graphic design,hir text commonly use on the platform.", icon: <HiOutlineChartBar className="w-6 h-6 stroke-2" /> },
        { title: "Responsiveness", description: "checking and text commonly used to demon.", icon: <HiOutlineDeviceMobile className="w-6 h-6 stroke-2" /> },
        { title: "Dark Mode", description: "Use the text generator to create your own text.", icon: <HiOutlineMoon className="w-6 h-6 stroke-2" /> }
    ]

    return (
        <Section id="services" title="Services" description="Lorem ipsum dolor sit adipisicing elit. Facere, quos! Et asperiores ut dolorem dignissimos possimus, molestiae nemo." subtitle="what I can do for you ?">
            <div className="flex flex-wrap justify-center items-center">
                {data.map(({ title, description, icon }, index) => (
                    <ServiceCard key={index} icon={icon} title={title} description={description} />
                ))}
            </div>
        </Section>

    )
}


export default Services