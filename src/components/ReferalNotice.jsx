import { useContext, useEffect } from "react";
import { Context } from "..";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import LinkButton from "./LinkButton";

export default function ReferalNotice() {
  const { app, auth } = useContext(Context);

  getDownloadURL(ref(getStorage(app), "png/helicopter-bot.png")).then((url) => {
    const img = document.querySelector("[data-bg-image='helecopter-bot']");
    img.setAttribute("src", url);
  });

  getDownloadURL(ref(getStorage(app), "png/notice-ref-bg.png")).then((url) => {
    const div = document.querySelector("[data-bg-image='ref-notice']");
    div.style.backgroundImage = `url(${url})`;
  });

  getDownloadURL(ref(getStorage(app), "/robots/robot3.png")).then((url) => {
    const img = document.querySelector("[data-bg-image='notice-robot']");
    img.setAttribute("src", url);
  });

  getDownloadURL(ref(getStorage(app), "png/x.png")).then((url) => {
    const div = document.querySelector("[data-bg-image='x']");
    div.style.backgroundImage = `url(${url})`;
  });

  useEffect(() => {
    const notice = document.querySelector("[data-notice]");

    if(auth.currentUser === null) {
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
          data-bg-image="helecopter-bot"
          alt=""
        />

        <button onClick={e => removeNotice(e)} className="absolute top-5 right-5 rounded-full w-6 h-6 bg-center bg-cover" data-bg-image="x"></button>

        <div className="flex flex-col items-center  px-36 py-28 space-y-10">
          <p>
            Регистрируйся прямо сейчас <br /> и получи скидку в
            <span className="text-green-400 font-bold"> 50$</span> на любого
            робота.
          </p>

          <LinkButton
            className={
              "px-8 py-2 rounded-xl text-blue-600 font-semibold bg-white"
            }
            text={"Регистрация"}
            link={"registration"}
          />
        </div>

        <img
          className="absolute bottom-1 right-5 rounded-full w-2/12"
          data-bg-image='notice-robot'
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