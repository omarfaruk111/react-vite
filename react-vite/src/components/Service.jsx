import React from 'react'
import service1 from '../assets/images/service1.svg'

const Service = () => {
  return (
    <div className='service bg-secondary pb-32 lg:pl-4 lg:pr-4'>
      <div className='container m-auto flex flex-col'>
        <div className="flex flex-col text-center">
            <h3 className="font-medium font-rubik text-base uppercase text-subTColor">
            WHAT WE DO
            </h3>
            <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
            SERVICES AND <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientColor1 to-gradientColor2">SOLUTIONS</span>
            </h2>
            <p className="pt-5 font-rubik text-lg text-white">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit, Error Qui Enim Sit Ex Provident
            </p>
        </div>

        <div className='service_s flex flex-row md:flex-wrap mt-14 gap-8'>
            <div className='card w-full xl:w-1/3 flex flex-col items-center pb-12 pt-12 pl-10 pr-10 bg-secondary-light'>
                <div className='layer'></div>
                <img className='w-fit z-10' src={service1} alt="service1" />
                <h2 className='text-praimary z-10 font-semibold font-oswald text-2xl uppercase text-center mb-7 mt-7'>DESIGN PRINCIPALES</h2>
                <p className='text-white-deep z-10 font-rubik text-center text-lg font-normal'>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
            </div>
            <div className='card w-full xl:w-1/3 flex flex-col items-center pb-12 pt-12 pl-10 pr-10 bg-secondary-light'>
            <div className='layer'></div>
                <img className='z-10' src={service1} alt="" />
                <h2 className='text-praimary z-10 font-semibold font-oswald text-2xl uppercase text-center mb-7 mt-7'>DESIGN PRINCIPALES</h2>
                <p className='text-white-deep z-10 font-rubik text-center text-lg font-normal'>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
            </div>
            <div className='card w-full xl:w-1/3 flex flex-col items-center pb-12 pt-12 pl-10 pr-10 bg-secondary-light'>
            <div className='layer'></div>
                <img className='z-10' src={service1} alt="" />
                <h2 className='text-praimary z-10 font-semibold font-oswald text-2xl uppercase text-center mb-7 mt-7'>DESIGN PRINCIPALES</h2>
                <p className='text-white-deep z-10 font-rubik text-center text-lg font-normal'>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Service