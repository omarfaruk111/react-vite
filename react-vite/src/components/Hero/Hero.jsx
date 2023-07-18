import React from 'react'
import HeroImg from '../../assets/images/heroImg.png'

const Hero = () => {
  return (
    <div className='section bg-hero-pattern pt-32'>
      <div className='container m-auto flex flex-row items-center md:flex-col xl:pl-3 xl:pr-3'>
      <div className='w-full xl:w-1/2 md:w-full'>
        <h3 className='text-white text-4xl'>Hello, I'm</h3>
        <h1 className='text-white font-rubik font-bold text-6xl sm:text-5xl mt-4 mb-5'>Omar Faruk</h1>
        <h2 className='text-white font-rubik font-normal text-3xl sm:text-base'>A Creative <span className='text-lime-500 font-medium'>Developer</span> From Bangladesh</h2>
        <div className='ml-40 border-l border-white pl-4 mt-12 sm:ml-0 sm:border-0 sm:pl-0'>
          <p className='text-white font-rubik font-normal text-lg mb-6'>I'm professional developer, and i'm very passionate and dedicated to my work.</p>
          <a href="#"><button className='pt-3 pl-6 pb-3 pr-6 bg-white text-dark rounded-full'>More About Me</button></a>
        </div>
      </div>
      <div className='w-full xl:w-1/2 md:w-full'>
          <div className=''>
              <img className='w-full' src={HeroImg} alt="" />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Hero