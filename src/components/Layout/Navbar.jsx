import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import githubLogo from '@/assets/animations/githubLogo'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'

const Navbar = () => {

    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { navbarEnter, textLeave } = MouseVariantsContext;
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.5 }}
                className='fixed top-0 left-0 z-40 w-full py-4 flex justify-center items-center font-firaCode text-xl bg-black'>
                <div className="left w-1/2 md:w-1/4 pl-4 md:pl-8 flex items-center">
                    <Image className='h-8 w-8 relative md:-top-2 rounded-full' src='/assets/images/portfolioLogo.jpg' width={100} height={100} alt='Logo' />
                </div>

                <div className="center hidden md:flex w-1/2 items-center justify-center">
                    <ul className='flex text-[#57E6D9] space-x-8 rounded-full py-2 px-10 border-2 border-[#57E6D9]'>
                        <li onMouseEnter={navbarEnter} onMouseLeave={textLeave} className='whitespace-nowrap'>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li onMouseEnter={navbarEnter} onMouseLeave={textLeave} className='whitespace-nowrap'>
                            <Link href='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li onMouseEnter={navbarEnter} onMouseLeave={textLeave} className='whitespace-nowrap'>
                            <Link href='/aboutme'>
                                About Me
                            </Link>
                        </li>
                        <li onMouseEnter={navbarEnter} onMouseLeave={textLeave} className='whitespace-nowrap'>
                            <Link href='/gallery'>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="right md:relative md:-top-2 flex justify-end items-center w-1/2 md:w-1/4 pr-4 md:pr-8">
                    <div className="logoWrapper flex items-center">
                        <Link className='pr-4 md:pr-0' target='_blank' href='https://github.com/vishalchaurasia10' >
                            <Lottie className='h-8 w-8 hidden md:block' animationData={githubLogo} />
                        </Link>
                    </div>
                    <div className="hamburger md:hidden flex flex-col space-y-1" onClick={handleHamburgerClick}>
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="line w-7 h-[0.2rem] bg-white rounded-full"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            transition={{ duration: 0.2 }}
                            className="line text-left w-6 h-[0.2rem] bg-white rounded-full"
                        ></motion.div>
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="line w-7 h-[0.2rem] bg-white rounded-full"
                        ></motion.div>
                    </div>
                </div>
            </motion.nav>
            {
                <div onClick={() => setIsOpen(false)} className={`wrapper md:hidden overflow-hidden ${isOpen ? 'backdrop-blur-md' : ''} transition-all duration-300 fixed z-30`}>
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: isOpen ? '40%' : '100%', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`mobileNavbar bg-black font-firaCode ${isOpen ? 'shadow-[#57E6D9] shadow-2xl' : ''} pt-24 px-10 text-white h-screen w-screen`}>
                        <ul className='flex flex-col space-y-8'>
                            <li className='text-xl'>
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                            <li className='text-xl'>
                                <Link href='/aboutme'>
                                    About Me
                                </Link>
                            </li>
                            <li className='text-xl'>
                                <Link href='/projects'>
                                    Projects
                                </Link>
                            </li>
                            <li className='text-xl'>
                                <Link href='/gallery'>
                                    Gallery
                                </Link>
                            </li>
                            <li className='text-xl'>
                                <Link className='flex space-x-3' target='_blank' href='https://github.com/vishalchaurasia10'>
                                    <span>Github</span><FaGithub className='h-6 w-6 text-white' />
                                </Link>
                            </li>
                            <li className='text-xl'>
                                <Link className='flex space-x-3' target='_blank' href='https://twitter.com/vishalstwt'>
                                    <span>Twitter</span><FaTwitter className='h-6 w-6 text-white' />
                                </Link>
                            </li>
                            <li className='text-xl'>
                                <Link className='flex space-x-3' target='_blank' href='https://www.linkedin.com/in/vishalchaurasia10/'>
                                    <span>Linkedin</span><FaLinkedin className='h-6 w-6 text-white' />
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            }

        </>
    )
}

export default Navbar


{/* <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 50, opacity: 1 }}
                    // transition={{ duration: 0.2 }}
                    className="mobile md:hidden z-30 bg-slate-400 absolute h-screen w-full flex items-center justify-center">
                    <ul className='flex z-40 h-screen w-full flex-col text-[#58ff13] space-y-5 py-8 px-10'>
                        <Link href='/'>
                            <li className='whitespace-nowrap text-5xl'>Home</li>
                        </Link>
                        <Link href='/projects'>
                            <li className='whitespace-nowrap'>Projects</li>
                        </Link>
                        <Link href='/aboutme'>
                            <li className='whitespace-nowrap'>About Me</li>
                        </Link>
                        <Link href='/gallery'>
                            <li className='whitespace-nowrap'>Gallery</li>
                        </Link>
                        <li className='flex justify-center items-center space-x-2'>
                            <Link className='pr-4 md:pr-0' target='_blank' href='https://github.com/vishalchaurasia10' >
                                <FaGithub className='h-6 w-6 text-white' />
                            </Link>
                            <Link className='pr-4 md:pr-0' target='_blank' href='https://twitter.com/vishalstwt' >
                                <FaTwitter className='h-6 w-6 text-white' />
                            </Link>
                            <Link className='pr-4 md:pr-0' target='_blank' href='https://www.linkedin.com/in/vishalchaurasia10/' >
                                <FaLinkedin className='h-6 w-6 text-white' />
                            </Link>
                        </li>
                    </ul>
                </motion.div> */}