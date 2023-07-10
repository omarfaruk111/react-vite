import React from 'react'
import About from '../../components/About'
import Skill from '../../components/Skill'
import Service from '../../components/Service'
import Project from '../../components/Project'
import Testimonials from '../../components/Testimonials'
import Pricing from '../../components/Pricing'
import Blog from '../../components/Blog'

const Home = () => {
  return (
    <>
      <About/>
      <Skill/>
      <Service/>
      <Project/>
      <Testimonials/>
      <Pricing/>
      <Blog/>
    </>
  )
}

export default Home
