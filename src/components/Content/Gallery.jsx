import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import PreviewImages from './PreviewImages'
import galleryContext from '@/context/gallery/galleryContext'
import ImageMasonry from './ImageMasonry'

const Gallery = () => {

    const { gallery, fetchGalleryDocuments } = useContext(galleryContext)

    const [showMore, setShowMore] = useState(false);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center"]
    });

    useEffect(() => {
        if (gallery.length === 0)
            fetchGalleryDocuments()
    }, [])

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
                    {gallery.map((collection, index) => (
                        showMore ?
                            <motion.div
                                key={index}
                                className="previewImageContainer">
                                <PreviewImages images={collection.images} setShowMore={setShowMore} />
                            </motion.div>
                            :
                            <ImageMasonry key={index} imageUrl={collection.images} date={collection.date} description={collection.description} setShowMore={setShowMore} showMore={showMore} />

                    ))}
                </div>
            </div>
        </>

    )
}

export default Gallery