import React from 'react'
import Progress from './Progress'
import Experiences from '../Experiences/Experiences'

const Skill = () => {
  return (
    <div id='experience' className="sec pb-32 pt-32 md:pt-24 sm:pt-20 md:pb-24 sm:pb-20">
      <div className="container m-auto flex flex-col">

        <div className="flex flex-col text-center">
          <h3 className="sub-title">
            My Experience
          </h3>
          <h2 className="title">
            EXPERIENCE AND <span className="title-span">SKILL</span>
          </h2>
          <p className="para">
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
