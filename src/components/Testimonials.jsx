import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContextAPI';
import Bubble from './svg/Bubble';
import { testimonials } from '../data';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'framer-motion';

export default function Testimonials() {
  let [ref, { width }] = useMeasure(); //this hook helps measure the dimension of referenced elemnent
  const x = useMotionValue(0); //this hook is used to create a motion value which are special variables provided by FM that can be animated
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 3; //This calculation positions the element partially outside the visible area to create an animation effect where the testimonials move from off-screen to on-screen.

    controls = animate(x,  finalPosition, //This line animates the x motion value from 0 to finalPosition.
       {
      ease: 'linear',
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    });
    return controls.stop; //clean up function to prevent memory leaks and optimize perfomance
  }, [x, width]);
  const { theme } = useContext(ThemeContext);
  return (
    <div className=' overflow-hidden'>
      <div className='flex items-center gap-6 w-full mt-24 max-sm:flex-col max-sm:text-center'>
        <span className={`p-1 bg-[#B9FF66] text-3xl font-semibold rounded-lg ${theme === "dark" ? "text-black" : 'text-black'}`}>Testimonials</span>
        <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>
      <motion.div className='flex gap-3 mt-14 min-h-[25rem] min-w-fit ' 
      ref={ref}
        style={{ x}}>
        {
          testimonials.map((testimony, index) => {
            return <Bubble key={index} testimony={testimony} />

          })
        }
      </motion.div>
    </div>
  )
}
