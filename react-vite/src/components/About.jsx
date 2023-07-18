import React from 'react'
import about from '../assets/images/about1.png'
import aboutbgshape from '../assets/images/about-bg-shape.png'
import aboutshape from '../assets/images/about-shape.svg'
import Button from '../components/Button'

const About = () => {
  return (
    <>
    <div className='bg-secondary pt-32 pb-32 lg:pl-4 lg:pr-4'>
        <div className="container m-auto flex flex-row md:flex-col">
            <div className="w-full xl:w-1/2 lg:w-1/2 sm:w-full md:w-full md:mb-16 pr-28 sm:pr-0 relative">
               <img className='relative z-50' src={about} alt="About" />
                <span className='absolute -left-10 -right-20 sm:-left-0 sm:-right-0 top-0 -z-0'>
                  <img className='sm:w-auto' src={aboutbgshape} alt="aboutbgshape" />
                </span>
                <span className='absolute -bottom-20 -left-20 -z-0'>
                  <img className='sm:w-auto' src={aboutshape} alt="aboutshape" />
                </span>
            </div>
            <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex flex-col justify-center">
                <h2 className='font-oswald text-white text-5xl font-semibold sm:text-3xl'>FAILURE IS THE CONDIMENT THAT GIVES <span className='text-praimary'>SUCCESS</span></h2>
                <p className='font-rubik text-base text-white mt-10 mb-10'>Spend more time focusing on the important aspects of your business. Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced virtual HR company, we are offering online HR systems that can be customized depending on your business needs.</p>
                <Button />
            </div>
        </div>
      </div>
    </>
  )
}

export default About