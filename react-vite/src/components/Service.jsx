import React from 'react'
import service1 from '../assets/images/service1.svg'

const Service = () => {
  return (
    <div className='service bg-dark pb-32 lg:pl-4 lg:pr-4'>
        <div className='container m-auto flex flex-col'>
        <div className="flex flex-row sm:flex-col">
          <div className="w-full xl:w-1/2 sm:w-full">
            <h3 className="text-praimary font-medium font-rubik text-base uppercase">
            WHAT WE DO
            </h3>
            <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
            SERVICES AND <span className="text-praimary">SOLUTIONS</span>
            </h2>
          </div>
          <div className="w-full xl:w-1/2 sm:w-full">
            <p className="border-l-2 sm:border-0 border-praimary pl-10 sm:pl-0 sm:pt-5 font-rubik text-lg text-white">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit, Error Qui Enim Sit Ex Provident
            </p>
          </div>
        </div>
        <div className='service_s flex flex-row md:flex-wrap mt-14 gap-8'>
            <div className='card w-full xl:w-1/3 flex flex-col items-center pb-12 pt-12 pl-10 pr-10 bg-dark-light'>
                <div className='layer'></div>
                <img className='w-fit z-10' src={service1} alt="service1" />
                <h2 className='text-praimary z-10 font-semibold font-oswald text-2xl uppercase text-center mb-7 mt-7'>DESIGN PRINCIPALES</h2>
                <p className='text-white-deep z-10 font-rubik text-center text-lg font-normal'>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
            </div>
            <div className='card w-full xl:w-1/3 flex flex-col items-center pb-12 pt-12 pl-10 pr-10 bg-dark-light'>
            <div className='layer'></div>
                <img className='z-10' src={service1} alt="" />
                <h2 className='text-praimary z-10 font-semibold font-oswald text-2xl uppercase text-center mb-7 mt-7'>DESIGN PRINCIPALES</h2>
                <p className='text-white-deep z-10 font-rubik text-center text-lg font-normal'>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
            </div>
            <div className='card w-full xl:w-1/3 flex flex-col items-center pb-12 pt-12 pl-10 pr-10 bg-dark-light'>
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