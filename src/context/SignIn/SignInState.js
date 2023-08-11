import { useState } from "react";
import SignInContext from "./signInContext";
import { Toaster, toast } from "react-hot-toast";

const SignInState = (props) => {

    const [signedIn, setSignedIn] = useState(false);

    const signIn = (credentials) => {
        if (credentials.email === process.env.NEXT_PUBLIC_EMAIL && credentials.secretKey === process.env.NEXT_PUBLIC_SECRET_KEY) {
            setSignedIn(true);
            toast.success("Signed In Successfully");
        } else {
            toast.error("Invalid Credentials");
        }
    }

    return (
        <SignInContext.Provider value={{ signedIn, signIn }}>
            <Toaster />
            {props.children}
        </SignInContext.Provider>
    )
}

export default SignInState;