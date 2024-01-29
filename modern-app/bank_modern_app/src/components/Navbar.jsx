import {useState} from 'react';
import {close, logo, menu} from '../assets/index';
import {navLinks} from '../constants/index'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      
      <img src={logo} alt='hoobank' 
      className="w-[124px] h-[32px]"/>

      <ul className='hidden list-none sm:flex 
      justify-end items-center flex-1'>

        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer
            text-[16px] text-white ${index === navLinks.length-1 
              ? `mr-0` : `mr-10`}`}
          >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
          </li>
        ))}

      </ul>

    </nav>
  )
}

export default Navbar