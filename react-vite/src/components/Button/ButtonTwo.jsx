import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";

const ButtonTwo = (props) => {
  return (
    <>
      <button className='button'>{props.buttonText}
        <HiOutlineDownload className='mt-1 ml-2 text-lg' />
      </button>
    </>
  )
}

export default ButtonTwo