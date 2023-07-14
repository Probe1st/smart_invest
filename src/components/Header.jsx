import { useCallback, useContext, useEffect, useRef } from "react";
import LinkButton from "./LinkButton";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Header() {
  // <LinkButton className="text-gray-300 text-lg font-semibold hover:underline" text="Профиль" link="profile" />
  let { auth } = useContext(Context);

  let text = useRef(null);
  let link = useRef(null);

  useEffect(() => {
    isLogin(auth, link, text)
  }, [useAuthState(auth)[0]]);

  isLogin(auth, link, text)



  return (
    <header className="flex flex-row items-center w-2/3 py-5 justify-between">
      <div>
        <LinkButton
          link="/"
          className="text-sky-400 text-xl"
          text="Smart Invest"
        />
      </div>

      <div className="flex flex-row space-x-5 items-center">
        <span
          style={{ cursor: "pointer" }}
          className={`text-gray-300 text-lg font-semibold hover:underline`}
          onClick={() => (window.location.href = link.current)}
        >
          {text.current}
        </span>
        {/* <div className="flex flex-col space-y-2 w-fit h-fit">
          <div className="rounded-full bg-gray-500 w-8 h-1"></div>
          <div className="rounded-full bg-gray-500 w-8 h-1"></div>
          <div className="rounded-full bg-gray-500 w-8 h-1"></div>
        </div> */}
      </div>
    </header>
  );
}

function isLogin(auth, link, text) {
  if (auth.currentUser) {
    text.current = "Профиль";
    link.current = "/profile";
  } else {
    text.current = "Войти";
    link.current = "login";
  }
}