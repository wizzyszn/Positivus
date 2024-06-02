import React, { useContext } from 'react'
import Logo from '../components/svg/Logo'
import ThemeToggle from './ThemeToggle'
import { ThemeContext } from '../context/ThemeContextAPI'
export default function Navbar() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`flex justify-between items-center p-2  ${theme ==="light"?"blackborder" : 'lemonborder'}`}>
        <Logo />
        <div className=' flex gap-16 items-center '>
        <ThemeToggle />
        <a href='#About-us p-3'> About us</a>
        <a href='#services p-3'> Services</a>
        <a href='#case-studies p-3'> Use Cases</a>
        <a href='#contact-us p-3'> Contact Us</a>
        <button className={` p-3 border border-black rounded-lg ${theme ==="light"?"hover:bg-[#B9FF66]" : 'hover:text-black hover:bg-[#B9FF66]' }  transition-all duration-100 ease-in`}>Request a quote</button>
        </div>
    </div>
  )
}
