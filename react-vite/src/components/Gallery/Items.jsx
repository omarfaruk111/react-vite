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
            const {id, image, title, category, description} = value;
            return (
                  <div class="overflow-hidden  aspect-auto cursor-pointer rounded-xl relative group ">
                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bottom-0 w-full h-full">
                        <div class="bg-gradient-to-br from-gradientColor3 to-gradientColor4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out w-full h-full flex flex-col items-center justify-end px-4">
                            <h1 class="font-bold text-white text-center text-2xl leading-7 py-4">{title}</h1>
                            <h2 className='text-white text-center text-base uppercase underline font-normal'>{category}</h2>
                        </div>
                    </div>
                    <img  alt="" class="object-cover w-full aspect-auto group-hover:scale-110 transition duration-300 ease-in-out" src={image}/>
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