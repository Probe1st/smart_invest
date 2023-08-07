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
      <div className="flex flex-col pb-10 px-4 items-center justify-start bg-blue-800 rounded-2xl" data-principle key={i}>
        <img className="h-[11.7rem]" alt="" />
        <div className="">
          <h2 className="font-bold text-2xl mb-3">{e.title}</h2>
          <p className="my-auto">{e.disc}</p>
        </div>
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
    <div className="grid grid-cols-4 gap-x-12 w-2/3 mt-20 text-center text-sm">
      {cardsData}
    </div>
  )
}
