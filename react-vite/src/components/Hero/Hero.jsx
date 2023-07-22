import React from 'react'
import HeroImg from '../../assets/images/hero04.png'

const Hero = () => {
  return (
    <div className='section bg-hero-pattern relative h-screen md:h-auto w-full overflow-hidden pt-28'>
      <div className='heroAnimate'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='container m-auto flex flex-row md:flex-col items-center xl:pl-3 xl:pr-3'>
      <div className='w-full xl:w-1/2 md:w-full z-20 pb-28'>
        <h3 className='text-white text-4xl'>Hello, I'm</h3>
        <h1 className='text-white font-rubik font-bold text-6xl sm:text-5xl mt-4 mb-5'>Omar Faruk</h1>
        <h2 className='text-white font-rubik font-normal text-3xl sm:text-base'>A Creative <span className='text-lime-500 font-medium'>Developer</span> From Bangladesh</h2>
        <div className='ml-40 border-l border-white pl-4 mt-12 sm:ml-0 sm:border-0 sm:pl-0'>
          <p className='text-white font-rubik font-normal text-lg mb-6'>I'm professional developer, and i'm very passionate and dedicated to my work.</p>
          <a href="#"><button className='pt-3 pl-6 pb-3 pr-6 bg-white text-secondary rounded-full'>More About Me</button></a>
        </div>
      </div>
      <div className='w-full absolute contents '>
          <div className='z-0'>
                <div className='animation absolute right-[20%] top-[18%] 2xl:right-[10%] 2xl:top-[20%] lg:w-[250px] lg:h-[250px]'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
      </div>
      <div className='w-full lg:w-1/2 z-40 relative'>
              <img className='w-full lg:w-[450px] z-40 ' src={HeroImg} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Hero