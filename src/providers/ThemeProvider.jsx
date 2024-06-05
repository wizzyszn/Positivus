import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextAPI'
export default function ThemeProvider({children}) {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme} p-[5%] pt-0 pb-0`}>{children}</div>
  )
}
