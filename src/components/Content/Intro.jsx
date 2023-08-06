import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGlitch } from 'react-powerglitch'
import Lottie from 'lottie-react'
import scrollDown from '@/assets/animations/scrollDown'
import { motion } from 'framer-motion'
import Typed from 'typed.js';
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'

const Intro = () => {
  const glitch = useGlitch();
  const el = useRef(null);
  const el2 = useRef(null);
  const MouseVariantsContext = useContext(mouseVariantsContext);
  const { textEnter, textLeave } = MouseVariantsContext;

  const handlescrollAnimation = () => {
    console.log('complete')
  }

  useEffect(() => {
    if (el.current == null) return;
    const typed = new Typed(el.current, {
      strings: ['Hi,I am'],
      typeSpeed: 30,
    });

    if (el2.current == null) return;
    const typed2 = new Typed(el2.current, {
      strings: ['19 y/o Full-Stack Developer from India.'],
      typeSpeed: 30,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <>
      <div className="intro bg-black h-screen flex items-center justify-center overflow-hidden">
        {/* <div className='h-1/2 w-1/4 bg-black animate-moveX -translate-x-80'>
                    <Lottie animationData={walkingPerson} style={{ width: '100%', height: '100%' }} />
                </div> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
          className="introText flex flex-col relative px-2 md:px-0 -top-10 items-center justify-center space-y-8">

          <h1 ref={el} onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-2xl md:text-4xl mix-blend-difference text-[#58ff13] lg:px-40 font-firaCode text-center font-bold typed-text"></h1>

          <p ref={glitch.ref} onMouseEnter={textEnter} onMouseLeave={textLeave} className='name text-4xl mix-blend-difference lg:text-8xl font-extrabold text-[#58ff13] font-firaCode'>Vishal Chaurasia</p>

          <p ref={el2} onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-2xl mix-blend-difference md:text-4xl text-[#58ff13] lg:px-40 font-firaCode text-center font-bold typed-text" ></p>

        </motion.div>

        <div className='h-10 bg-black absolute bottom-20 cursor-pointer'>
          <Lottie
            onComplete={handlescrollAnimation}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            animationData={scrollDown} />
        </div>
      </div>
    </>
  )
}

export default Intro

