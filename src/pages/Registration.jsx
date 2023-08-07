import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import Link from "../components/LinkButton";
import { useContext } from "react";
import { Context } from "..";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import RegisterFormData from "../constructors/registerFormData";

export default function Register() {
  let { auth, db } = useContext(Context);

  const handleSubmit = async (e, auth, db) => {
    e.preventDefault();
    let form = e.target;

    let data = new Array(...form.querySelectorAll("input")).map((e) => e.value);
    data = new RegisterFormData(...data);
    let { surname, name, patronymic, email, pass } = data;

    let notice = form.querySelector("#notice");

    if (!validatePass(data)) {
      notice.removeAttribute("hidden");
      notice.innerHTML = "пароли не совпадают";
      return;
    }

    createUserWithEmailAndPassword(auth, email, pass).catch((e) => {
      notice.removeAttribute("hidden");
      notice.innerHTML = e.message;
    });

    setDoc(doc(db, `/users/${email}`), {
      surname: surname,
      name,
      patronymic,
      email,
    }).catch((e) => {
      notice.removeAttribute("hidden");
      notice.innerHTML = e.code;
    });
  };

  return (
    <>
      <p className="text-sky-400 text-xl mt-16">Smart Invest</p>

      <form
        onSubmit={(e) => handleSubmit(e, auth, db)}
        className="flex flex-col items-center w-fit bg-slate-800 px-10 py-7 rounded-2xl space-y-7 mx-auto my-auto"
      >
        <h2 className="text-gray-300 text-3xl">Регистрация</h2>

        <p
          id="notice"
          hidden
          className={`bg-red-700 px-5 py-2 rounded-2xl`}
        ></p>

        <div className="flex flex-col md:flex-row items-center space-y-3 space-x-0 md:space-y-0 md:space-x-5">
          <div className="flex flex-col items-center space-y-3">
            <InputForm type="text" id="surname" placeholder="Фамилия" />
            <InputForm type="text" id="name" placeholder="Имя" />
            <InputForm type="text" id="patronymic" placeholder="Отчество" />
          </div>

          <div className="flex flex-col items-center space-y-3">
            <InputForm type="email" id="email" placeholder="Почта" />
            <InputForm type="password" id="password" placeholder="Пароль" />
            <InputForm
              type="Password"
              id="RepeatPassword"
              placeholder="Повтор пароля"
            />
          </div>
        </div>

        <div>
          <input
            className="mr-[1rem]"
            required
            type="checkbox"
            name="conditions"
            id="conditions"
          />
          <label className="whitespace-pre-line text-sm" htmlFor="conditions">
            Я принимаю Политику конфиденциальности и <br /> Пользовательские
            положения и условия
          </label>
        </div>

        <SubmitButton text="Зарегистрироваться" />

        <p className="flex flex-col items-center text-gray-300 whitespace-normal">
          Уже есть учетная запись?{" "}
          <Link
            className="text-sky-400 hover:underline"
            text="Войти"
            link="/login"
          />
        </p>
      </form>
    </>
  );
}

function validatePass(data) {
  let { pass, repPass } = data;

  if (pass === repPass) return true;
  return false;
}
