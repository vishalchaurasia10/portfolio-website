import CustomHead from '@/components/Layout/CustomHead'
import UploadProjectDetails from '@/components/Upload/UploadProjectDetails'
import React from 'react'

const uploads = () => {
    return (
        <>
            <CustomHead title='Uploads - Vishal Chaurasia' description='I will upload projects here.' />
            <UploadProjectDetails />
        </>
    )
}

export default uploads

