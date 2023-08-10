import { useEffect, useState } from "react";
import GalleryContext from "./galleryContext";
import { Client, Databases, ID, Storage } from 'appwrite';
import toast, { Toaster } from 'react-hot-toast';

const GalleryState = (props) => {

    const [gallery, setGallery] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([])
    const [galleryDetails, setGalleryDetails] = useState({
        date: '',
        description: '',
        images: []
    })

    const uploadPhotos = async (galleryDetails) => {
        setGalleryDetails(galleryDetails);
        try {
            const client = new Client()
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

            const storage = new Storage(client);

            const uploadedFiles = await Promise.all(galleryDetails.images.map(async (imageFile) => {
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
            uploadPhotoDocument();
        }
    }, [imagesUrl]);

    const uploadPhotoDocument = async () => {
        try {
            const client = new Client()
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

            const databases = new Databases(client);
            const result = await databases.createDocument(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_GALLERY_COLLECTION_ID,
                ID.unique(),
                {
                    ...galleryDetails,
                    images: imagesUrl,
                },
            );

            toast.promise(
                Promise.resolve(result), // Use `Promise.resolve` to create a resolved promise with the fileId
                {
                    success: () => 'Document successfully uploaded!',
                    error: () => 'Error uploading document.',
                    duration: 3000,
                    position: 'top-center',
                }
            );

            console.log(result);

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <GalleryContext.Provider value={{ gallery, setGallery, uploadPhotos }}>
            <Toaster />
            {props.children}
        </GalleryContext.Provider>
    )

}

export default GalleryState;