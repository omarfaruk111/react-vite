import React from 'react'
import Testimonials from './Testimonials/Testimonials'

const Testimonial = () => {
  return (
    <div className="project bg-dark pb-32">
      <div className="container m-auto flex flex-col">
        <div className="flex flex-row">
          <div className="w-full xl:w-1/2">
            <h3 className="text-green font-medium font-rubik text-base uppercase">
            Testimonials
            </h3>
            <h2 className="font-oswald text-white text-5xl font-semibold">
            Our Clients <span className="text-green">Feedback</span>
            </h2>
          </div>
          <div className="w-full xl:w-1/2 ">
            <p className="border-l-2 border-green pl-10 font-rubik text-lg text-white">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint
              Ratione Reprehenderit
            </p>
          </div>
        </div>
        <div className="mt-16 text-white">
          <Testimonials />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
