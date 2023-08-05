import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import githubLogo from '@assets/animations/githubLogo'
import Image from 'next/image'

const Navbar = () => {

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.5 }}
                className='fixed top-0 left-0 w-full flex justify-center font-firaCode text-xl bg-black'>
                <div className="left w-1/4 items-center border border-white">
                    <Image className='h-5 w-5' src='/assets/images/portfolioLogo.jpg' width={100} height={100} alt='Logo' />
                </div>

                <div className="center w-1/2 pt-4 flex items-center justify-center">
                    <ul className='flex text-[#58ff13] space-x-8 rounded-full py-2 px-10 border-2 border-[#58ff13]'>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About Me</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div className="right flex justify-end items-center w-1/4 pr-8">
                    <div className="logoWrapper h-8 w-8">
                        <Lottie animationData={githubLogo} />
                    </div>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar
