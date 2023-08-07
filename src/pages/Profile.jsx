import { useContext } from "react";
import { Context } from "..";
import { signOut } from "firebase/auth";
import { ref, getDownloadURL, getStorage } from 'firebase/storage';

export default function Profile() {
    const { auth, app } = useContext(Context);
    getDownloadURL(ref(getStorage(app), "botsIMG/photo_2023-07-25_11-50-45.jpg"))
        .then(url => {
            const img = document.getElementById("avatar");
            img.setAttribute("src", url)
        }).catch(e => {
            console.log(e.code)
        });

    const logOut = () => {
        signOut(auth);
        window.location.href = "/login"
    };

    return (
        <div className="flex flex-col items-start justify-start w-2/3 mt-16 my-auto">
            <h1 className="text-left text-3xl">{auth.currentUser.email}</h1>

            <img className="mt-10 w-32 h-32 rounded-full" id="avatar" alt="ava"></img>

            <h2 className="mt-10 text-2xl ">Ваши роботы</h2>

            <div className="flex flex-wrap justify-between gap-16 mt-10">
                {"cards"}
            </div>

            <form></form>
            <input type="file"></input>
            <button type="submit" className="w-fit mt-10 rounded-full bg-sky-800 py-2 px-5">загрузить картинку</button>

            <button className="w-fit mt-10 rounded-full bg-slate-600 py-2 px-5" onClick={logOut}>выйти</button>
        </div>
    )
}