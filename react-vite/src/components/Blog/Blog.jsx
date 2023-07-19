import React from 'react'
import Posts from './Posts'

const Blog = () => {
  return (
    <div className='project bg-secondary pb-32 lg:pl-4 lg:pr-4'>
    <div className='container m-auto flex flex-col'>
    <div className="flex flex-col text-center">
          <h3 className="font-medium font-rubik text-base uppercase text-subTColor">
          RECENT NEWS DESK
          </h3>
          <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
          LASTET NEWS & <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientColor1 to-gradientColor2">BLOGS</span>
          </h2>
          <p className="pt-5 font-rubik text-lg text-white">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit
          </p>
      </div>
          <Posts />
    </div>
    </div>
  )
}

export default Blog