import { useContext } from "react";
import { Context } from "..";
import { signOut } from "firebase/auth";
import CardOfProducts from "../components/CardOfProduct";

export default function Profile() {
    const { auth } = useContext(Context);
    const logOut = () => {
        signOut(auth);
        window.location.href = "/login"
    };
    
    let cards = Array(4).fill(0).map(e => {
        return <CardOfProducts />
    })

    return (
        <div className="flex flex-col items-start justify-start w-2/3 mt-16 my-auto">
            <h1 className="text-left text-3xl">{auth.currentUser.email}</h1>

            <h2 className="mt-10 text-2xl ">Ваши роботы</h2>

            <div className="flex flex-wrap justify-between gap-16 mt-10">
                {cards}
            </div>

            <button  onClick={logOut}>выйти</button>
        </div>
    )
}

{/*  */}