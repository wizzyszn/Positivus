import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextAPI'
import { teams } from '../data'
import  linedInIcon from "../assets/logos/Social icon.png"

export default function Team() {
   const {theme} =useContext(ThemeContext)
  return (
    <div>
         <div className=' flex items-center gap-6 w-full mt-24 '>
    <span className={`p-1 bg-[#B9FF66] text-3xl font-semibold rounded-lg ${theme ==="dark" ? " text-black" : 'text-black'}`}>Team</span>
    <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
    </div>
    <div className=' grid grid-cols-3 mt-9 gap-4'>
      {
        teams.map((teamMember,index) =>{
          return <div key={index} className='gap-3 p-9 border grid grid-rows-2  rounded-3xl border-black shadow-md shadow-black'> 
          <div className=' row-span-1 flex justify-between'>
            <div><img src={teamMember.avatar} alt="avi" /></div>
            <div className=' flex flex-col gap-2 justify-end'><h3 className=' text-2xl font-semibold'>{teamMember.name}</h3>
            <p>{teamMember.position}</p> </div>
            <div><img src={linedInIcon} alt="icon" /></div>
          </div>
          <div className=' border-t border-black pt-3'>
            <p>{teamMember.experience}</p>  
          </div> 
          </div>
        })
      }
    </div>
    </div>
  )
}
