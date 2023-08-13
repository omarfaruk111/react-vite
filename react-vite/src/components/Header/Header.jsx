import React, { useState } from 'react'
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className=''>
      <motion.div className={`bg-black h-screen p-5 pt-8 ${open ? "w-72" : "w-24"} duration-300 relative `}>

        <BsArrowRight className={`text-white text-4xl absolute top-7 -right-4 border border-fuchsia-600 cursor-pointer rounded-3xl bg-fuchsia-800 p-1 ${!open && "rotate-180"} `} onClick={() => setOpen(!open)} />

        <div className={`${open && "inline-flex"} ${!open && "inline-block"}`}>
          <FaHome className={`text-white float-left mr-2 text-4xl block cursor-pointer bg-indigo-500 duration-500 rounded ${open && "rotate-[360deg]"} `} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Omar Faruk</h1>
        </div>

        <div className=''>

        </div>

      </motion.div>
    </div>
  )
}

export default Header

// https://www.youtube.com/watch?v=MszSqhEw__8