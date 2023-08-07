import { getDownloadURL, getStorage, ref } from "firebase/storage";
import LinkButton from "../../components/LinkButton";
import { useContext } from "react";
import { Context } from "../..";

export default function Characteristics() {
  let dataForCard = [
    {
      header: "Надёжность",
      disc: "Верьте в свои инвестиции. Мы строим нашу репутацию на честности, прозрачности и надежности. Ваши деньги в надежных руках.",
    },
    {
      header: "Современность",
      disc: "Будьте в тренде финансового успеха. Мы используем передовые технологии, чтобы привнести инновации в ваш портфель инвестиций.",
    },
    {
      header: "Прибыльность",
      disc: "Откройте новые горизонты доходности. Наши роботы обеспечивают потенциал прибыли до 50% на паре EURUSD, помогая вам увеличить свой капитал.",
    },
    {
      header: "Действие",
      disc: "Время - ограничено! \nНаша эксклюзивная акция предлагает уникальные условия. Сделайте правильный выбор и начните инвестировать сегодня!",
    },
  ];

  dataForCard = dataForCard.map((e, i) => {
    return (
      <div
        key={i}
        className="simple-card bg-blue-800 rounded-2xl pt-2 pb-10 px-5 text-center"
      >
        <h2>{e.header}</h2>
        <p>{e.disc}</p>
      </div>
    );
  });

  const { app } = useContext(Context);
  getDownloadURL(ref(getStorage(app), "/png/arrow.png")).then(url => {
    const imgs = document.querySelectorAll('[data-bg-image="arrow"]');
    imgs.forEach(e => {
      e.setAttribute("src", url)
    })
  })

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-24 justify-items-center">
      <img className="rotate-[-180deg]" alt="" data-bg-image="arrow"/>
      {dataForCard[0]}
      <img className="rotate-[-120deg]" alt="" data-bg-image="arrow"/>

      {dataForCard[1]}
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
      {dataForCard[3]}

      <img className="rotate-[60deg]" alt="" data-bg-image="arrow"/>
      {dataForCard[2]}
      <img alt="" data-bg-image="arrow"/>
    </div>
  );
}
