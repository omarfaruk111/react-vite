import React from 'react'
import Menu from '../../components/Menu/Menu'
import About from '../../components/About/About'
import Service from '../../components/Service/Service'
import Skill from '../../components/Skill/Skill'
import Project from '../../components/Project/Project'
import Pricing from '../../components/Pricing/Pricing'
import Blog from '../../components/Blog/Blog'
import Travel from '../../components/Travel/Travel'
import Testimonials from '../../components/Testimonials/Testimonials'
import Hero from '../../components/Hero/Hero'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Menu />
      <Hero />
      <About />
      <Skill />
      <Service />
      <Project />
      <Travel />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
