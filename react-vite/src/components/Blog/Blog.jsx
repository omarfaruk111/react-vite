import React from 'react'
import Posts from './Posts'

const Blog = () => {
  return (
    <div id='blog' className='project sec pb-32 md:pb-24 sm:pb-20 lg:pl-4 lg:pr-4'>
    <div className='container m-auto flex flex-col'>
      <div className="flex flex-col text-center">
            <h3 className="sub-title">RECENT NEWS DESK</h3>
            <h2 className="title">LASTET NEWS & <span className="title-span">BLOGS</span></h2>
            <p className="para">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit</p>
      </div>
          <Posts />
    </div>
    </div>
  )
}

export default Blog