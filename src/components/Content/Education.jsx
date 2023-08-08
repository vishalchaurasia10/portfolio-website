import React, { useContext, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from '../Layout/LiIcon';
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext';

const ListComponent = ({ title, college, time, description }) => {
    const ref = useRef(null);
    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { buttonEnter, textLeave } = MouseVariantsContext;

    return (
        <li id='1' ref={ref} className='text-white flex flex-col'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="wrapper">
                <h1 onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='text-2xl md:text-4xl mb-3 font-extrabold'>{title}</h1>
                <h2 className='text-lg md:text-3xl mb-1 text-gray-400 font-bold'>{college}</h2>
                <h3 className='text-base md:text-2xl text-gray-400 mb-4'>{time}</h3>
                <p>{description}</p>
            </motion.div>
        </li>
    )
}


const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center"]
    });

    return (
        <>
            <div className="container font-firaCode px-5 pb-32 md:w-full md:mx-auto">
                <div className="heading flex items-center mb-12 space-x-4">
                    <h1 className='text-5xl md:text-7xl my-8 font-extrabold text-[#57E6D9]'>Education</h1>
                    <div className="line rounded-full w-3/4 h-1 bg-[#57E6D9]"></div>
                </div>
                <div ref={ref} className="points w-3/4 mx-auto relative">
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="line absolute transition-all duration-100 rounded-full -left-8 top-0 w-1 h-full bg-[#57E6D9] origin-top"></motion.div>
                    <div className="content ml-2 md:ml-6 lg:ml-10">
                        <ul className='flex flex-col space-y-20'>
                            <ListComponent
                                title="B.Tech in Computer Science and Engineering"
                                college="M.S. Ramaiah Institute of Technology,Bangalore"
                                time="2021 - 2025"
                                description="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence" />
                            <ListComponent
                                title="10+2"
                                college="New Public School,Lucknow"
                                time="2007 - 2021"
                                description="Learnt basics of Programming and useful things" />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
