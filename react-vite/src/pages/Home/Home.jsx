import React from 'react'
import About from '../../components/About'
import Service from '../../components/Service'
import Skill from '../../components/Skill'
import Project from '../../components/Project'
import Pricing from '../../components/Pricing'
import Blog from '../../components/Blog'
import Travel from '../../components/Travel'

const Home = () => {
  return (
    <>
      <About />
      <Skill />
      <Service />
      <Project />
      <Travel />
      <Pricing />
      <Blog />
    </>
  )
}

export default Home
