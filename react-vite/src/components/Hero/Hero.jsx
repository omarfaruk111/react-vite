import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import HeroImg from '../../assets/images/omarfaruk.png'

const Hero = () => {
  return (
    <div className='section bg-[#08031e] relative md:h-auto w-full overflow-hidden py-[200px] lg:py-32 md:pb-0 sm:pb-16'>
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
        <div className='w-full xl:w-1/2 md:w-full z-20'>
          <h3 className='text-white text-4xl'>Hey! I'm</h3>
          <h1 className='text-white font-rubik font-bold text-[90px] leading-[110px] lg:text-[70px] lg:leading-[90px] sm:text-5xl mt-4'>Omar Faruk</h1>
          <h2 className='bg-clip-text text-transparent bg-gradient-236 from-gradientColor1 to-gradientColor2 font-rubik font-medium capitalize text-[65px] leading-[75px] lg:text-[50px] sm:text-[40px]'>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                800,
                "I'm a Developer",
                1000,
                "I'm a Designer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <div className='mt-8'>
            <p className='text-white font-rubik font-normal text-2xl mb-6'>I'm professional developer, and i'm very passionate and dedicated to my work.</p>
            <a href="#"><button className='pt-3 pl-6 pb-3 pr-6 bg-gradient-236 from-gradientColor1 to-gradientColor2 text-white rounded-full'>More About Me</button></a>
          </div>
      </div>
      <div className='w-full lg:w-1/2 md:w-full sm:w-full z-40 relative'>
        <div className='relative p-7 sm:p-0 z-40'>
          <img className='w-full m-auto' src={HeroImg} alt="" />
        </div>
        <div className='span1 animation absolute right-[20%] top-[15%] sm:w-[10px] sm:h-[260px]'>
            <span></span>
        </div>
        <div className='span2 animation absolute right-[20%] top-[15%] sm:w-[10px] sm:h-[260px]'>
            <span></span>
        </div>
        <div className='span3 animation absolute left-[20%] bottom-[15%] sm:w-[10px] sm:h-[260px]'>
            <span></span>
        </div>
        <div className='span4 animation absolute left-[20%] bottom-[15%] sm:w-[10px] sm:h-[260px]'>
            <span></span>
        </div>
        <div className='span5 animation absolute left-[20%] bottom-[15%] sm:w-[10px] sm:h-[260px]'>
            <span></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero