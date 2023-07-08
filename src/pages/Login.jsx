import InputForm from "../components/InputForm";
import Link from "../components/Link";
import SubmitButton from "../components/SubmitButton";


export default function Login() {
    return (
        <>
            <p className="text-sky-400 text-xl mt-16">Smart Invest</p>

            <form className="flex flex-col items-center w-2/3 bg-slate-900 space-y-7 my-auto">
                <h2 className="text-gray-300 text-3xl">Войти</h2>

                <div className="flex flex-col items-center space-y-3">
                    <InputForm type="email" id="email" placeholder="email" />
                    <InputForm type="password" id="password" placeholder="password" />
                </div>

                <SubmitButton text="Войти" />

                <p className="flex flex-col items-center text-gray-300 whitespace-normal">Еще не зарегистрированы? 
                    <Link className="text-sky-400" text="Зарегистрироваться" link="/register"/>
                </p>
            </form>
        </>
    );
}