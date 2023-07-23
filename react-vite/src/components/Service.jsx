import React, { useState } from 'react'
import ServiceData from './Json/ServiceData'

const Service = () => {
    const [items, setItems] = useState(ServiceData);

  return (
    <div className='service bg-secondary pb-32 md:pb-24 sm:pb-20 lg:pl-4 lg:pr-4'>
      <div className='container m-auto flex flex-col'>
        <div className="flex flex-col text-center">
            <h3 className="font-medium font-rubik text-base uppercase text-subTColor">
            WHAT WE DO
            </h3>
            <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
            SERVICES AND <span className="bg-clip-text text-transparent bg-gradient-236 from-gradientColor1 to-gradientColor2">SOLUTIONS</span>
            </h2>
            <p className="pt-5 font-rubik text-lg text-white">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione <br/> Reprehenderit, Error Qui Enim Sit Ex Provident
            </p>
        </div>

        <div className='service_s grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-14 gap-8'>
          {ServiceData.map(service =>{
            return (
              <div className='card lg:w-full flex flex-col items-center pb-6 pt-5 pl-5 pr-5 bg-[#18003e]'>
                <div className='layer'></div>
                <img className='w-fit z-10' src={service.url} alt="service1" />
                <h2 className='text-white z-10 font-semibold font-oswald text-[20px] leading-4 uppercase text-center mb-7 mt-7'>{service.title}</h2>
                <p className='text-white z-10 font-rubik text-center text-lg font-normal'>{service.body}</p>
              </div>
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default Service