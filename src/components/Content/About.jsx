import Image from 'next/image'
import React, { useContext } from 'react'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import Lottie from 'lottie-react'
import scrollDown from '@/assets/animations/scrollDown'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const About = () => {
    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { importantEnter, textEnter, textLeave } = MouseVariantsContext;
    const startDate = new Date(2003, 9); // Month is zero-based, so 9 represents October
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    return (
        <>
            <div className="container overflow-hidden relative mb-10 md:mb-8 lg:-mb-2 pt-20 md:pt-28 px-5 md:w-fit md:mx-auto md:space-x-10 lg:space-x-20 font-firaCode flex flex-col md:flex-row">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="content md:w-1/2 lg:w-[62%] flex flex-col xl:relative xl:top-16 space-y-4 order-2 md:order-1 text-white text-md lg:text-xl text-justify">
                    <p>
                        Hello there! I&apos;m <strong onMouseEnter={importantEnter} onMouseLeave={textLeave} className='text-[#57E6D9]'> Vishal Chaurasia</strong>, a passionate and enthusiastic {Math.floor(totalMonths / 12)}-year-old <strong onMouseEnter={importantEnter} onMouseLeave={textLeave} className='text-[#57E6D9]'> Full-Stack Developer</strong> from India.
                    </p>
                    <p>
                        I believe in the power of continuous learning and always stay up-to-date with the latest trends in web development.
                    </p>
                    <p>
                        Apart from coding, I am also passionate about design and creativity. I enjoy exploring the intersection of art and technology to create visually stunning and engaging user experiences.
                    </p>
                    <p>
                        Feel free to explore my portfolio and get in touch if you&apos;d like to collaborate or just say hello.<strong onMouseEnter={importantEnter} onMouseLeave={textLeave} className='text-[#57E6D9]'> Let&apos;s create something amazing together!</strong>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="image w-fit md:w-1/2 lg:w-[30%] relative mr-2 mb-16 order-1 md:order-2">
                    <div className='absolute shadow-2xl shadow-slate-500 top-0 -right-3 z-0 w-[101%] h-[102.5%] rounded-[2rem] bg-slate-500' />
                    <Image onMouseEnter={importantEnter} onMouseLeave={textLeave} className='rounded-3xl relative z-10' src="/assets/images/vc.jpg" alt="Picture of the author" width={500} height={500} />
                </motion.div>
            </div>
            <div className='hidden md:flex mb-10 items-center justify-center  bg-black cursor-pointer'>
                <Link to='skills' smooth={true} duration={1000}>
                    <Lottie
                        className='w-16 h-16'
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        animationData={scrollDown} />
                </Link>
            </div>

        </>
    )
}

export default About
