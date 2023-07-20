import React from 'react'
import BlogInfo from '../Json/BlogData.json'
const Posts = (props) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 md:gap-y-10 mt-16'>
        {BlogInfo.slice(0, 3).map((item, index) => (
          <div key={index} className='text-white'>
            <div className='overflow-hidden'><img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={(`${item.url}`)} alt="" /></div>
            <div className='flex flex-row justify-between items-center mt-4 mb-4'>
                <h3 className='text-white text-base font-medium font-rubik'>{item.date}</h3>
                <h3 className='text-white text-base font-medium font-rubik bg-gradient-to-r from-gradientColor1 to-gradientColor2 pt-2 pl-5 pb-2 pr-5 rounded-md cursor-pointer'>{item.cat}</h3>
            </div>
            <h1 className='text-2xl font-bold text-white'><a href="#">{item.title}</a></h1>
          </div>
        ))}
      </div>
  )
}

export default Posts