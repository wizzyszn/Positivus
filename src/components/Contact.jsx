import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextAPI'
import vector1 from '../assets/vectors/Vector.png'
import vector2 from '../assets/vectors/Vector-1.png'
import vector3 from '../assets/vectors/Mask group (3).png'
export default function Contact() {
     const {theme } = useContext(ThemeContext)
  return (

    <div className=' mt-14 min-h-0' id='contact-us'>
        <div className=' flex items-center gap-6 w-1/2 '>
    <span className={`${theme ==="dark" ? " text-black" : 'text-black'} p-1 bg-[#B9FF66] text-3xl font-semibold rounded-lg`}>Contact Us</span>
    <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
    </div>
    <div className={`${theme ==="light" ? " border-black" : "border-[#B9FF66]"} mt-9 min-h-[50rem] border-2  p-9 grid grid-cols-2`}>
        <form action="" className=' px-[10%] pt-[5%] rounded-3xl'>
        <div className=' flex gap-7 items-center'>
        <div className=' flex gap-3 items-center'> <input className=' custom-radio '  type="radio" name="hi" id="hi" /> <label htmlFor="hi" className=' text-xl'>Say Hi</label></div>
        <div className=' flex gap-3 items-center'> <input className=' custom-radio '  type="radio" name="quote" id="quote" /> <label htmlFor="quote" className='text-xl'>Get a Quote</label></div>
        </div>
        <div className=' flex flex-col mt-[5%] gap-5'>
          <div className=' flex flex-col gap-2'>
            <label htmlFor="name" className=' text-xl'>Name</label>
            <input type="text" className=' h-16 border border-black rounded-xl text-black p-2' />
          </div>
          <div className=' flex flex-col gap-2'>
            <label htmlFor="name" className=' text-xl'>Email*</label>
            <input type="email" className=' h-16 border border-black rounded-xl  text-black p-2' />
          </div>
          <div className=' flex flex-col gap-2'>
            <label htmlFor="message" className=' text-xl'>Message*</label>
            <textarea name="message" id="message" className=' h-[12rem] border border-black rounded-xl  text-black p-2'></textarea>
          </div>
          <button className=' rounded-md p-5 bg-[#191A23] text-white text-xl'>Send Message</button>
        </div>
     </form>
     <div className=' relative'>
      <img src={vector1} alt="vector"  className=' absolute right-0 top-[35%]' />
      <img src={vector2} alt="vector"  className=' absolute right-[20%] top-[25%]'/>
      <img src={vector3} alt="vector"  className=' absolute right-0'/>
     </div>
    </div>
    </div>
  )
}
