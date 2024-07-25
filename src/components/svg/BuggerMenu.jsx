import React, { useContext } from 'react'
import { NavBarContext } from '../../context/NavbarContext'
export default function BuggerMenu() {
  const {setToggle,toggle} = useContext(NavBarContext)
  return (
    <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{setToggle(!toggle)}}>
    <path d="M1 1.80664H25" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <path d="M1 9.80664H25" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <path d="M1 17.8066H25" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    
  )
}
