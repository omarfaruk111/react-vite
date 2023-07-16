import React from 'react'

const Hero = () => {
  return (
    <div className='section flex flex-col bg-slate-900 pt-32 pb-32'>
      <div className='container m-auto'>
      <div className='w-full xl:w-1/2'>
      <h3 className='text-white text-4xl'>Hello, I'm</h3>
        <h1 className='text-white font-rubik font-bold text-7xl'>Omar Faruk</h1>
        <h2 className='text-white font-rubik font-semibold text-3xl'>A Creative Developer From Bangladesh</h2>
        <div className='ml-40 border-l pl-3 mt-6'>
          <p className='text-white font-rubik font-normal text-lg mb-4'>I'm professional developer, and i'm very passionate and dedicated to my work</p>
          <a href="#"><button className='pt-3 pl-6 pb-3 pr-6 bg-green text-white rounded-full'>More About Me</button></a>
        </div>
      </div>
      <div className='w-full xl:w-1/2'></div>
      </div>
    </div>
  )
}

export default Hero