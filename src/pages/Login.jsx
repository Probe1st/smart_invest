import { useContext } from "react";
import InputForm from "../components/InputForm";
import Link from "../components/LinkButton";
import SubmitButton from "../components/SubmitButton";
import { Context } from "..";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginFormData from '../constructors/loginFormData';

export default function Login() {
  const { auth } = useContext(Context);

  const hadleSubmit = async (e, auth) => {
    e.preventDefault();
    let form = e.target;

    let data = new Array(...form.querySelectorAll("input")).map((e) => e.value);
    data = new LoginFormData(...data);

    let notice = form.querySelector("#notice");

    // validation(auth, data, notice)

    signInWithEmailAndPassword(auth, data.email, data.pass).catch(e => {
      if(e.code === "auth/user-not-found") {
        notice.removeAttribute("hidden");
        notice.innerHTML = "пользователь не найден";
      }else if(e.code ===  "auth/wrong-password") {
        notice.removeAttribute("hidden");
        notice.innerHTML = "Неверный пароль";
      }else if(e.code) {
        notice.removeAttribute('hidden');
        notice.innerHTML = e.code;
      }else {
        notice.setAttribute("hidden", "");
        notice.innerHTML = "";
      }

    });
  }

  return (
    <>
      <p className="text-sky-400 text-xl mt-16">Smart Invest</p>

      <form
        onSubmit={(e) => hadleSubmit(e, auth)}
        className="flex flex-col items-center w-fit bg-slate-800 px-10 py-7 rounded-2xl space-y-7 mx-auto my-auto"
      >
        <h2 className="text-gray-300 text-3xl">Войти</h2>

        <p
          id="notice"
          hidden
          className={`bg-red-700 px-5 py-2 rounded-2xl max-w-prose text-center`}
        ></p>

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