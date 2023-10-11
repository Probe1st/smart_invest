import SetBgImage from "../../components/SetBgImage";
import SetSrcImage from "../../components/SetSrcImage";

export default function HowDoItWorks() {

  SetSrcImage("/png/graphic.png", 'howdoitwork-graphic');

  SetBgImage("/png/money.png", 'money');

  SetBgImage("/png/bg-howdoitworks.png", "bg-howdoitworks")

  return (
    <div className="w-full mt-20 bg-blue-800 bg-no-repeat bg-cover bg-center bg-blend-overlay rounded-2xl" data-bg-image="bg-howdoitworks">
      <div className="flex flex-row space-x-8 mx-auto py-7 w-2/3">
        <img alt="" data-src-image="howdoitwork-graphic" />
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
