import SetSrcImage from "../../components/SetSrcImage";
import SetBgImage from "../../components/SetBgImage";

export default function Statistics() {
  SetSrcImage("/png/robot-eva.png", 'robot-eva');

  SetBgImage("/png/bg-for-statistic.png", 'bg-for-statistic');

  SetBgImage("/png/Rectangle_103.png", "Rectangle_103.png");

  SetBgImage("/png/Rectangle_100.png", "Rectangle_100.png");
  SetBgImage("/png/Rectangle_3101.png", "Rectangle_3101.png");
  SetBgImage("/png/Rectangle_1001.png", "Rectangle_1001.png");
  SetBgImage("/png/Rectangle_102.png", "Rectangle_102.png")
  return (
    // container with background
    <div className="w-full mt-44 pt-16 pb-6 bg-blue-800 bg-cover bg-center rounded-2xl" data-bg-image="bg-for-statistic">

      <div className="flex flex-row w-2/3 mx-auto">
        {/* left title */}
        <div className="self-center">
          <p className="text-3xl font-semibold">Общая <br />статистика <br />по системе</p>
        </div>

        {/* img of robot */}
        <div className="w-4/12">
          <img className="absolute mt-[-8rem]" data-src-image="robot-eva" alt="" />
        </div>

        {/* right div */}
        <div data-bg-image="Rectangle_103.png" className="bg-statistics">
          {/* first block */}
          <div data-bg-image="Rectangle_1001.png" className="child-centerd">
            <p className="text-green-400">1377</p>
            <p>Активные торговые советники</p>
          </div>

          {/* second block */}
          <div data-bg-image="Rectangle_3101.png" className="child-centerd">
            <p className="text-green-400">14</p>
            <p>Новых подключений за месяц</p>
          </div>

          {/* third block */}
          <div data-bg-image="Rectangle_102.png" className="child-centerd">
            <p className="text-green-400">12.190.300$ +</p>
            <p>Оборот средств на счетах наших клиентов</p>
          </div>

          {/* forth block */}
          <div data-bg-image="Rectangle_100.png" className="child-centerd">
            <p className="text-green-400">186%</p>
            <p>Средний квартальный доход</p>
          </div>
        </div>
      </div>
    </div>
  );
}
