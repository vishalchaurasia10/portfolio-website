import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <>
            <div className='pt-24 px-4 py-8 md:px-32 lg:px-[4.5rem] xl:px-28 bg-black'>
                <h1 className='text-6xl md:text-7xl mb-8 font-extrabold font-firaCode tracking-tighter text-[#57E6D9]'>Projects</h1>
                <div className="projects flex flex-wrap mr-4 md:mr-0">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

        </>
    )
}

export default Projects
