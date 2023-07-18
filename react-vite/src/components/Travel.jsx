import React from 'react'
import Sliders from './Sliders/Sliders'

const Travel = () => {
  return (
    <div className="project bg-dark pb-32 lg:pl-4 lg:pr-4">
      <div className="container m-auto flex flex-col">
        <div className="flex flex-row sm:flex-col">
          <div className="w-full xl:w-1/2 sm:w-full">
            <h3 className="text-praimary font-medium font-rubik text-base uppercase">
              Travel
            </h3>
            <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
              HAPPY <span className="text-praimary">TRAVEL</span>
            </h2>
          </div>
          <div className="w-full xl:w-1/2 sm:w-full">
            <p className="border-l-2 sm:border-0 border-praimary pl-10 sm:pl-0 sm:pt-5 font-rubik text-lg text-white">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint
              Ratione Reprehenderit
            </p>
          </div>
        </div>
        <div className="mt-16 text-white lg:pl-6 lg:pr-6 sm:p-0">
          <Sliders />
        </div>
      </div>
    </div>
  )
}

export default Travel
