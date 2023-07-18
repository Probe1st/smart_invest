import { createElement, useContext } from "react";
import InputForm from "../components/InputForm";
import Link from "../components/LinkButton";
import SubmitButton from "../components/SubmitButton";
import { Context } from "..";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";

export default function Login() {
  const { auth } = useContext(Context);

  return (
    <>
      <p className="text-sky-400 text-xl mt-16">Smart Invest</p>

      <form
        onSubmit={(e) => signIn(e, auth)}
        className="flex flex-col items-center w-fit bg-slate-800 px-10 py-7 rounded-2xl space-y-7 mx-auto my-auto"
      >
        <h2 className="text-gray-300 text-3xl">Войти</h2>

        <div className="flex flex-col items-center space-y-3">
          <InputForm type="email" id="email" placeholder="email" />
          <InputForm type="password" id="password" placeholder="password" />
        </div>

        <SubmitButton text="Войти" />

        <p className="flex flex-col items-center text-gray-300 whitespace-normal">
          Еще не зарегистрированы?
          <Link
            className="text-sky-400 hover:underline"
            text="Зарегистрироваться"
            link="/register"
          />
        </p>
      </form>
    </>
  );
}

{
  /* <button onClick={login} className="border-2 rounded-full border-slate-500 px-5 py-1 mt-5">войти через гугл</button>
<button onClick={logOut} className="border-2 rounded-full border-slate-500 px-5 py-1 mt-5">выйти</button> */
}

// const login = async() => await signInWithRedirect(auth, new GoogleAuthProvider())
// const logOut = () => signOut(auth)

function signIn(event, auth) {
  event.preventDefault();
  let form = event.currentTarget;
  form = Array(...form.querySelectorAll("input"));

  let data = form.map(e => {
    return e.value;
  });

  signInWithEmailAndPassword(auth, data[0], data[1])
}
