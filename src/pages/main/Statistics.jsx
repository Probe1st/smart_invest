import SetSrcImage from "../../components/SetSrcImage";
import SetBgImage from "../../components/SetBgImage";

export default function Statistics() {
  SetSrcImage("/png/robot-eva.png", 'robot-eva');

  SetBgImage("/png/bg-for-statistic.png", 'bg-for-statistic');

  return (
    <div className="w-full mt-44 pt-16 pb-6 bg-blue-800 bg-cover bg-center" data-bg-image="bg-for-statistic">
      <div className="flex flex-row w-2/3 mx-auto">
        <div className="self-center">
          <p className="text-3xl font-semibold">Общая <br />статистика <br />по <br />системе</p>
        </div>

        <div className="w-4/12">
          <img className="absolute mt-[-8rem]" data-src-image="robot-eva" alt="" />
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
