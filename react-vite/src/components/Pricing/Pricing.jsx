import React from 'react'

const Pricing = () => {
  return (
    <div id='price' className='project sec pb-32 md:pb-24 sm:pb-20 lg:pl-4 lg:pr-4'>
    <div className='container m-auto flex flex-col'>
    <div className="flex flex-col text-center">
        <h3 className="sub-title">
        PAYMENTS
        </h3>
        <h2 className="title">
        ALL OUR PAYMENT <span className="title-span">OPTIONS</span>
        </h2>
        <p className="para">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit
        </p>
    </div>
    <div className=''>
        <h1 className='text-white font-rubik text-center text-4xl pt-12'>Ready to get started?</h1>
        <h4 className='text-white text-center text-base font-rubik mt-4'>Choose a plan tailored to your nneds</h4>
        <div className='mt-16 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
          <div className='w-full bg-[#18003e] pt-8 pb-8 pl-6 pr-6 rounded'>
            <h2 className='text-white text-3xl font-rubik font-medium'>Basic plan</h2>
            <h3 className='text-white text-lg font-rubik font-normal mt-2 mb-8'>Lorem Ipsum is simply dummy text and typesetting industry.</h3>
            <h1 className='text-white font-normal font-rubik text-6xl'><span className='text-white'>$</span>19 <span className='text-white text-sm font-rubik font-normal'>/per month</span></h1>
            <a href="#"><button className='text-white hover:text-white bg-gradient-236 from-gradientColor1 to-gradientColor2 hover:from-gradientColor2 hover:to-gradientColor1 font-rubik font-normal text-base w-full rounded-lg pt-2 pb-2 mt-8 mb-6'>Try 3 days for free</button></a>
            <h4 className='text-white text-lg font-rubik font-normal pb-4'>Basic includes:</h4>
            <ul>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>CMS integration</li>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>Email & SMS reminders</li>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>Customer support 24/7</li>
            </ul>
          </div>
          <div className='w-full bg-[#18003e] pt-8 pb-8 pl-6 pr-6 rounded'>
            <h2 className='text-white text-3xl font-rubik font-medium'>Business plan</h2>
            <h3 className='text-white text-lg font-rubik font-normal mt-2 mb-8'>Lorem Ipsum is simply dummy text and typesetting industry.</h3>
            <h1 className='text-white font-normal font-rubik text-6xl'><span className='text-white'>$</span>49 <span className='text-white text-sm font-rubik font-normal'>/per month</span></h1>
            <a href="#"><button className='text-white hover:text-white bg-gradient-236 from-gradientColor1 to-gradientColor2 hover:from-gradientColor2 hover:to-gradientColor1 font-rubik font-normal text-base w-full rounded-lg pt-2 pb-2 mt-8 mb-6'>Try 3 days for free</button></a>
            <h4 className='text-white text-lg font-rubik font-normal pb-4'>Business includes:</h4>
            <ul>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>CMS integration</li>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>Email & SMS reminders</li>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>Customer support 24/7</li>
            </ul>
          </div>
          <div className='w-full bg-[#18003e] pt-8 pb-8 pl-6 pr-6 rounded'>
            <h2 className='text-white text-3xl font-rubik font-medium'>Enterprise plan</h2>
            <h3 className='text-white text-lg font-rubik font-normal mt-2 mb-8'>Lorem Ipsum is simply dummy text and typesetting industry.</h3>
            <h1 className='text-white font-normal font-rubik text-6xl'><span className='text-white'>$</span>99 <span className='text-white text-sm font-rubik font-normal'>/per month</span></h1>
            <a href="#"><button className='text-white hover:text-white bg-gradient-236 from-gradientColor1 to-gradientColor2 hover:from-gradientColor2 hover:to-gradientColor1 font-rubik font-normal text-base w-full rounded-lg pt-2 pb-2 mt-8 mb-6'>Try 3 days for free</button></a>
            <h4 className='text-white text-lg font-rubik font-normal pb-4'>Enterprise includes:</h4>
            <ul>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>CMS integration</li>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>Email & SMS reminders</li>
              <li className='text-white font-normal text-sm font-rubik mb-2'><i></i>Customer support 24/7</li>
            </ul>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Pricing