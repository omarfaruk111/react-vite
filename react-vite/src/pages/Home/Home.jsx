import React from 'react'
import About from '../../components/About'
import Service from '../../components/Service'
import Skill from '../../components/Skill'
import Project from '../../components/Project/Project'
import Pricing from '../../components/Pricing'
import Blog from '../../components/Blog'
import Travel from '../../components/Travel'
import Testimonial from '../../components/Testimonial'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Service />
      <Project />
      <Travel />
      <Testimonial />
      <Pricing />
      <Blog />
    </>
  )
}

export default Home
