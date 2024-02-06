import { Link } from "react-router-dom";
import SetSrcImage from "../../components/SetSrcImage";

export default function Characteristics() {
  SetSrcImage("/png/arrow.png", "arrow", true);

  return (
    <div className="characteristics">
      <img className="rotate-[-180deg]" alt="arrow" data-src-image="arrow"/>

      {/* 1 */}
      <div className="card">
        <h2>Надёжность</h2>
        <p>Верьте в свои инвестиции. Мы строим нашу репутацию на честности, <span className="text-green-400 font-bold">прозрачности и надежности</span>. Ваши деньги в надежных руках.</p>
      </div>

      <img className="rotate-[-120deg]" alt="arrow" data-src-image="arrow"/>

      {/* 2 */}
      <div className="card">
        <h2>Инвестиции</h2>
        <p>Уверенность в завтрашнем дне, с помощью автоматизированных торговых роботов получаете <span className="text-green-400 font-bold">пассивный доход от 10% в месяц</span> и более.</p>
      </div>

      <div className="flex flex-row w-full justify-center items-center space-x-4">
        <img className="w-20" alt="logo" src={process.env.PUBLIC_URL + "logo.svg"} />

        <div className="space-x-2">
          <Link
            to={"/"}
            className="font-bold text-3xl text-black"
          >SMART</Link>
          <Link
            to={"/"}
            className={"font-bold text-3xl text-blue-800"}
          >INVEST</Link>
        </div>
      </div>

      {/* 3 */}
      <div className="card">
        <h2>Управление рисками</h2>
        <p>Управляйте своим доходом придерживаясь <span className="text-green-400 font-bold">выбранными лично настройками</span> вашего робота.</p>
      </div>

      <img className="rotate-[60deg]" alt="arrow" data-src-image="arrow"/>

      {/* 4 */}
      <div className="card">
        <h2>Действие</h2>
        <p>Время - ограничено!<br />Наша эксклюзивная акция предлагает уникальные условия. Сделайте <span className="text-green-400 font-bold">правильный выбор и начните инвестировать сегодня</span>!</p>
      </div>

      <img alt="arrow" data-src-image="arrow"/>
    </div>
  );
}
