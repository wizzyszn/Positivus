import React, { useContext } from 'react'
import sun from "../assets/logos/sun.png"
import moon from "../assets/logos/moon.png"
import { ThemeContext } from '../context/ThemeContextAPI'
export default function ThemeToggle() {
    const {toggle,theme} = useContext(ThemeContext)
  return (
    <div className={`flex border  rounded-full p-[0.7px] relative w-[50px] justify-between h-[22px] cursor-pointer ${theme ==="light" ? 'border-black' : 'border-gray-300'}`} onClick={toggle}>
        <img src={sun} alt="sun" />
        <div className={`size-[1.25rem] rounded-full absolute ${theme === "light" ? 'left-0 top-0 transition-transform duration-75 bg-black' : 'right-0 top-0 transition-transform duration-75 bg-white'}`}></div>
        <img src={moon} alt="moon" />
    </div>
  )
}
