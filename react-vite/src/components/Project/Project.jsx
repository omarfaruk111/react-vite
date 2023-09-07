import React from 'react'
import Gallery from '../Gallery/Gallery'

const Project = () => {
  return (
    <div id='project' className='project bg-secondary pb-32 md:pb-24 sm:pb-20 lg:pl-4 lg:pr-4'>
    <div className='container m-auto flex flex-col'>
    <div className="flex flex-col text-center">
          <h3 className="font-medium font-rubik text-base uppercase text-subTColor">
          WORKING PROCESS
          </h3>
          <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
          LASTET WORKING <span className="bg-clip-text text-transparent bg-gradient-236 from-gradientColor1 to-gradientColor2">PROJECT</span>
          </h2>
          <p className="pt-5 font-rubik text-lg text-white">
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