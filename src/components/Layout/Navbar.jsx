import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsFilePdfFill } from 'react-icons/bs';
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import { useRouter } from 'next/router'

const Navbar = () => {

    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { navbarEnter, navbarSmallEnter, textLeave } = MouseVariantsContext;
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Function to check screen size
        function checkScreenSize() {
            setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
        }

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Initial check on component mount
        checkScreenSize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.5 }}
                className='fixed top-0 left-0 z-40 w-full py-4 flex justify-center items-center font-firaCode text-xl bg-black'>
                <div className="left w-1/2 md:w-1/4 pl-4 md:pl-8 flex items-center">
                    <Link onMouseEnter={navbarSmallEnter} onMouseLeave={textLeave} href='/'>
                        <Image className='h-8 w-8 relative md:-top-2 rounded-full' src='/assets/images/portfolioLogo.jpg' width={100} height={100} alt='Logo' />
                    </Link>
                </div>

                <div className="center hidden md:flex w-1/2 items-center justify-center">
                    <ul className={`flex space-x-8 rounded-full py-2 px-10 border-2 ${router.pathname === '/' ? 'border-[#58ff13] text-[#58ff13]' : 'border-[#57E6D9] text-[#57E6D9]'} `}>
                        <li onMouseEnter={navbarEnter} onMouseLeave={textLeave} className='whitespace-nowrap'>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li onMouseEnter={navbarEnter} onMouseLeave={textLeave} className='whitespace-nowrap'>
                            <Link href='/aboutme'>
                                About Me
                            </Link>
                        </li>
                        <li onMouseEnter={navbarEnter} onMouseLeave={textLeave} className='whitespace-nowrap'>
                            <Link href='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li onMouseEnter={navbarEnter} onMouseLeave={textLeave} className='whitespace-nowrap'>
                            <Link href='/gallery'>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="right md:relative flex justify-end items-center w-1/2 md:w-1/4 pr-4 lg:pr-8">
                    <div className="logoWrapper hidden lg:flex items-center space-x-2 lg:space-x-6 justify-end">
                        <li className="flex items-center">
                            <Link className={`${router.pathname === '/' ? 'text-[#58ff13]' : 'text-[#57E6D9]'}`} target='_blank' href='https://cloud.appwrite.io/v1/storage/buckets/64d5270341acdb0cc1ff/files/66a3fe20001b2f9ddbc2/view?project=64cf576f77d32036391f'>
                                <BsFilePdfFill title='View Resume' onMouseEnter={navbarSmallEnter} onMouseLeave={textLeave} className='text-2xl lg:text-3xl' />
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link target='_blank' href='https://github.com/vishalchaurasia10'>
                                <FaGithub onMouseEnter={navbarSmallEnter} onMouseLeave={textLeave} className='text-2xl lg:text-3xl text-white' />
                            </Link>
                        </li>
                        <li className='flex items-center'>
                            <Link target='_blank' href='https://twitter.com/vishalstwt'>
                                <FaTwitter onMouseEnter={navbarSmallEnter} onMouseLeave={textLeave} className='text-2xl lg:text-3xl text-white' />
                            </Link>
                        </li>
                        <li className='flex items-center'>
                            <Link target='_blank' href='https://www.linkedin.com/in/vishalchaurasia10/'>
                                <FaLinkedin onMouseEnter={navbarSmallEnter} onMouseLeave={textLeave} className='text-2xl lg:text-3xl text-white' />
                            </Link>
                        </li>
                    </div>
                    <div className="hamburger lg:hidden flex flex-col space-y-1" onClick={handleHamburgerClick}>
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
                <div onClick={() => setIsOpen(false)} className={`wrapper lg:hidden overflow-hidden ${isOpen ? 'backdrop-blur-md' : 'hidden'} transition-all duration-300 fixed z-30`}>
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{
                            x: isMobile ? (isOpen ? '40%' : '100%') : (isOpen ? '60%' : '100%'),
                            opacity: 1,
                        }}
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
                            <li className='text-xl'>
                                <Link className={`flex space-x-3 ${router.pathname === '/' ? 'text-[#58ff13]' : 'text-[#57E6D9]'}`} target='_blank' href='https://cloud.appwrite.io/v1/storage/buckets/64d5270341acdb0cc1ff/files/64f243e7444259e7d4c1/view?project=64cf576f77d32036391f&mode=admin'>
                                    <span className='tracking-wider'>Resume</span><BsFilePdfFill title='View Resume' onMouseEnter={navbarSmallEnter} onMouseLeave={textLeave} className='text-2xl lg:text-3xl' />
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