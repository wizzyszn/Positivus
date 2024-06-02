import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextAPI'

export default function Testimonials() {
    const {theme} =useContext(ThemeContext)
  return (
    <div>
    <div className=' flex items-center gap-6 w-full mt-24 '>
    <span className={`p-1 bg-[#B9FF66] text-3xl font-semibold rounded-lg ${theme ==="dark" ? " text-black" : 'text-black'}`}>Testimonials</span>
    <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
    </div>
    </div>
  )
}
