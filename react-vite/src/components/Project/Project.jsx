import React from 'react'
import Gallery from '../Gallery/Gallery'

const Project = () => {
  return (
    <div id='project' className='project sec pb-32 md:pb-24 sm:pb-20 lg:pl-4 lg:pr-4'>
    <div className='container m-auto flex flex-col'>
    <div className="flex flex-col text-center">
          <h3 className="sub-title">
          WORKING PROCESS
          </h3>
          <h2 className="title">
          LASTET WORKING <span className="title-span">PROJECT</span>
          </h2>
          <p className="para">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit
          </p>
      </div>
    <div className='pt-12'>
          <Gallery />
    </div>
    </div>
    </div>
  )
}

export default Project