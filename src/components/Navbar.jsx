import React, { useContext } from 'react'
import Logo from '../components/svg/Logo'
import ThemeToggle from './ThemeToggle'
import { ThemeContext } from '../context/ThemeContextAPI'
import BuggerMenu from './svg/BuggerMenu'
import { Link } from 'react-scroll';
export default function Navbar() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`flex justify-between items-center p-2  ${theme ==="light"?"blackborder" : 'lemonborder'}`}>
        <Logo />
        <div className=' flex gap-16 items-center  max-[720px]:hidden'>
        <ThemeToggle />
        <Link to="goals" smooth={true} duration={1000} className=' cursor-pointer'>Business Goals</Link>
        <Link to="services" smooth={true} duration={1000} className=' cursor-pointer'>Services</Link>
        <Link to="case-studies" smooth={true} duration={1000} className=' cursor-pointer'>Use Cases</Link>
        <Link to="contact-us" smooth={true} duration={1000} className=' cursor-pointer'>Contact Us</Link>
        <button className={` p-3 border border-black rounded-lg ${theme ==="light"?"hover:bg-[#B9FF66]" : 'hover:text-black hover:bg-[#B9FF66]' }  transition-all duration-100 ease-in`}>Request a quote</button>
  
        </div>
        <div className=' min-[720px]:hidden flex gap-2 items-center'>
        <ThemeToggle />
        <BuggerMenu />
        </div>
       
    </div>
  )
}
