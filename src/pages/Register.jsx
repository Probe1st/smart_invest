import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import Link from "../components/LinkButton";

export default function Register() {
  return (
    <>
      <p className="text-sky-400 text-xl mt-16">Smart Invest</p>

      <form className="flex flex-col items-center w-fit bg-slate-800 px-10 py-7 rounded-2xl space-y-7 mx-auto my-auto">
        <h2 className="text-gray-300 text-3xl">Регистрация</h2>

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
          <input className="mr-[1rem]" required type="checkbox" name="conditions" id="conditions" />
          <label className="whitespace-pre-line text-sm" htmlFor="conditions">
            Я принимаю Политику конфиденциальности и <br /> Пользовательские положения и условия
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
