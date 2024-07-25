import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../context/ThemeContextAPI'

export default function Links() {
    const {theme} = useContext(ThemeContext)
  return (
    <>
    <Link to="goals" smooth={true} duration={1000} className=' cursor-pointer'>Business Goals</Link>
        <Link to="services" smooth={true} duration={1000} className=' cursor-pointer'>Services</Link>
        <Link to="case-studies" smooth={true} duration={1000} className=' cursor-pointer'>Use Cases</Link>
        <Link to="contact-us" smooth={true} duration={1000} className=' cursor-pointer'>Contact Us</Link>
        <button className={` p-3 border border-black rounded-lg ${theme ==="light"?"hover:bg-[#B9FF66]" : 'hover:text-black hover:bg-[#B9FF66]' }  transition-all duration-100 ease-in`}>Request a quote</button>
  </>
  )
}
