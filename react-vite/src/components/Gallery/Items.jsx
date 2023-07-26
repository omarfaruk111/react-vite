import React, {useState} from 'react'
import Masonry from 'react-masonry-css'

const Items = ({data}) => {

  const breakpoint = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1
  };

  return (
    <>
      <div className="">
        <Masonry
          breakpointCols={breakpoint}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {data.map((value)=>{
            const {id, image, title, description} = value;
            return (
              <div className="" key={id}>
                  <img src={image} className="w-full h-auto"/>
                  <h3>{title}</h3>
                  <p>{description}</p>
              </div>
            )
            })
            }
        </Masonry>
      </div>
    </>
  )
}

export default Items