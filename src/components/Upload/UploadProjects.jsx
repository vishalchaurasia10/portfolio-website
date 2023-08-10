import React, { useContext, useEffect, useState } from 'react'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import { Client, Databases, ID, Storage } from 'appwrite';
import toast, { Toaster } from 'react-hot-toast';

const UploadProjects = () => {
    const { buttonEnter, textLeave } = useContext(mouseVariantsContext)
    const [imagesUrl, setImagesUrl] = useState([])
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


    const handleUpload = async () => {
        try {
            const client = new Client()
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

            const storage = new Storage(client);

            const uploadedFiles = await Promise.all(projectDetails.images.map(async (imageFile) => {
                const result = await storage.createFile(
                    process.env.NEXT_PUBLIC_BUCKET_ID,
                    ID.unique(),
                    imageFile,
                );
                return result.$id;
            }));

            toast.promise(
                Promise.resolve(uploadedFiles), // Use `Promise.resolve` to create a resolved promise with the uploadedFiles array
                {
                    success: () => 'Images successfully uploaded!',
                    error: () => 'Error uploading images.',
                    duration: 3000,
                    position: 'top-center',
                }
            );

            const uploadedFileUrls = uploadedFiles.map((fileId) =>
                storage.getFileView(process.env.NEXT_PUBLIC_BUCKET_ID, fileId)
            );

            setImagesUrl([...imagesUrl, ...uploadedFileUrls]);
            console.log(imagesUrl);

        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (imagesUrl.length > 0) {
            handleSubmit();
        }
    }, [imagesUrl]);

    const handleSubmit = async (e) => {
        try {
            const client = new Client()
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

            const databases = new Databases(client);
            const result = await databases.createDocument(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID,
                ID.unique(),
                {
                    ...projectDetails,
                    images: imagesUrl,
                },
            );

            toast.promise(
                Promise.resolve(result), // Use `Promise.resolve` to create a resolved promise with the fileId
                {
                    success: () => 'Project successfully uploaded!',
                    error: () => 'Error uploading project.',
                    duration: 3000,
                    position: 'top-center',
                }
            );

            console.log(result);

        } catch (error) {
            toast.error(error.message);
        }
    };

    function formatDate(inputDate) {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const [year, month, day] = inputDate.split('-');
        const formattedDate = `${months[parseInt(month, 10) - 1]}, ${year}`;

        return formattedDate;
    }


    return (
        <>
            <Toaster />
            <div className='projects flex flex-col items-center justify-center space-y-3 mt-4'>
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
                <input onChange={handleChange} className='w-full rounded-lg outline-none' name='images' type="file" multiple />
                <div className="upload w-full">
                    <button onClick={handleUpload} onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='bg-white text-black my-2 px-4 py-2 rounded-md'>Upload</button>
                </div>
            </div>
        </>
    )
}

export default UploadProjects
