import React from 'react'
import arrow3 from "../assets/navigations/arrow3.png"
export default function CaseStudies() {
  return (
    <div className=' mt-20'>
    <div className=' flex items-center gap-6  '>
    <span className=' p-1 bg-[#B9FF66] text-3xl font-semibold rounded-lg'>Case Studies</span>
    <p className=' w-1/2'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
    </div>
    <div className=' grid grid-cols-3 bg-[#191A23] text-[#F3F3F3]  p-20 rounded-3xl gap-7 mt-14 text-lg'>
        <div className=' border-r-2 border-white flex flex-col gap-3'>
            <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <span className=' flex items-center gap-3 text-[#B9FF66]'>Learn More <img src={arrow3} alt="arrow" /></span>
        </div>
        <div className=' border-r-2 border-white flex flex-col gap-2'>
            <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
            <span className=' flex items-center gap-3 text-[#B9FF66]'>Learn more <img src={arrow3} alt="arrow" /></span>
        </div>
        <div className=' flex flex-col gap-3'>
            <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
            <span className=' flex items-center gap-3 text-[#B9FF66]'>Learn more <img src={arrow3} alt="arrow" /></span>
        </div>
    </div>
    </div>
  )
}
