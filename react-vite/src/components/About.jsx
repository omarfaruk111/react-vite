import React from 'react'
import about from '../assets/images/about1.png'
const About = () => {
  return (
    <>
    <div className='bg-dark pt-32 pb-32'>
        <div className="container m-auto flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/2 pr-28">
                <img src={about} alt="About" />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col items-center justify-center">
                <h2 className='font-oswald text-white text-5xl font-semibold'>FAILURE IS THE CONDIMENT THAT GIVES <span className='text-green'>SUCCESS</span></h2>
                <p className='font-rubik text-white mt-10'>Spend more time focusing on the important aspects of your business. Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced virtual HR company, we are offering online HR systems that can be customized depending on your business needs.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About