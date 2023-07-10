import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project 1</SwiperSlide>
        <SwiperSlide>Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project 2</SwiperSlide>
        <SwiperSlide>Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project 3</SwiperSlide>
        <SwiperSlide>Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project 4</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
