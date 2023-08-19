import React from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = () => {

    const router = useRouter()

    return (
        <>
            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: '0%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-white' />
            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-[49] bg-black' />
            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: '0%' }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
                className={`fixed top-0 bottom-0 right-full w-screen h-screen z-[48] ${router.pathname == '/' ? 'bg-[#6ec93f]' : 'bg-[#81e3d9]'}`} />
        </>
    )
}

export default Transition