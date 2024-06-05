import React from 'react'
import social1 from '../assets/logos/Social icon-1.png'
import social2 from '../assets/logos/Social icon-2.png'
import social3 from '../assets/logos/Social.png'
import Logo2 from './svg/Logo2'
export default function Footer() {
  return (
    <div className=' bg-[#191A23] mt-[10%] h-[500px] rounded-tr-3xl rounded-tl-3xl flex flex-col text-white p-16 gap-14'>
        <div className=' flex justify-between items-center'>
            <Logo2 />
            <div className=' flex gap-3 gap-3'>
                <a href='#' className=' underline text-xl'>About us</a>
                <a href='#' className=' underline text-xl'>Services</a>
                <a href='#' className=' underline text-xl'>Use Cases</a>
                <a href='#' className=' underline text-xl'>Pricing</a>
                <a href='#' className=' underline text-xl'>Blog</a>
            </div>
            <div className=' flex gap-3'>
                <div><img src={social1} alt="social-logo" /></div>
                <div> <img src={social2} alt="social-logo" /></div>
                <div><img src={social3} alt="social-logo" /></div>
            </div>
        </div>
        <div className=' flex'>
            <div className='flex flex-col gap-3 '>
                <span>Contact us:</span>
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
            <div className=' flex justify-center items-center gap-3 w-full p-9'>
                <input type="text" placeholder='Email' className='w-full flex-1 h-20  bg-transparent border rounded-xl p-2'/>
                <button className=' flex-1 w-full h-20 text-black rounded-xl bg-[#B9FF66] text-lg'>Subscribe to news</button>
            </div>              
        </div>
        <div className='border-t'>
            <div className=' flex gap-4 mt-9'>
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <p className=' underline'>Privacy Policy</p>
            </div>
          
        </div>

    </div>
  )
}
