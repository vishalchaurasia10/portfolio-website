import React, { useContext, useState } from 'react'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import { motion } from 'framer-motion';
import { formatDate } from '@/utils/formatDate';
import projectContext from '@/context/projects/projectContext';

const UploadProjects = () => {
    const { buttonEnter, textLeave } = useContext(mouseVariantsContext)
    const { uploadProjectImages } = useContext(projectContext)

    const [projectDetails, setProjectDetails] = useState({
        startDate: '',
        endDate: '',
        type: '',
        name: '',
        description: '',
        deployUrl: '',
        repoUrl: '',
        images: []
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'images') {
            // Convert FileList to an array of files
            const imageFiles = Array.from(files);
            setProjectDetails({
                ...projectDetails,
                images: imageFiles
            });
        } else if (name === 'startDate' || name === 'endDate') {
            const formattedDate = formatDate(value);
            setProjectDetails({
                ...projectDetails,
                [name]: formattedDate
            });
        } else {
            setProjectDetails({
                ...projectDetails,
                [name]: value
            });
        }
    };

    const clearForm = () => {
        setProjectDetails({
            startDate: '',
            endDate: '',
            type: '',
            name: '',
            description: '',
            deployUrl: '',
            repoUrl: '',
            images: []
        })
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='projects flex flex-col items-center justify-center space-y-4 mt-4'>
                <div className="dateType w-full flex flex-col items-center space-y-4">
                    <div className="dates md:w-full">
                        <input onChange={handleChange} className='w-[48%] mr-2 rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' name='startDate' type="date" />
                        <input onChange={handleChange} className='w-[48%] rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' name='endDate' type="date" />
                    </div>
                    <input onChange={handleChange} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="text" placeholder='Enter the type of the project' name='type' />
                </div>
                <input onChange={handleChange} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="text" placeholder='Entere the name of the project' name='name' />
                <textarea onChange={handleChange} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' name="description" id="description" placeholder='Enter the description of the project' cols="30" rows="4"></textarea>
                <input onChange={handleChange} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="url" name="deployUrl" id="deployUrl" placeholder='Enter the deployment url' />
                <input onChange={handleChange} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="url" name='repoUrl' id='repoUrl' placeholder='Enter the repository url' />
                <input onChange={handleChange} className='w-full rounded-lg outline-none py-2' name='images' type="file" multiple />
                <div className="upload w-full">
                    <button onClick={() => { uploadProjectImages(projectDetails); clearForm() }} onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='bg-white text-black my-2 px-4 py-2 rounded-md'>Upload</button>
                </div>
            </motion.div>
        </>
    )
}

export default UploadProjects
