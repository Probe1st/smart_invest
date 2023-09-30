import { Link } from "react-router-dom";
import SetSrcImage from "../../components/SetSrcImage";

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

  SetSrcImage("/png/arrow.png", "arrow", true);

  return (
    <div className="characteristics">
      <img className="rotate-[-180deg]" alt="" data-src-image="arrow"/>
      {dataForCard[0]}
      <img className="rotate-[-120deg]" alt="" data-src-image="arrow"/>

      {dataForCard[1]}
      <div className="flex flex-row items-center space-x-4">
        <img className="w-12" alt="logo" src={process.env.PUBLIC_URL + "logo.svg"} />

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
      {dataForCard[3]}

      <img className="rotate-[60deg]" alt="" data-src-image="arrow"/>
      {dataForCard[2]}
      <img alt="" data-src-image="arrow"/>
    </div>
  );
}
