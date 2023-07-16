import React from 'react'
import Testimonials from './Testimonials/Testimonials'

const Testimonial = () => {
  return (
    <div className="project bg-dark pb-32">
      <div className="container m-auto flex flex-col">
        <div className="flex flex-row sm:flex-col">
          <div className="w-full xl:w-1/2 sm:w-full">
            <h3 className="text-green font-medium font-rubik text-base uppercase">
            Testimonials
            </h3>
            <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
            Our Clients <span className="text-green">Feedback</span>
            </h2>
          </div>
          <div className="w-full xl:w-1/2 sm:w-full">
            <p className="border-l-2 sm:border-0 border-green pl-10 sm:pl-0 sm:pt-5 font-rubik text-lg text-white">
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
