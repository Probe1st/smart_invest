import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { Context } from "../..";
import { useContext } from "react";

export default function Principles() {
  const { app } = useContext(Context);

  let cardsData = [
    {
      title: "Эксклюзивные алгоритмы",
      disc: "Наши эксклюзивные алгоритмы - передовые торговые решения, разработанные командой экспертов, сочетающие искусственный интеллект и передовые технологии. Они обеспечивают оптимальную доходность и минимизацию рисков на рынке Форекс, открывая новые возможности для успешных инвестиций. Вместе с S.M.A.R.T. I.N.V.E.S.T., ваш успех в мире инвестирования становится реальностью."
    },
    {
      title: "Риски и Доход",
      disc: "Вы владеете контролем над рисками и доходами. Наши продукты предлагают разнообразные стратегии, позволяющие выбрать оптимальный баланс между уровнем риска и потенциальной доходностью. Независимо от вашего опыта, вы можете легко настроить наши роботы в соответствии с вашими инвестиционными целями. Позвольте S.M.A.R.T. I.N.V.E.S.T. максимизировать вашу прибыль и минимизировать риски на рынке Форекс."
    },
    {
      title: "Клиент всегда прав",
      disc: "Мы гарантируем высококачественное обслуживание, конфиденциальность данных. Команда наших опытных специалистов всегда рядом, готова предоставить вам всестороннюю поддержку. Мы доступны для вас 24/7, чтобы ответить на ваши вопросы и помочь вам на каждом шаге инвестирования."
    },
    {
      title: "Удобно и просто",
      disc: "Все технические обязательства мы берём на себя ! для вас беззаботность и комфорт. Мы упрощаем каждый шаг вашего инвестирования: от оплаты робота до контроля сделок через удобное мобильное приложение. Мы ценим ваше время и доверие, поэтому всегда гарантируем надежность и быстрое реагирование на ваши запросы. Придайте своим инвестициям новый уровень с нашим удобным сотрудничеством!"
    },
  ]

  cardsData = cardsData.map((e, i) => {
    return (
      <div className="flex flex-col pt-5 pb-10 px-4 items-center justify-start bg-center bg-no-repeat bg-cover bg-blue-800 rounded-2xl" data-bg-image='bg-principles' data-principle key={i}>
        <img className="h-[10rem]" alt="" />
        <div>
          <h2 className="font-bold min-h-[3.6rem] line-clamp-2 text-xl mb-3">{e.title}</h2>
          <p data-unwrap className="text-sm overflow-hidden line-clamp-6 my-auto">{e.disc}</p>
        </div>
        <button onClick={e => { e.currentTarget.closest("div").querySelector("[data-unwrap]").classList.toggle("line-clamp-6"); if (e.currentTarget.innerHTML !== "Свернуть") { e.currentTarget.innerHTML = "Свернуть" } else { e.currentTarget.innerHTML = "Читать еще..." }; }} className="bg-white mt-5 rounded-xl text-blue-800 font-semibold px-5 py-1">Читать еще...</button>
      </div>
    );
  });

  listAll(ref(getStorage(app), "/principles/"))
    .then((res) => {
      const elems = document.querySelectorAll(`[data-principle] img`);

      res.items.forEach((e, i) => {
        getDownloadURL(ref(getStorage(app), `/${e.fullPath}`)).then((url) => {
          elems[i].setAttribute("src", url);
        });
      });
    })
    .catch((e) => console.log(e));

  return (
    <div className="grid grid-cols-4 items-start gap-x-12 w-2/3 mt-20 text-center text-sm">
      {cardsData}
    </div>
  )
}
