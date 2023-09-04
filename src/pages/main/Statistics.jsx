import { useContext } from "react";
import { Context } from "../..";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default function Statistics() {
  const { app } = useContext(Context);

  getDownloadURL(ref(getStorage(app), "/png/robot-eva.png")).then((url) => {
    const img = document.querySelector("[data-bg-image='robot-eva']");
    img.setAttribute("src", url);
  });

  getDownloadURL(ref(getStorage(app), "/png/bg-for-statistic.png")).then(
    (url) => {
      const img = document.querySelector("[data-bg-image='bg-for-statistic']");
      img.style.backgroundImage = `url(${url})`
    }
  );

  return (
    <div className="w-full mt-44 pt-16 pb-6 bg-blue-800 bg-cover bg-center" data-bg-image="bg-for-statistic">
      <div className="flex flex-row w-2/3 mx-auto">
        <div className="self-center">
          <p className="text-3xl font-semibold">Общая <br />статистика <br />по <br />системе</p>
        </div>

        <div className="w-4/12">
          <img className="absolute mt-[-8rem]" data-bg-image="robot-eva" alt="" />
        </div>

        <div className="space-y-12 self-end">
          <div className="flex flex-row justify-center space-x-6">
            <div className="child-centerd">
              <p className="text-green-400">1377</p>
              <p>Активные торговые советники</p>
            </div>

            <div className="child-centerd">
              <p className="text-green-400">14</p>
              <p>Новых подключений за месяц</p>
            </div>
          </div>

          <div className="child-centerd">
            <p>Оборот средств на счетах наших клиентов</p>
            <p className="text-green-400">12.190.300$ +</p>
          </div>

          <div className="child-centerd">
            <p>
              Средний квартальный доход{" "}
              <span className="text-green-400">186%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
