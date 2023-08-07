import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { useContext } from "react";
import { Context } from "../..";

export default function PromoCalculator() {
  const { app } = useContext(Context);

  getDownloadURL(ref(getStorage(app), "/png/banknotes.png")).then(url => {
    const img = document.querySelector('[data-bg-image="banknotes"]');
    img.setAttribute("src", url);
  });

  getDownloadURL(ref(getStorage(app), "/png/ipoh_touch.png")).then(url => {
    const img = document.querySelector('[data-bg-image="ipoh-touch"]');
    img.setAttribute("src", url);
  });

  return (
    <div className="w-full mt-40 bg-blue-800 text-center">
      <div className="flex flex-row justify-between text-lg w-2/3 mx-auto">
        <div className="flex flex-col justify-between">
          <div></div>
          <p className="font-semibold">Рассчитай свой потенциальный доход, исходя<br /> из результатов предыдущего квартала</p>
          <p className="text-sm mb-5 text-blue-400">Если инвестировать, то с умом</p>
        </div>

        <div className="flex flex-col items-center justify-end w-3/12">
          <img className="relative bottom-16" data-bg-image="ipoh-touch" alt="" />
          <img className="absolute" data-bg-image="banknotes" alt="" />
        </div>

        <div className="flex flex-col justify-between">
          <div></div>
          <p className="font-semibold">Полностью автоматическая<br /> торговля на рынке</p>
          <div className="mb-10"></div>
        </div>
      </div>
    </div>
  );
}
