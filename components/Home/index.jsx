import React from 'react'

import Hero from './Hero'
import About from './About'
import Services from './Services'
import Work from './Work'
import Technologies from './Technologies'
import Testimonial from './Testimonial'
import Blog from './Blog'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='bg-[url("/images/technology.jpg")]' style={{backgroundAttachment:"fixed", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
        <Hero/>
        <About/>
        <Services/>
        <Work/>
        <Technologies/>
        <Testimonial/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default Home