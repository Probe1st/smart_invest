import SetSrcImage from "../../components/SetSrcImage";
import SetBgImage from "../../components/SetBgImage";

const StatisticsData = {
  startDate: new Date("02.06.2024"),
  currDate: new Date("04.06.2024"),

  parseStartDate() {
    return {
      day: this.startDate.getUTCDate(),
      mounth: (this.startDate.getUTCMonth() + 1),
      year: this.startDate.getUTCFullYear()
    }
  },

  parseCurrDate() {
    return {
      day: this.currDate.getUTCDate(),
      mounth: (this.currDate.getUTCMonth() + 1),
      year: this.currDate.getUTCFullYear()
    }
  },

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  },

  getAdvisors() {
    const [currDate, startDate] = [this.parseCurrDate(), this.parseStartDate()];
    const countWeeks = (((currDate.year - startDate.year) * 365) + ((currDate.mounth - startDate.mounth) * 30) + (currDate.day - startDate.day)) / 7;

    const spreadOfValues = 4;

    let result = 200;
    for (let i = 1; i <= countWeeks; i++) {
      result += 12 - (i % spreadOfValues);
    }

    return result;
  },

  getTurnoverOfFunds() {
    const [currDate, startDate] = [this.parseCurrDate(), this.parseStartDate()];
    const countDays = (((currDate.year - startDate.year) * 365) + ((currDate.mounth - startDate.mounth) * 30) + (currDate.day - startDate.day))

    const spreadOfValues = 10_000;

    let result = 12_384_415;
    for (let i = 1; i <= countDays; i++) {
      result += spreadOfValues - (i % spreadOfValues);
    }

    return result;
  },

  getNewConnections() {
    const [currDate, startDate] = [this.parseCurrDate(), this.parseStartDate()];
    const countMounth = (((currDate.year - startDate.year) * 12) + (currDate.mounth - startDate.mounth));

    const spreadOfValues = 4;

    return 18 - ((countMounth * 4) % spreadOfValues);
  },

  getAverageMonthlyTurnover() {
    const [currDate, startDate] = [this.parseCurrDate(), this.parseStartDate()];
    const countMounth = (((currDate.year - startDate.year) * 12) + (currDate.mounth - startDate.mounth));

    const spreadOfValues = 10;

    return 196 - ((countMounth * 4) % spreadOfValues);
  },
}


export default function Statistics() {
  //#region set src image
  // SetSrcImage("/png/robot-eva.png", 'robot-eva');

  // SetBgImage("/png/bg-for-statistic.png", 'bg-for-statistic');

  // SetBgImage("/png/Rectangle_103.png", "Rectangle_103.png");

  // SetBgImage("/png/Rectangle_100.png", "Rectangle_100.png");
  // SetBgImage("/png/Rectangle_3101.png", "Rectangle_3101.png");
  // SetBgImage("/png/Rectangle_1001.png", "Rectangle_1001.png");
  // SetBgImage("/png/Rectangle_102.png", "Rectangle_102.png");
  //#endregion

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
            <p className="text-green-400">{StatisticsData.getAdvisors()}</p>
            <p>Активные торговые советники</p>
          </div>

          {/* second block */}
          <div data-bg-image="Rectangle_3101.png" className="child-centerd">
            <p className="text-green-400">{StatisticsData.getNewConnections()}</p>
            <p>Новых подключений за месяц</p>
          </div>

          {/* third block */}
          <div data-bg-image="Rectangle_102.png" className="child-centerd">
            <p className="text-green-400">{StatisticsData.getTurnoverOfFunds().toString().split("").reduceRight((acum, digit, index) => (index + 1) % 3 === 0 ? (`${acum}.${digit}`) : (acum + digit), "")}$ +</p>
            <p>Оборот средств на счетах наших клиентов</p>
          </div>

          {/* forth block */}
          <div data-bg-image="Rectangle_100.png" className="child-centerd">
            <p className="text-green-400">{StatisticsData.getAverageMonthlyTurnover()}%</p>
            <p>Средний квартальный доход</p>
          </div>
        </div>
      </div>
    </div>

  );
}
