import { useContext } from "react";
import InputForm from "../components/InputForm";
import Link from "../components/LinkButton";
import SubmitButton from "../components/SubmitButton";
import { Context } from "..";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginFormData from "../constructors/loginFormData";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default function Login() {
  const { auth, app } = useContext(Context);

  const hadleSubmit = async (e, auth) => {
    e.preventDefault();
    let form = e.target;

    let data = new Array(...form.querySelectorAll("input")).map((e) => e.value);
    data = new LoginFormData(...data);

    let notice = form.querySelector("#notice");

    signInWithEmailAndPassword(auth, data.email, data.pass).catch((e) => {
      if (e.code === "auth/user-not-found") {
        notice.removeAttribute("hidden");
        notice.innerHTML = "пользователь не найден";
      } else if (e.code === "auth/wrong-password") {
        notice.removeAttribute("hidden");
        notice.innerHTML = "Неверный пароль";
      } else if (e.code) {
        notice.removeAttribute("hidden");
        notice.innerHTML = e.code;
      } else {
        notice.setAttribute("hidden", "");
        notice.innerHTML = "";
      }
    });
  };

  getDownloadURL(ref(getStorage(app), "/png/bg-for-reg-log.png")).then(url => {
    const div = document.querySelector("[data-bg-image='bg-login']");
    div.style.backgroundImage = `url(${url})`
  })

  return (
    <>
      <form
        onSubmit={(e) => hadleSubmit(e, auth)}
        className="flex flex-col items-center w-fit bg-blue-800 bg-no-repeat bg-cover px-24 py-16 rounded-2xl space-y-14 mx-auto my-auto"
        data-bg-image='bg-login'
      >
        <h2 className="text-3xl">Вход</h2>

        <p
          id="notice"
          hidden
          className={`bg-red-700 px-5 py-2 rounded-2xl max-w-prose text-center`}
        ></p>

        <div className="flex flex-col items-center space-y-3">
          <InputForm type="email" id="email" placeholder="почта" />
          <InputForm type="password" id="password" placeholder="пароль" />
        </div>

        <SubmitButton text="Войти" />

        <p className="flex flex-col items-center whitespace-normal">
          Еще не зарегистрированы?
          <Link
            className="text-sky-400 hover:underline"
            text="Зарегистрироваться"
            link="/registration"
          />
        </p>
      </form>
    </>
  );
}
