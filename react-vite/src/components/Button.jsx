import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";

const Button = () => {
  return (
    <>
      <button className='flex text-white bg-praimary text-lg font-medium font-rubik uppercase pr-6 pl-6 pt-3 pb-3 w-fit outline-none hover:bg-white hover:text-dark border-none'>
        Download CV <HiOutlineDownload className='mt-1 ml-2 text-lg'/>
        </button>
    </>
  )
}

export default Button