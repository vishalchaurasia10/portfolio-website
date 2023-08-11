import { useState } from "react";
import MouseVariantsContext from "./mouseVariantsContext";

const MouseVariantsState = (props) => {

    const [cursorVariant, setCursorVariant] = useState('default');

    const textEnter = () => {
        setCursorVariant('text');
    }

    const textLeave = () => {
        setCursorVariant('default');
    }

    const navbarEnter = () => {
        setCursorVariant('navbar');
    }

    const navbarSmallEnter = () => {
        setCursorVariant('navbarSmall');
    }

    const buttonEnter = () => {
        setCursorVariant('button');
    }

    const importantEnter = () => {
        setCursorVariant('important');
    }

    return (
        <MouseVariantsContext.Provider value={{ cursorVariant, setCursorVariant, textEnter, textLeave, navbarEnter, buttonEnter, importantEnter, navbarSmallEnter }}>
            {props.children}
        </MouseVariantsContext.Provider>
    )
}

export default MouseVariantsState;