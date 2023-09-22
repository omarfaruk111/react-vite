import React from 'react'
import { SliderComp } from './SliderComp'
import Testmonials1 from '../../assets/images/testimonials1.png'
import Testmonials2 from '../../assets/images/testimonials2.png'
import Testmonials3 from '../../assets/images/testimonials3.png'

const data = [
  {
    name: "Mark",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    image: Testmonials1,
  },
  {
    name: "Ronaldo",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    image: Testmonials2,
  },
  {
    name: "Faruk",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    image: Testmonials3,
  },

]

const Testimonial = () => {
  return (
    <div className="main-container">
    <SliderComp
      autoplay={true}
      autoplaySpeed={3000}
      slideNum={2}
      data={data}
    />
  </div>
  )
}

export default Testimonial