import React, { useContext, useState } from 'react'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import UploadProjects from './UploadProjects'
import UploadPhotos from './UploadPhotos'

const UploadProjectDetails = () => {
    const { buttonEnter, textLeave } = useContext(mouseVariantsContext)
    const [uploadType, setUploadType] = useState('projects')
    return (
        <div className="wrapper flex items-center justify-center w-full pt-28 pb-20 md:pt-40 lg:pt-32 px-3">
            <div className="upload font-firaCode text-white border border-white lg:w-1/2 rounded-2xl p-6 md:p-8">
                <div className="heading flex items-center">
                    <h1 className='text-6xl md:text-7xl mb-6 mt-2 font-extrabold text-[#57E6D9] capitalize'>upload {uploadType}</h1>
                </div>
                <div className="buttons mb-6">
                    <ul className='flex items-center space-x-4'>
                        <li className=''>
                            <button onClick={() => { setUploadType('projects') }} onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='bg-white text-black px-4 py-2 rounded-md'>Projects</button>
                        </li>
                        <li className=''>
                            <button onClick={() => { setUploadType('photos') }} onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='bg-white text-black px-4 py-2 rounded-md'>Photos</button>
                        </li>
                    </ul>
                </div>
                <div className="uploadContent">
                    {uploadType === 'projects' ? < UploadProjects /> : <UploadPhotos />}
                </div>
            </div>
        </div>
    )
}

export default UploadProjectDetails