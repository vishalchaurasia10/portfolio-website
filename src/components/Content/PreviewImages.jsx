import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { EffectCreative, Keyboard } from 'swiper';
import { FaTimesCircle } from 'react-icons/fa';


const PreviewImages = ({ images, setShowMore }) => {

    return (
        <>
            <FaTimesCircle onClick={() => { setShowMore(false) }} className='absolute z-40 top-32 right-0 text-3xl text-white cursor-pointer' />
            <div className="wrapper h-screen overflow-hidden flex items-center justify-center bg-black">
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
                                <div className="img md:h-screen bg-black flex items-center">
                                    <img className='rounded-lg w-full' src={image} alt={index} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default PreviewImages