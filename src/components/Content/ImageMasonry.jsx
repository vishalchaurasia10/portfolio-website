import React, { useContext, useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { motion } from 'framer-motion'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import PreviewImages from './PreviewImages'
import Image from 'next/image'

const ImageMasonry = ({ imageUrl, date, description, setShowMore, showMore }) => {

    const [width, setWidth] = useState(0);
    const [lastImageHeight, setLastImageHeight] = useState('');
    const [visibleImages, setVisibleImages] = useState(imageUrl);
    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { importantEnter, buttonEnter, textLeave } = MouseVariantsContext;
    console.log(visibleImages)

    useEffect(() => {
        if (width < 1000) {
            setVisibleImages(showMore ? imageUrl : imageUrl.slice(0, 3));
        } else {
            setVisibleImages(showMore ? imageUrl : imageUrl.slice(0, 5));
        }
    }, [showMore, width, imageUrl]);

    const handleImageLoad = () => {
        const lastColumnLastImage = document.getElementsByClassName('moreImages')[0].previousElementSibling.firstChild.lastChild.lastChild;
        const lastColumn = document.getElementsByClassName('moreImages')[0].previousElementSibling.firstChild.lastChild;
        if (lastColumnLastImage == null) return;
        if ((lastColumn.offsetHeight - lastColumnLastImage.offsetHeight - 10) >= 60) {
            setLastImageHeight(`${lastColumn.offsetHeight - lastColumnLastImage.offsetHeight - 10}px`);
        } else {
            setLastImageHeight('100%');
        }
    };

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                onClick={() => { setShowMore(true) }} className="contentGallery ml-2 mb-24 md:mb-32 md:ml-6 lg:ml-10 text-white">
                <p onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='text-[#57E6D9] text-sm md:text-lg mb-2'>{date}</p>
                <h3 className='mb-4 md:text-lg capitalize'>{description}</h3>
                <div className="gallery mx-auto relative">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 2, 750: 2, 1000: 3 }}
                    >
                        <Masonry gutter='10px'>
                            {visibleImages.map((image, i) => (
                                <Image
                                    onLoad={() => !showMore && handleImageLoad()}
                                    onMouseEnter={importantEnter}
                                    onMouseLeave={textLeave}
                                    className='rounded-lg md:rounded-2xl'
                                    width={200}
                                    height={200}
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
                            (imageUrl.length > 4 &&
                                <div
                                    style={{ height: `${lastImageHeight}` }}
                                    className={`w-[49%] lg:w-[32.4%] bg-[rgba(255,255,255,0.1)] absolute bottom-0 right-0 rounded-2xl flex items-center justify-center`}>
                                    <div className='text-3xl md:text-6xl'>
                                        +{imageUrl.length - 3}
                                    </div>
                                </div>
                            ) :
                            (imageUrl.length > 6 && <div style={{ height: `${lastImageHeight}` }} className={`moreImages w-[49%] lg:w-[32.4%] bg-[rgba(255,255,255,0.1)] absolute bottom-0 right-0 rounded-2xl flex items-center justify-center`}>
                                <div className='text-3xl md:text-6xl'>
                                    +{imageUrl.length - 5}
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </motion.div>
            {showMore &&
                <PreviewImages images={imageUrl} setShowMore={setShowMore} />
            }
        </>
    )
}

export default ImageMasonry
