import { useContext } from "react";
import { Context } from "..";
import { signOut } from "firebase/auth";

export default function Profile() {
    const { auth } = useContext(Context);
    const logOut = () => {
        signOut(auth);
        window.location.href = "/login"
    };


    return (
        <>
            <button  onClick={logOut}>выйти</button>
        </>
    )
}