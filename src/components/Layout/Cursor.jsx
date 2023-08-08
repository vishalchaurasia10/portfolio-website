import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext';

const Cursor = () => {

    const MouseVariantsContext = useContext(mouseVariantsContext);
    const { cursorVariant } = MouseVariantsContext;

    const [mousePostition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const variants = {
        default: {
            x: mousePostition.x,
            y: mousePostition.y,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePostition.x - 60,
            y: mousePostition.y - 60,
            backgroundColor: "#58ff13",
            mixBlendMode: "difference",
        },
        navbar: {
            height: 120,
            width: 120,
            x: mousePostition.x - 40,
            y: mousePostition.y - 40,
            backgroundColor: "yellow",
            mixBlendMode: "difference",
        },
        button: {
            height: 120,
            width: 120,
            x: mousePostition.x - 40,
            y: mousePostition.y - 40,
            backgroundColor: "#FFCCCC",
            mixBlendMode: "difference",
        },
        important: {
            height: 120,
            width: 120,
            x: mousePostition.x - 40,
            y: mousePostition.y - 40,
            backgroundColor: "#57E6D9",
            mixBlendMode: "difference",
        },
        images: {
            height: 120,
            width: 120,
            x: mousePostition.x - 40,
            y: mousePostition.y - 40,
            backgroundColor: "#E966A0",
            mixBlendMode: "difference",
        },
    }

    useEffect(() => {

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({
                x: clientX,
                y: clientY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <motion.div
            variants={variants}
            animate={cursorVariant}
            transition={{duration: 0.1}}
            className='cursor z-50 bg-white h-8 w-8 hidden lg:block pointer-events-none rounded-full fixed -top-4 -left-4'>
        </motion.div>
    )
}

export default Cursor
