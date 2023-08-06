import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaGithub } from 'react-icons/fa'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'

const ProjectCard = () => {
    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { buttonEnter, textLeave } = MouseVariantsContext;
    return (

        <div className="wrapper relative lg:w-[25rem] xl:w-[24rem] mb-8 md:mb-16 lg:mr-7 xl:mr-7">

            <div className='absolute top-0 -right-3 z-0 w-[101%] h-[102.5%] rounded-[2rem] bg-[#E5E5E5]' />
            <div className="projectCard relative z-10 bg-black font-firaCode space-y-4 md:space-y-5 border border-white w-full rounded-[2rem] p-5 md:p-7 text-[#E5E5E5]">

                <div className="slider">
                    <Link href="/projects/1">
                        <img className='w-full md:h-56 rounded-2xl' src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="Project 1" width={300} height={200} />
                    </Link>
                </div>

                <div className="content flex flex-col space-y-[0.3rem] md:space-y-4">
                    <div className="time flex justify-between items-center">
                        <span className='text-lg md:text-xl text-[#57E6D9]'>Website</span>
                        <span className='text-sm'>Aug,2023 - Sept,2023</span>
                    </div>
                    <Link onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='text-2xl md:text-3xl font-extrabold' href='/'>Cloud-Scribe</Link>
                    <p className="description text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iure.</p>
                    <div className="visitingLinks py-3 md:py-0 flex space-x-4">
                        <button onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='bg-white text-black px-4 rounded-md'>Visit</button>
                        <FaGithub onMouseEnter={buttonEnter} onMouseLeave={textLeave} className="github w-8 h-8" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard