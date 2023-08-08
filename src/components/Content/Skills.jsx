import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer';
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext';

const Skill = ({ name, x, y }) => {

    const MouseVariants = useContext(mouseVariantsContext);
    const { buttonEnter, textLeave } = MouseVariants;

    return (
        <InView triggerOnce={true}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    whileHover={{ scale: 1.1 }}
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: inView ? x : 0, y: inView ? y : 0 }}
                    transition={{ duration: 1.0 }}
                    onMouseEnter={buttonEnter}
                    onMouseLeave={textLeave}
                    className='items-center text-sm md:text-lg lg:text-xl flex justify-center rounded-3xl font-semibold bg-[rgba(255,255,255,0.9)] text-black px-4 py-2 shadow-[rgba(255,255,255,0.5)] shadow-2xl absolute'
                >
                    {name}
                </motion.div>
            )}
        </InView>
    )
}


const Skills = () => {
    const [width, setWidth] = useState(0);

    const MouseVariants = useContext(mouseVariantsContext);
    const { importantEnter, textLeave } = MouseVariants;

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div id='skills' className="container md:pt-24 font-firaCode md:w-full md:mx-auto">
                <div className="heading px-5 flex items-center space-x-4">
                    <h1 className='text-5xl md:text-7xl my-8 font-extrabold text-[#57E6D9]'>Skills</h1>
                    <div className="line rounded-full w-3/4 h-1 bg-[#57E6D9]"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="web relative my-10 flex items-center justify-center rounded-full bg-circularDarkSm md:bg-circularDarkMd lg:bg-circularDarkLg xl:bg-circularDark md:h-[60vh] h-[50vh] lg:h-[80vh] xl:h-[95vh] w-full">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={importantEnter}
                        onMouseLeave={textLeave}
                        className='items-center text-sm md:text-lg flex justify-center rounded-full font-semibold bg-[#57E6D9] text-black px-6  py-3 shadow-[#57E6D9] shadow-2xl'>
                        CS
                    </motion.div>
                    {
                        width < 576 ?
                            <>
                                <Skill name='HTML' x='-20vw' y='-12vw' />
                                <Skill name='CSS' x='-20vw' y='-45vw' />
                                <Skill name='Javascript' x='30vw' y='6vw' />
                                <Skill name='ReactJS' x='-19vw' y='23vw' />
                                <Skill name='NextJS' x='-36vw' y='-27vw' />
                                <Skill name='Java' x='37vw' y='-30vw' />
                                <Skill name='ExpressJS' x='36vw' y='20vw' />
                                <Skill name='Solidity' x='0vw' y='-34vw' />
                                <Skill name='TailwindCSS' x='-25vw' y='38vw' />
                                <Skill name='MongoDB' x='-32vw' y='4vw' />
                                <Skill name='NodeJs' x='20vw' y='-46vw' />
                                <Skill name='Python' x='32vw' y='-10vw' />
                                <Skill name='Inkscape' x='24vw' y='35vw' />
                            </> : ''
                    }
                    {
                        width >= 576 && width < 992 ?
                            <>
                                <Skill name='HTML' x='-24vw' y='-12vw' />
                                <Skill name='CSS' x='-15vw' y='-35vw' />
                                <Skill name='Javascript' x='30vw' y='6vw' />
                                <Skill name='ReactJS' x='-27vw' y='20vw' />
                                <Skill name='NextJS' x='-29vw' y='-27vw' />
                                <Skill name='Java' x='25vw' y='-23vw' />
                                <Skill name='ExpressJS' x='0vw' y='20vw' />
                                <Skill name='Solidity' x='0vw' y='-20vw' />
                                <Skill name='TailwindCSS' x='-14vw' y='33vw' />
                                <Skill name='MongoDB' x='-32vw' y='4vw' />
                                <Skill name='NodeJs' x='20vw' y='-35vw' />
                                <Skill name='Python' x='32vw' y='-10vw' />
                                <Skill name='Inkscape' x='15vw' y='30vw' />
                            </> : ''
                    }
                    {
                        width >= 992 && width < 1200 ?
                            <>
                                <Skill name='HTML' x='-24vw' y='-10vw' />
                                <Skill name='CSS' x='-15vw' y='-22vw' />
                                <Skill name='Javascript' x='30vw' y='6vw' />
                                <Skill name='ReactJS' x='-32vw' y='12vw' />
                                <Skill name='NextJS' x='-29vw' y='-19vw' />
                                <Skill name='Java' x='23vw' y='-17vw' />
                                <Skill name='ExpressJS' x='0vw' y='11vw' />
                                <Skill name='Solidity' x='0vw' y='-9vw' />
                                <Skill name='TailwindCSS' x='-14vw' y='18vw' />
                                <Skill name='MongoDB' x='-32vw' y='0vw' />
                                <Skill name='NodeJs' x='12vw' y='-23vw' />
                                <Skill name='Python' x='32vw' y='-10vw' />
                                <Skill name='Inkscape' x='15vw' y='18vw' />
                            </> : ''
                    }
                    {
                        width >= 1200 ?
                            <>
                                <Skill name='HTML' x='-20vw' y='-5vw' />
                                <Skill name='CSS' x='-8vw' y='-18vw' />
                                <Skill name='Javascript' x='30vw' y='6vw' />
                                <Skill name='ReactJS' x='-32vw' y='8vw' />
                                <Skill name='NextJS' x='-20vw' y='-16vw' />
                                <Skill name='Java' x='17vw' y='-17vw' />
                                <Skill name='ExpressJS' x='0vw' y='11vw' />
                                <Skill name='Solidity' x='0vw' y='-9vw' />
                                <Skill name='TailwindCSS' x='-18vw' y='15vw' />
                                <Skill name='MongoDB' x='-30vw' y='-10vw' />
                                <Skill name='NodeJs' x='19vw' y='-4vw' />
                                <Skill name='Python' x='31vw' y='-8vw' />
                                <Skill name='Inkscape' x='18vw' y='15vw' />
                            </> : ''
                    }
                </motion.div>
            </div>
        </>
    )
}

export default Skills
