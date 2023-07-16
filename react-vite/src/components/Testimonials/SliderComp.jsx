import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FullWidthBgImage from './FullWidthBgImage'
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'
import { useResponsive } from './useResponsive'
import { useRef } from 'react'

export const SliderComp = ({
  data,
  slideNum,
  autoplay,
  autoplaySpeed,
}) => {
  const { screenType } = useResponsive()
  const sliderRef = useRef()
  const settings = {
    arrows: false,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: screenType === 'MOBILE' ? 1 : slideNum,
    slidesToScroll: screenType === 'MOBILE' ? 1 : slideNum,
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          {screenType !== 'MOBILE' && (
            <div onClick={() => sliderRef.current.slickPrev()} className="prev">
              <FiArrowLeftCircle style={{ fontSize: 24 }} />
            </div>
          )}

          <Slider {...settings} ref={sliderRef}>
            {data?.length > 0 &&
              data?.map((item, index) => (
                  <FullWidthBgImage
                    image={item.image}
                    name={item.name}
                    desc={item.desc}
                    borderRadius={'10px'}
                    height={'300px'}
                  />
              ))}
          </Slider>
          {screenType !== 'MOBILE' && (
            <div onClick={() => sliderRef.current.slickNext()} className="next">
              <FiArrowRightCircle style={{ fontSize: 24 }} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
