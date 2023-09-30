import { useContext, useEffect } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import SetSrcImage from "./SetSrcImage";
import SetBgImage from "./SetBgImage";

export default function ReferalNotice() {
  const { auth } = useContext(Context);

  SetSrcImage("/png/helicopter-bot.png", "helecopter-bot");

  SetBgImage("/png/notice-ref-bg.png", "ref-notice");

  SetSrcImage("/robots/robot3.png", 'notice-robot');

  SetBgImage("/png/x.png", 'x');

  // ПЕРЕДЕЛАТЬ ПРОВЕРКУ ПОЛЬЗОВАТЕЛЯ ЧЕРЕЗ useAuthState
  useEffect(() => {
    const notice = document.querySelector("[data-notice]");

    if (auth.currentUser === null) {
      notice.removeAttribute("hidden")
    } else {
      notice.setAttribute("hidden", "");
    }
  }, [auth.currentUser])

  return (
    <div hidden data-notice className="fixed bottom-5 left-5 z-50 bg-blue-800 rounded-xl text-center w-fit h-fit">
      <div
        data-bg-image="ref-notice"
        className="rounded-xl bg-center"
      >
        <img
          className="absolute top-2 left-5 rounded-full w-2/12"
          data-src-image="helecopter-bot"
          alt=""
        />

        <button onClick={e => removeNotice(e)} className="absolute top-5 right-5 rounded-full w-6 h-6 bg-center bg-cover" data-bg-image="x"></button>

        <div className="flex flex-col items-center  px-36 py-28 space-y-10">
          <p>
            Регистрируйся прямо сейчас <br /> и получи скидку в
            <span className="text-green-400 font-bold"> 50$</span> на любого
            робота.
          </p>

          <Link
            className={
              "px-8 py-2 rounded-xl text-blue-600 font-semibold bg-white"
            }
            to={"/registration"}
          >Регистрация</Link>
        </div>

        <img
          className="absolute bottom-1 right-5 rounded-full w-2/12"
          data-src-image='notice-robot'
          alt=""
        />
      </div>
    </div>
  );
}

function removeNotice(e) {
  const notice = e.currentTarget.closest("[data-notice]");
  notice.setAttribute("hidden", "")
}