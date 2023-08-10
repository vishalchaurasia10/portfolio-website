import React, { useContext, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import projectContext from '@/context/projects/projectContext'

const Projects = () => {
    const ProjectsContext = useContext(projectContext)
    const { projects, fetchProjects } = ProjectsContext

    useEffect(() => {
        if (projects.length === 0) {
            fetchProjects()
        }
    }, [])

    useEffect(() => {
        console.log(projects)
    }, [projects])

    return (
        <>
            <div className='pt-24 px-4 py-8 md:px-32 lg:px-[4.5rem] xl:px-28 bg-black'>
                <h1 className='text-6xl md:text-7xl mb-10 font-extrabold font-firaCode tracking-tighter text-[#57E6D9]'>Projects</h1>
                <div className="projects flex flex-wrap mr-4 md:mr-0">
                    {projects.map(project => (
                        <ProjectCard key={project.$id} elementKey={project.$createdAt} imageUrl={project.images} name={project.name} repoUrl={project.repoUrl} deployUrl={project.deployUrl} startDate={project.startDate} endDate={project.endDate} description={project.description} type={project.type}/>
                    ))}
                    {projects.map(project => (
                        <ProjectCard key={project.$id} elementKey={project.$createdAt} imageUrl={project.images} name={project.name} repoUrl={project.repoUrl} deployUrl={project.deployUrl} startDate={project.startDate} endDate={project.endDate} description={project.description} type={project.type}/>
                    ))}
                    {projects.map(project => (
                        <ProjectCard key={project.$id} elementKey={project.$createdAt} imageUrl={project.images} name={project.name} repoUrl={project.repoUrl} deployUrl={project.deployUrl} startDate={project.startDate} endDate={project.endDate} description={project.description} type={project.type}/>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Projects
