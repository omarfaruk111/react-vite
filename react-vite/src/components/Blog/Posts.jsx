import React from 'react'
import BlogInfo from '../Json/BlogData.json'
const Posts = (props) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 md:gap-y-10 mt-16'>
        {BlogInfo.slice(0, 3).map((item, index) => (
          <div key={index} className='text-white'>
            <div className='overflow-hidden relative'>
              <img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={(`${item.url}`)} alt="" />
              <h3 className='text-white text-base font-medium font-rubik bg-black/[.6] py-1 px-4 rounded-md cursor-pointer absolute top-4 right-4'>{item.cat}</h3>
              <h3 className='text-white bg-black/[.6] text-base font-medium font-rubik py-1 px-4 rounded-md absolute bottom-4 left-4'>{item.date}</h3>
            </div>
              <h1 className='text-2xl font-bold text-white mt-4'><a href="#">{item.title}</a></h1>
          </div>
        ))}
      </div>
  )
}

export default Posts