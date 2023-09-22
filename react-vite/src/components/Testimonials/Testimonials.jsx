import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <div id='testimonials' className="project bg-secondary pb-32 md:pb-24 sm:pb-20">
      <div className="container m-auto flex flex-col">
        <div className="flex flex-col text-center">
            <h3 className="sub-title">Testimonials</h3>
            <h2 className="title">Our Clients <span className="title-span">Feedback</span></h2>
            <p className="para">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit, <br/> Error Qui Enim Sit Ex Provident
            </p>
        </div>

        <div className="mt-16 text-white lg:pl-10 lg:pr-10 sm:pl-2 sm:pr-2">
          <Testimonial />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
