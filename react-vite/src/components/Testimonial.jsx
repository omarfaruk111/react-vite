import React from 'react'
import Testimonials from './Testimonials/Testimonials'

const Testimonial = () => {
  return (
    <div id='testimonials' className="project bg-secondary pb-32 md:pb-24 sm:pb-20">
      <div className="container m-auto flex flex-col">
        <div className="flex flex-col text-center">
            <h3 className="font-medium font-rubik text-base uppercase text-subTColor">
            Testimonials
            </h3>
            <h2 className="font-oswald text-white text-5xl font-semibold sm:text-3xl">
            Our Clients <span className="bg-clip-text text-transparent bg-gradient-236 from-gradientColor1 to-gradientColor2">Feedback</span>
            </h2>
            <p className="pt-5 font-rubik text-lg text-white">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit, Error Qui Enim Sit Ex Provident
            </p>
        </div>

        <div className="mt-16 text-white lg:pl-10 lg:pr-10 sm:pl-2 sm:pr-2">
          <Testimonials />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
