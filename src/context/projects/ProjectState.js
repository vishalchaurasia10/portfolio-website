import { useEffect, useState } from "react";
import ProjectContext from "./projectContext";
import { Client, Databases, ID, Storage } from "appwrite";
import { Toaster, toast } from "react-hot-toast";

const ProjectState = (props) => {

    const [projects, setProjects] = useState([]);
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

    const uploadProjectImages = async (projectDetails) => {
        setProjectDetails(projectDetails);
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
            uploadProjectDocument();
        }
    }, [imagesUrl]);

    const uploadProjectDocument = async () => {
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

    const fetchProjects = async () => {
        try {
            const client = new Client()
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

            const databases = new Databases(client);

            const result = await databases.listDocuments(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID,
            );

            setProjects(result.documents);
        } catch (error) {
            toast.error(error.message);
        }
    }


    return (
        <ProjectContext.Provider value={{ projects, fetchProjects, uploadProjectImages }}>
            <Toaster />
            {props.children}
        </ProjectContext.Provider>
    )

}

export default ProjectState;