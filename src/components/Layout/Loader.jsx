import React, { useContext } from 'react'
import Lottie from 'lottie-react'
import loading from '@/assets/animations/loading'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'

const Loader = () => {

    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { importantEnter, textLeave } = MouseVariantsContext;

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <Lottie
                className='md:h-80 lg:h-60'
                onMouseEnter={importantEnter}
                onMouseLeave={textLeave}
                animationData={loading} />
            <div onMouseEnter={importantEnter} onMouseLeave={textLeave} className="loading relative -top-24 left-2 md:left-3 lg:left-4 lg:-top-20 text-[#57E6D9] text-lg md:text-2xl font-firaCode">Loading...</div>
        </div>
    )
}

export default Loader
