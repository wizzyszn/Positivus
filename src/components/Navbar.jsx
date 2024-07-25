import React, { useContext } from 'react'
import Logo from '../components/svg/Logo'
import ThemeToggle from './ThemeToggle'
import { ThemeContext } from '../context/ThemeContextAPI'
import BuggerMenu from './svg/BuggerMenu'
import Links from './Links'
export default function Navbar() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`flex justify-between items-center p-2 max-sm:p-0 ${theme ==="light"?"blackborder" : 'lemonborder'}`}>
        <Logo />
        <div className=' flex gap-16 items-center  max-[720px]:hidden'>
        <ThemeToggle />
        <Links />
        </div>
        <div className=' min-[720px]:hidden flex gap-2 items-center'>
        <BuggerMenu />
        </div>
       
    </div>
  )   
}
