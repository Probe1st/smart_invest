import { useContext } from "react";
import LinkButton from "./LinkButton";
import { Context } from "..";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default function Header() {
  let { app } = useContext(Context);

  getDownloadURL(ref(getStorage(app), "svg/logo.svg")).then((url) => {
    const img = document.querySelectorAll("[alt='logo']");
    img.forEach(e => e.setAttribute("src", url))
  });

  return (
    <header className="flex flex-row items-center w-2/3 py-5 justify-between">
      <div className="flex flex-row items-center space-x-4">
        <img className="w-12" alt="logo" />

        <div className="space-x-2">
          <LinkButton
            link={"/"}
            className="font-bold text-xl text-black"
            text={"SMART"}
          />
          <LinkButton
            link={"/"}
            className={"font-bold text-xl text-blue-800"}
            text={"INVEST"}
          />
        </div>
      </div>

      <div className="flex flex-row space-x-5">
        <LinkButton
          link={"registration"}
          text={"Регистрация"}
          className={
            "flex font-bold rounded-full bg-gradient-to-t from-[#193a9f] to-[#2952cd] py-3 px-5 min-w-[8.4rem]"
          }
        />
        <LinkButton
          link={"login"}
          text={"Вход"}
          className={
            "flex font-bold rounded-full border border-black justify-center py-3 px-5 min-w-[8.4rem] text-black"
          }
        />
      </div>
    </header>
  );
}
