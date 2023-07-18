import React from 'react'

const FullWidthBgImage = ({
  image,
  name,
  desc
}) => {
  return (
    <div className='flex flex-col justify-center bg-slate-900 p-7 rounded-xl'>
      <div className='flex justify-center rounded-r-3xl'>
        <img className='w-28' src={image} alt=""/>
      </div>
      <div className='flex flex-col text-center'>
        <h2 className='text-praimary font-semibold font-oswald text-2xl mt-4 mb-4'>{name}</h2>
        <p className='text-white font-rubik font-normal text-base'>{desc}</p>
      </div>
    </div>
  )
}

export default FullWidthBgImage
