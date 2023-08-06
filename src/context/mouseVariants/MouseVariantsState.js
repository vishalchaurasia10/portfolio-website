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

    const buttonEnter = () => {
        setCursorVariant('button');
    }

    return (
        <MouseVariantsContext.Provider value={{ cursorVariant, setCursorVariant, textEnter, textLeave, navbarEnter, buttonEnter }}>
            {props.children}
        </MouseVariantsContext.Provider>
    )
}

export default MouseVariantsState;