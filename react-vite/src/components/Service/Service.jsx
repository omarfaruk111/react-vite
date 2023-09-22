import React, { useState } from 'react'
import ServiceData from '../Json/ServiceData'

const Service = () => {

  return (
    <div id='service' className='service sec pb-32 md:pb-24 sm:pb-20'>
      <div className='container m-auto flex flex-col'>
        <div className="flex flex-col text-center">
          <h3 className="sub-title">
            WHAT WE DO
          </h3>
          <h2 className="title">
            SERVICES AND <span className="title-span">SOLUTIONS</span>
          </h2>
          <p className="para">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione <br /> Reprehenderit, Error Qui Enim Sit Ex Provident
          </p>
        </div>

        <div className='service_s grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-14 gap-8'>
          {ServiceData.map((service, index) => {
            return (
              <div key={index} className='card lg:w-full flex flex-col rounded items-center pb-6 pt-5 pl-5 pr-5 bg-[#18003e]'>
                <div className='layer'></div>
                <img className='w-full h-52 z-10' src={service.url} alt="service1" />
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