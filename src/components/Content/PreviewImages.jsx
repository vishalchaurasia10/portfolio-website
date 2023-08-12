import React, { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { EffectCreative, Keyboard } from 'swiper';
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext';


const PreviewImages = ({ images, setShowMore }) => {

    const {textLeave, navbarSmallEnter} = useContext(mouseVariantsContext);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 27) {
                setShowMore(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setShowMore]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[30] bg-black'
            >
                <AiFillCloseCircle onClick={() => { setShowMore(false) }} onMouseEnter={navbarSmallEnter} onMouseLeave={textLeave} className='absolute z-[29] right-4 top-20 md:top-32 md:right-8 text-3xl md:text-4xl text-white cursor-pointer' />
                <div className="wrapper overflow-hidden flex items-center justify-center bg-black">
                    <Swiper className='mySwiper lg:w-1/2 h-fit rounded-lg shadow-[#382b16]'
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}
                        modules={[EffectCreative, Keyboard]}
                    >
                        {images.map((image, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="img bg-black h-screen flex items-center">
                                        <img className='rounded-lg w-full' src={image} alt={index} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </motion.div>
        </>
    )
}

export default PreviewImages