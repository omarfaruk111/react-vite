import React from 'react'
import Logo from '../../assets/images/omar-faruk-logo.svg';
const Header = () => {
  return (
    <div className='py-0 sticky top-0 z-[9999] bg-black'>
      <div className='container m-auto'>
          
        
      <div className="navbar justify-between">
        <div className="navbar-start md:justify-between md:w-full">
          <div className="dropdown hidden">
            <label tabIndex={0} className="btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Skill</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>Portfolio</a></li>
            <li><a href='#'>Blog</a></li>
            </ul>
          </div>
          <a href='#' className="btn-ghost normal-case text-xl">
            <img className='w-[200px] h-[80px]' src={Logo} alt="" />
          </a>
        </div>
        <div className="navbar-center md:hidden lg:flex">
          <ul className="flex flex-row gap-6 text-lg uppercase px-1 text-white">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Skill</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>Portfolio</a></li>
            <li><a href='#'>Blog</a></li>
          </ul>
        </div>
      </div>


      </div>
    </div>
  )
}

export default Header