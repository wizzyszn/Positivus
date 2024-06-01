//import React, { useContext } from 'react'
import vector1 from '../assets/vectors/Illustration-1.png'
import vector2 from '../assets/vectors/Illustration-2.png'
import vector3 from '../assets/vectors/Illustration-3.png'
import vector5 from '../assets/vectors/illustration4.png'
import vector6 from '../assets/vectors/justdoit.png'
import vector7 from '../assets/vectors/tokyo.png'
import arrow1 from '../assets/navigations/Icon-1.png'
import arrow2 from '../assets/navigations/Icon.png'
import image1 from "../assets/images/Illustration.png"
//import { ThemeContext } from '../context/ThemeContextAPI'
export default function Services() {
  //const {theme} = useContext(ThemeContext)
  const cards = [
    {
      title : 'Search engine optimization',
      icon : arrow2,
      textBg : 'bg-[#B9FF66]',
      text : 'Learn More',
      vector : vector1,
      bg : 'bg-gray-200',
      textColor : 'text-black',
   

  },
    {
      title : 'Pay-per-click advertising',
      icon : arrow2,
      textBg :  'bg-[white]',
      text : 'Learn More',
      vector : vector2,
      bg : 'bg-[#B9FF66]',
      textColor : 'text-black',


  },
    {
      title : 'Social Media Marketing',
      icon : arrow1,
      textBg : 'bg-white',
      text : 'Learn More',
      vector : vector3,
      bg : 'bg-[#191A23]',
      textColor : 'text-white',

  },

    {
      title : 'Content Creation',
      icon : arrow2,
      textBg : 'bg-[#B9FF66]',
      text : 'Learn More',
      vector : vector5,
      bg : 'bg-gray-200',
      textColor : 'text-black',


  },
    {
      title : 'Analytics and Tracking',
      icon : arrow1 ,
      textBg : 'bg-[#B9FF66]',
      text : 'Learn More',
      vector : vector6,
      bg : 'bg-[#191A23]',
      textColor : 'text-white',


  },
    {
      title : 'Email Marketing',
      icon : arrow2,
      textBg : 'bg-[#B9FF66]',
      text : 'Learn More',
      vector : vector7,
      bg : 'bg-gray-200',
      textColor : 'text-black',
      


  },
]
  return (
    <div className=' mt-24 min-h-[1200px]'>   
    <div className=' flex items-center gap-6 w-1/2  '>
    <span className=' p-1 bg-[#B9FF66] text-3xl font-semibold rounded-lg'>Services</span>
    <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
    </div>
    <div className=' grid grid-cols-2 gap-6 m-h-fit mt-8 '>
      {
        cards.map((elem, index) =>{
          return <div key={index} className={` grid grid-cols-2 ${elem.bg} p-9 rounded-3xl shadow-black h-[350px] shadow-lg`}>
            <div className=' flex flex-col justify-between'>
              <h3 className={`${elem.textBg}  text-3xl w-1/2 font-semibold text-black p-2`}>{elem.title}</h3>
              <div
              className=' flex gap-4 items-center'
              ><img src={elem.icon} alt="arrow" /> <span className={`${elem.textColor} text-lg`}>{elem.text}</span></div>
            </div>
            <div className=' flex justify-center items-center'>
            <div><img src={elem.vector} alt="vector" /></div>
            </div>
             </div>
        })
      }
    </div> 
    <div className=' grid grid-cols-2 mt-16 pl-[5%]'>
      <div className=' flex justify-center flex-col self-center gap-4'>
        <h3 className=' text-3xl'>Let’s make things happen</h3>
        <p className=''>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <button className=' w-fit p-3 bg-[#191A23] text-[#F3F3F3] rounded-lg'>Get your free proposal</button>
      </div>
      <div className=' flex justify-center'><img src={image1} alt="img1" /></div>
    </div>
  </div>
  )
}
