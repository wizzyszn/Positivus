import React, { useContext } from 'react'
import Addition from './svg/Addition'
import Subtraction from './svg/Subtraction'
import { payload } from '../data'
import { useState } from 'react'
import { ThemeContext } from '../context/ThemeContextAPI'
export default function WorkingAccordion () {
    const [activeAccordions, setActiveAccordions] = useState([]);
     const {theme} = useContext(ThemeContext)
   return (
    <div className=' mt-16' id='goals'>
      <div className=' flex items-center gap-6   '>
        <span className={`${theme ==="light" ? " text-black" : 'text-black'} p-1 bg-[#B9FF66] text-3xl font-semibold rounded-lg`}>
          Our Working Process{' '}
        </span>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className=' flex flex-col gap-4 mt-14'>
        {payload.map((elem, index) => {
          return (
            <div
              onClick={() =>{
                if(activeAccordions.includes(index)){
                    setActiveAccordions(activeAccordions.filter(i => i !== index))
                }else{
                    setActiveAccordions(prevElem => [...prevElem, index]);
                }
              }}
              key={index}
              className={` shadow-md shadow-black flex w-full border rounded-[50px] border-black overflow-hidden flex-col p-16 gap-7 cursor-pointer hover:text-black hover:bg-[#B9FF66] ${ activeAccordions.includes(index) ? "bg-[#B9FF66] text-black" : ''} `}
            >
              <div className=' w-full items-center flex justify-between'>
                <div className=' flex gap-5 items-center'>
                  <h2 className=' text-5xl font-semibold'>{`0${elem.id}`}</h2>
                  <h3 className='text-2xl font-semibold'>{elem.title}</h3>
                </div>
                <span>
                    {
                         activeAccordions.includes(index) ? <Addition /> : <Subtraction activeAccordios={activeAccordions} index={index} />
                    }
                </span>
              </div>
              <div className={` border-t-2 border-black p-3`}
              style={{
                display : activeAccordions.includes(index) ? "block" : 'none'

              }}
              >{elem.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
