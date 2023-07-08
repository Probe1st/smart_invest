import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import Link from "../components/Link";

export default function Register() {
  return (
    <>
      <p className="text-sky-400 text-xl mt-16">Smart Invest</p>

      <form className="flex flex-col items-center w-2/3 bg-slate-900 space-y-7 my-auto">
        <h2 className="text-gray-300 text-3xl">Регистрация</h2>

        <div className="flex flex-col items-center space-y-3">
          <InputForm type="text" id="surname" placeholder="Фамилия" />
          <InputForm type="text" id="name" placeholder="Имя" />
          <InputForm type="text" id="patronymic" placeholder="Отчество" />

          <InputForm type="email" id="email" placeholder="Почта" />

          <InputForm type="password" id="password" placeholder="Пароль" />
          <InputForm type="RepeatPassword" id="RepeatPassword" placeholder="Повтор пароля" />
        </div>

        <SubmitButton text="Зарегистрироваться" />

        <p className="flex flex-col items-center text-gray-300 whitespace-normal">
          Уже есть учетная запись? <Link className="text-sky-400" text="Войти" link="/login" />
        </p>
      </form>
    </>
  );
}
