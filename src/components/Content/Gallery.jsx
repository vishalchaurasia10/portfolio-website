import React, { useEffect, useRef, useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { motion, useScroll } from 'framer-motion'
import PreviewImages from './PreviewImages'

const Gallery = () => {
    const images = [
        'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
    ]

    const [showMore, setShowMore] = useState(false);
    const [width, setWidth] = useState(0);
    const [lastImageHeight, setLastImageHeight] = useState('');
    let visibleImages = images;

    if (width < 1000) {
        if (images.length > 4) {
            visibleImages = showMore ? images : images.slice(0, 3);
        }
    } else {
        if (images.length > 6) {
            visibleImages = showMore ? images : images.slice(0, 5);
        }
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center"]
    });

    useEffect(() => {
        const lastColumnLastImage = document.getElementsByClassName('moreImages')[0].previousElementSibling.firstChild.lastChild.lastChild
        const lastColumn = document.getElementsByClassName('moreImages')[0].previousElementSibling.firstChild.lastChild
        if ((lastColumn.offsetHeight - lastColumnLastImage.offsetHeight - 10) >= 60)
            setLastImageHeight(`${lastColumn.offsetHeight - lastColumnLastImage.offsetHeight - 10}px`)
        else
            setLastImageHeight('100%')
    }, [lastImageHeight])

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="container font-firaCode px-5 pb-32 md:w-full md:mx-auto">
                <div className="heading pt-16 flex items-center mb-12 space-x-4">
                    <h1 className='text-5xl md:text-7xl my-8 font-extrabold text-[#57E6D9]'>Gallery</h1>
                    {/* <div className="line rounded-full w-3/4 h-1 bg-[#57E6D9]"></div> */}
                </div>
                <div ref={ref} className="points w-[80%] mx-auto relative">
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="line absolute transition-all duration-300 rounded-full -left-6 top-0 w-1 h-full bg-[#57E6D9] origin-top">
                    </motion.div>
                    {showMore ?
                        <motion.div
                            className="previewImageContainer">
                            <PreviewImages images={images} setShowMore={setShowMore} />
                        </motion.div>
                        :
                        <div onClick={() => { setShowMore(true) }} className="contentGallery ml-2 md:ml-6 lg:ml-10 text-white">
                            <p className='text-[#57E6D9] text-sm md:text-lg mb-2'>August 12,2023</p>
                            <h3 className='mb-4 md:text-lg'>Hackathon at BSIT,Bangalore</h3>
                            <div className="gallery mx-auto relative">
                                <ResponsiveMasonry
                                    columnsCountBreakPoints={{ 350: 2, 750: 2, 1000: 3 }}
                                >
                                    <Masonry gutter='10px'>
                                        {visibleImages.map((image, i) => (
                                            <img
                                                className='rounded-lg md:rounded-2xl'
                                                key={i}
                                                src={image}
                                                style={{ width: "100%", display: "block" }}
                                                alt=""
                                            />
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                                <div className="moreImages">
                                    {width < 1000 ?
                                        (images.length > 4 &&
                                            <div
                                                style={{ height: `${lastImageHeight}` }}
                                                className={`w-[49%] lg:w-[32.4%] bg-[rgba(255,255,255,0.1)] absolute bottom-0 right-0 rounded-2xl flex items-center justify-center`}>
                                                <div className='text-3xl md:text-6xl'>
                                                    +{images.length - 3}
                                                </div>
                                            </div>
                                        ) :
                                        (images.length > 6 && <div style={{ height: `${lastImageHeight}` }} className={`moreImages w-[49%] lg:w-[32.4%] bg-[rgba(255,255,255,0.1)] absolute bottom-0 right-0 rounded-2xl flex items-center justify-center`}>
                                            <div className='text-3xl md:text-6xl'>
                                                +{images.length - 5}
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>}
                    {showMore ?
                        <motion.div
                            className="previewImageContainer">
                            <PreviewImages images={images} setShowMore={setShowMore} />
                        </motion.div>
                        :
                        <div onClick={() => { setShowMore(true) }} className="contentGallery ml-2 md:ml-6 lg:ml-10 text-white">
                            <p className='text-[#57E6D9] text-sm md:text-lg mb-2'>August 12,2023</p>
                            <h3 className='mb-4 md:text-lg'>Hackathon at BSIT,Bangalore</h3>
                            <div className="gallery mx-auto relative">
                                <ResponsiveMasonry
                                    columnsCountBreakPoints={{ 350: 2, 750: 2, 1000: 3 }}
                                >
                                    <Masonry gutter='10px'>
                                        {visibleImages.map((image, i) => (
                                            <img
                                                className='rounded-lg md:rounded-2xl'
                                                key={i}
                                                src={image}
                                                style={{ width: "100%", display: "block" }}
                                                alt=""
                                            />
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                                <div className="moreImages">
                                    {width < 1000 ?
                                        (images.length > 4 &&
                                            <div
                                                style={{ height: `${lastImageHeight}` }}
                                                className={`w-[49%] lg:w-[32.4%] bg-[rgba(255,255,255,0.1)] absolute bottom-0 right-0 rounded-2xl flex items-center justify-center`}>
                                                <div className='text-3xl md:text-6xl'>
                                                    +{images.length - 3}
                                                </div>
                                            </div>
                                        ) :
                                        (images.length > 6 && <div style={{ height: `${lastImageHeight}` }} className={`moreImages w-[49%] lg:w-[32.4%] bg-[rgba(255,255,255,0.1)] absolute bottom-0 right-0 rounded-2xl flex items-center justify-center`}>
                                            <div className='text-3xl md:text-6xl'>
                                                +{images.length - 5}
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </>

    )
}

export default Gallery


{/* <div
                            style={{ height: `${lastImageHeight}` }}
                            className={`moreImages w-[49%] lg:w-[32.4%] bg-[rgba(255,255,255,0.1)] absolute bottom-0 right-0 rounded-2xl flex items-center justify-center`}>
                            {width < 1000 ?
                                (images.length > 4 &&
                                    <div className='text-3xl md:text-6xl'>
                                        +{images.length - 3}
                                    </div>)
                                :
                                (images.length > 6 &&
                                    <div className='text-3xl md:text-6xl'>
                                        +{images.length - 5}
                                    </div>)
                            }
                        </div> */}