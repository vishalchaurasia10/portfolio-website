import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import { motion } from 'framer-motion'
import SimpleImageSlider from "react-simple-image-slider";

const ProjectCard = ({ elementKey, imageUrl, name, repoUrl, deployUrl, startDate, endDate, description, type }) => {
    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { buttonEnter, textLeave } = MouseVariantsContext;

    useEffect(() => {
        const handleSliderMount = () => {
            const rsisImage = document.getElementsByClassName('rsis-container');
            Array.from(rsisImage).forEach(child => {
                if (child) {
                    const parentElement = child.parentElement;
                    const grandParentElement = parentElement.parentElement;
                    grandParentElement.style.position = 'relative';
                    grandParentElement.style.width = '100%';
                    parentElement.style.width = '100%';
                    parentElement.style.borderRadius = '1rem';
                }
            });
        };

        handleSliderMount();
    }, [])

    return (

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            key={elementKey}
            className="wrapper relative w-full lg:w-[25rem] xl:w-[24rem] mb-8 md:mb-16 lg:mr-7 xl:mr-7">

            <div className='absolute top-0 -right-3 z-0 w-[101%] h-[102.5%] rounded-[2rem] bg-slate-400' />
            <div className="projectCard relative z-10 bg-black font-firaCode space-y-4 md:space-y-5 border border-white w-full rounded-[2rem] p-5 md:p-7 text-[#E5E5E5]">

                <div className="slider rounded-2xl w-full">
                    <SimpleImageSlider
                        width={300}
                        height={200}
                        images={imageUrl}
                        autoPlay={true}
                        loop={true}
                    />
                </div>

                <div className="content flex flex-col space-y-[0.3rem] md:space-y-4">
                    <div className="time flex justify-between items-center">
                        <span className='text-lg md:text-xl text-[#57E6D9] capitalize'>{type}</span>
                        <span className='text-sm'>{startDate} - {endDate}</span>
                    </div>
                    <Link onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='text-2xl capitalize md:text-3xl font-extrabold' href='/'>{name}</Link>
                    <p className="description text-justify capitalize">{description}</p>
                    <div className="visitingLinks py-3 md:py-0 flex space-x-4">
                        <Link href={deployUrl} target='_blank' >
                            <button onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='bg-white text-black px-4 rounded-md py-1'>Visit</button>
                        </Link>
                        <Link href={repoUrl} target='_blank' >
                            <FaGithub onMouseEnter={buttonEnter} onMouseLeave={textLeave} className="github w-8 h-8" />
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default ProjectCard