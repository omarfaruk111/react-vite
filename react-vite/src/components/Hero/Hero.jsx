import React from 'react'
import HeroImg from '../../assets/images/hero04.png'

const Hero = () => {
  return (
    <div className='section bg-hero-pattern relative  h-screen md:h-auto w-full overflow-hidden pt-28 md:pt-24 sm:pt-20'>
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
        <div className='w-full xl:w-1/2 md:w-full z-20 pb-28 md:pb-24 sm:pb-20'>
          <h3 className='text-white text-4xl'>Hello, I'm</h3>
          <h1 className='text-white font-plus_jakarta_sans font-bold text-8xl sm:text-5xl mt-4 mb-5'>Omar Faruk</h1>
          <h2 className='text-white font-rubik font-normal text-3xl sm:text-base'>A Creative <span className='bg-clip-text text-transparent bg-gradient-236 from-gradientColor1 to-gradientColor2'>Developer</span></h2>
          <div className='mt-12'>
            <p className='text-white font-rubik font-normal text-lg mb-6'>I'm professional developer, and i'm very passionate and dedicated to my work.</p>
            <a href="#"><button className='pt-3 pl-6 pb-3 pr-6 bg-gradient-236 from-gradientColor1 to-gradientColor2 text-white rounded-full'>More About Me</button></a>
          </div>
        </div>
        <div className='w-full absolute contents '>
          <div className='z-0'>
            <div className='animation absolute right-[20%] top-[18%] 2xl:right-[10%] sm:right-[20%] 2xl:top-[20%] sm:top-[48%] lg:w-[250px] sm:w-[175px] lg:h-[250px] sm:h-[175px]'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 sm:w-full z-40 relative'>
          <img className='w-full lg:w-[450px] z-40 ' src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero