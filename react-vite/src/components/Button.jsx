import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";

const Button = () => {
  return (
    <>
      <button className='flex text-white hover:text-white bg-gradient-236 from-gradientColor1 to-gradientColor2 hover:from-gradientColor2 hover:to-gradientColor1 text-lg font-medium font-rubik uppercase pr-6 pl-6 pt-3 pb-3 w-fit outline-none border-none'>
        Download CV <HiOutlineDownload className='mt-1 ml-2 text-lg'/>
        </button>
    </>
  )
}

export default Button