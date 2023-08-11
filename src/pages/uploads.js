import CustomHead from '@/components/Layout/CustomHead'
import UploadProjectDetails from '@/components/Upload/UploadProjectDetails'
import React, { useContext } from 'react'
import signInContext from '@/context/SignIn/signInContext'
import SignIn from '@/components/Layout/SignIn'

const Uploads = () => {
    const { signedIn } = useContext(signInContext);
    return (
        <>
            <CustomHead title='Uploads - Vishal Chaurasia' description='I will upload projects here.' />
            {signedIn ?
                <UploadProjectDetails />
                :
                <SignIn />
            }
        </>
    )
}

export default Uploads

