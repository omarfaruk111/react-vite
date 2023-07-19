import React, { useState } from 'react'
import ServiceData from './Json/ServiceData'

const Service = () => {
    const [items, setItems] = useState(ServiceData);

    const filterItem = (cateItem) =>{
      const updateItems = ServiceData.filter((curElem)=>{
        return curElem.cat == cateItem;
      });
      setItems(updateItems);
    }


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

        <div className=''>
              <button onClick={()=>filterItem('design')}></button>
              <button onClick={()=>filterItem('fashion')}></button>
              <button onClick={()=>filterItem('video')}></button>
              <button onClick={()=>filterItem('song')}></button>
              {/* <button onClick={()=>filterItem('song')}></button> */}
        </div>

        <div className='service_s grid grid-cols-3 mt-14 gap-8'>
          {ServiceData.map(service =>{
            return (
              <div className='card flex flex-col items-center pb-12 pt-12 pl-10 pr-10 bg-secondary-light'>
                <div className='layer'></div>
                <img className='w-fit z-10' src={service.url} alt="service1" />
                <h2 className='text-praimary z-10 font-semibold font-oswald text-2xl uppercase text-center mb-7 mt-7'>DESIGN PRINCIPALES</h2>
                <p className='text-white-deep z-10 font-rubik text-center text-lg font-normal'>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
              </div>
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default Service