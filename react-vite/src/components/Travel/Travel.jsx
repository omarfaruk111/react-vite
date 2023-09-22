import React from 'react'
import Sliders from '../Sliders/Sliders'

const Travel = () => {
  return (
    <div id='travel' className="project sec pb-32 md:pb-24 sm:pb-20">
      <div className="container m-auto flex flex-col">
        <div className="flex flex-col text-center">
            <h3 className="sub-title">
            Travel
            </h3>
            <h2 className="title">
            HAPPY <span className="title-span">TRAVEL</span>
            </h2>
            <p className="para">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit
            </p>
        </div>

        <div className="mt-16 text-white lg:pl-6 lg:pr-6 sm:p-0">
          <Sliders />
        </div>
      </div>
    </div>
  )
}

export default Travel
