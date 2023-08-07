import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useContext } from "react";
import { Context } from "../..";

export default function HowDoItWorks() {
  const { app } = useContext(Context);

  getDownloadURL(ref(getStorage(app), "/png/graphic.png")).then((url) => {
    const img = document.querySelector("[alt='graphic']");
    img.setAttribute("src", url);
  });
  getDownloadURL(ref(getStorage(app), "/png/money.png")).then((url) => {
    const img = document.querySelector("[data-bg-image='money']");
    img.style.backgroundImage = `url(${url})`;
  });

  return (
    <div className="w-full mt-24 bg-blue-800">
      <div className="flex flex-row space-x-8 mx-auto py-7 w-2/3">
        <img src="" alt="graphic" />
        <div className="space-y-5">
          <h2 className="font-bold text-3xl">Как это работает?</h2>
          <div className="w-full h-36 bg-auto bg-center" data-bg-image="money"></div>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-sm">
            Торговый робот автоматически покупает и продает валютные пары,
            например EUR/USD на рынке Forex для получения прибыли от изменения
            их обменного курса. Он использует алгоритмы и анализ данных для
            определения оптимальных моментов сделок, минимизируя влияние
            человеческих факторов и обеспечивая возможность заработка без
            активного участия человека.
          </p>
        </div>
      </div>
    </div>
  );
}
