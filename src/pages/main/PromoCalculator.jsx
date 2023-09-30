import SetBgImage from "../../components/SetBgImage";
import SetSrcImage from "../../components/SetSrcImage";

export default function PromoCalculator() {
  SetSrcImage("/png/banknotes.png", "banknotes");

  SetSrcImage("/png/ipoh_touch.png", "ipoh-touch" )

  SetBgImage("/png/bg-promocalculator.png", "bg-promocalculator")

  return (
    <div className="w-full mt-40 bg-blue-950 text-center bg-no-repeat bg-center bg-cover bg-blend-soft-light" data-bg-image="bg-promocalculator">
      <div className="flex flex-row justify-between text-lg w-2/3 mx-auto">
        <div className="flex flex-col justify-between">
          <div></div>
          <p className="font-semibold">Рассчитай свой потенциальный доход, исходя<br /> из результатов предыдущего квартала</p>
          <p className="text-sm mb-5 text-blue-400">Если инвестировать, то с умом</p>
        </div>

        <div className="flex flex-col items-center justify-end w-3/12">
          <img className="relative bottom-16" data-src-image="ipoh-touch" alt="" />
          <img className="absolute" data-src-image="banknotes" alt="" />
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
