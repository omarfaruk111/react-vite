import React from 'react'
import Progress from './Progress'
import Experiences from './Experiences/Experiences'

const Skill = () => {
  return (
    <div id='experience' className="bg-secondary pb-32 pt-32 md:pt-24 sm:pt-20 md:pb-24 sm:pb-20 lg:pl-4 lg:pr-4">
      <div className="container m-auto flex flex-col">

        <div className="flex flex-col text-center">
          <h3 className="font-medium font-rubik text-base uppercase text-subTColor">
            My Experience
          </h3>
          <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
            EXPERIENCE AND <span className="bg-clip-text text-transparent bg-gradient-236 from-gradientColor1 to-gradientColor2">SKILL</span>
          </h2>
          <p className="pt-5 font-rubik text-lg text-white">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit,<br /> Error Qui Enim Sit Ex Provident
          </p>
        </div>

        <Experiences />
        <Progress />
      </div>
    </div>
  )
}

export default Skill
