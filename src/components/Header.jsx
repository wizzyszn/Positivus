import React from 'react'
import vector from '../assets/vectors/Illustration.png'
import Dribble from './svg/Dribble'
import Hubspot from '../components/svg/Hubspot'
import Notion from '../components/svg/Notion'
import Zoom from '../components/svg/Zoom'
import Netflix from '../components/svg/Netflix'
import Amazon from '../components/svg/Amazon'

const logos = [<Dribble />,<Hubspot />,<Notion />,<Zoom />,<Netflix />,<Amazon /> ]
export default function Header() {
  return (
    <div className=' grid grid-cols-2 mt-20 '>
        <div className='flex flex-col gap-8 w-[80%]'>
        <h1 className=' text-7xl font-medium'>Navigating the digital landscape for success</h1>
            <p className=' text-lg w-[90%]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button className=' w-fit p-3 bg-black text-white rounded-lg'>Book a consultation</button>
        </div>
        <div className='flex justify-center items-center'><img src={vector} alt="vector" /></div>   
        <div className=' flex mt-4 justify-between col-span-2'>
          {
           logos.map((logo,index)=>{
            return <div key={index} >{logo}</div>
           }) 
          }
        </div>
    </div>
  )
}
