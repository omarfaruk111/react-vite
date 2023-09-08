import React from 'react'
import about from '../assets/images/about01.png'
import aboutbgshape from '../assets/images/about-bg-shape.png'
import Button from '../components/Button'

const About = () => {
  return (
    <>
      <div id='about' className='bg-secondary pt-32 pb-32 md:pb-0 sm:pb-0 md:pt-24 sm:pt-20 lg:pl-4 lg:pr-4'>
        <div className="container m-auto flex flex-row md:flex-col">
          <div className="aboutShadow w-full xl:w-1/2 lg:w-1/2 sm:w-full md:w-full md:mb-16 pr-28 md:pr-0 relative">
            <img className='aboutShado md:m-auto rounded-lg relative z-50' src={about} alt="About" />
            <span className='circle md:hidden -z-0 -top-[40px] -left-9 absolute'>
              <img className='sm:w-auto' src={aboutbgshape} alt="aboutbgshape" />
            </span>
          </div>
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex flex-col justify-center">
            <h2 className='font-rubik text-white text-[55px] leading-[70px] capitalize font-semibold sm:text-3xl'>I'm Available For Any Website<span className='bg-clip-text text-transparent bg-gradient-236 from-gradientColor1 to-gradientColor2'> Projects</span></h2>
            <p className='font-rubik text-lg text-white mt-10 mb-10'>
              I am a developer with a passion for web design. I enjoy creating simple, clean and sleek websites that provide real value to the end user. Thousands of clients have achieved exceptional results while working with me. Our aim is to deliver work within time and budget that meets the client's requirements.
            </p>
            <Button buttonText="Download"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About