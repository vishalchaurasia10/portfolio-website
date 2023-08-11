import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { EffectCreative, Keyboard } from 'swiper';
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'


const PreviewImages = ({ images, setShowMore }) => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <AiFillCloseCircle onClick={() => { setShowMore(false) }} className='absolute z-[29] -top-16 lg:-top-7 lg:right-4 right-0 text-3xl text-white cursor-pointer' />
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
                                    <div className="img bg-black flex items-center">
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