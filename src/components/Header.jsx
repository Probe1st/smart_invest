import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="flex flex-row items-center w-2/3 py-5 justify-between">
      <div className="flex flex-row items-center space-x-4">
        <Link to={"/"}><img className="w-12" src={process.env.PUBLIC_URL + "logo.svg"} alt="logo" /></Link>

        <div className="space-x-2">
          <Link
            to={"/"}
            className="font-bold text-xl text-black"
          >SMART</Link>
          <Link
            to={"/"}
            className={"font-bold text-xl text-blue-800"}
          >INVEST</Link>
        </div>
      </div>

      <div className="flex flex-row space-x-5">
        <Link
          to={"registration"}
          className={
            "flex font-bold rounded-full bg-gradient-to-t from-[#193a9f] to-[#2952cd] py-3 px-5 min-w-[8.4rem]"
          }
        >Регистрация</Link>
        <Link
          to={"login"}
          className={
            "flex font-bold rounded-full border border-black justify-center py-3 px-5 min-w-[8.4rem] text-black"
          }
        >Вход</Link>
      </div>
    </header>
  );
}
