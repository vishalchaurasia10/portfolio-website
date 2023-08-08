import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({ reference }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    });
    return (
        <figure className='absolute -left-[5.4rem] stroke-white'>
            <svg width={75} height={75} viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-[#57E6D9] fill-none stroke-1' />
                <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-black'
                    style={{
                        pathLength: scrollYProgress
                    }} />
                <circle cx="75" cy="50" r="10" className='stroke-1 animate-pulse fill-[#57E6D9]' />
            </svg>
        </figure>
    )
}

export default LiIcon
