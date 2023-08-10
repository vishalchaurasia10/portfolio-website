import React, { useContext, useState } from 'react'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import galleryContext from '@/context/gallery/galleryContext'
import formatDate from '@/utils/formatDate'
import { motion } from 'framer-motion'

const UploadPhotos = () => {
  const { buttonEnter, textLeave } = useContext(mouseVariantsContext)
  const { uploadPhotos } = useContext(galleryContext)
  const [galleryDetails, setGalleryDetails] = useState({
    date: '',
    description: '',
    images: []
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      // Convert FileList to an array of files
      const imageFiles = Array.from(files);
      setGalleryDetails({
        ...galleryDetails,
        images: imageFiles
      });
    } else if (name === 'date') {
      const formattedDate = formatDate(value);
      setGalleryDetails({
        ...galleryDetails,
        [name]: formattedDate
      });
    } else {
      setGalleryDetails({
        ...galleryDetails,
        [name]: value
      });
    }
  };

  const clearForm = () => {
    setGalleryDetails({
      date: '',
      description: '',
      images: []
    })
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="uploadPhotos flex flex-col items-center justify-center space-y-4 mt-4">
        <input onChange={handleChange} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="date" name='date' />
        <textarea onChange={handleChange} value={galleryDetails.description} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' name="description" id="description" cols="30" rows="4" />
        <input onChange={handleChange} className='w-full rounded-lg outline-none py-2' type="file" name="images" id="images" multiple />
        <div className="upload w-full">
          <button onClick={() => { uploadPhotos(galleryDetails); clearForm() }} onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='bg-white text-black my-2 px-4 py-2 rounded-md'>Upload</button>
        </div>
      </motion.div>
    </>
  )
}

export default UploadPhotos
