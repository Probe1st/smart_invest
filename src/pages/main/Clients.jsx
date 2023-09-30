import { useContext } from "react";
import { Context } from "../..";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

export default function Clients() {
  const { app } = useContext(Context);

  listAll(ref(getStorage(app), "/clients")).then(res => {
    const imgs = document.querySelectorAll("[data-src-image='ava']");

    res.items.forEach((e, i) => {
      getDownloadURL(ref(getStorage(app), e.fullPath)).then(url => {
        imgs[i].setAttribute('src', url);
      });
    })
  }).catch(e => console.log(e));

  let dataForCard = [
    {
      header: "Екатерина Васильевна",
      disc: "Много слышала про дополнительный заработок в интернете. Вопрос дополнительного источника дохода актуален всегда. Поэтому стала изучать тему инвестиций и трейдинга. Но учёба занимает ОЧЕНЬ много времени, и я стала не успевать. Друг посоветовал установить торгового робота. Я загуглила и поняла, что это тренд нашего времени! Всем, кто хочет успешно совмещать универ и дополнительный заработок, торговый советник в помощь!",
    },
    {
      header: "Илья Владимирович",
      disc: "Очевидно, что будущее трейдинга за роботами. Я сам в рынке очень давно. И вижу, что автоматизированная торговля - тренд последнего десятилетия. Во-первых, робот экономит время. Установил и наблюдай. Во-вторых, искусственный интеллект бережёт человеческие нервы. А это важно! В-третьих, я сам умею разрабатывать торговых советников и понимаю, как устроена алгоритмическая торговля. С полной уверенностью могу сказать, что роботы дают профит. До 50% в месяц смело!",
    },
    {
      header: "Михаил Сергеевич",
      disc: "Тема инвестиций, пассивного дохода меня интересовали всегда. Но я увлёкся программированием. Однако, финансовые рынки продолжали оставаться моим вторым источником дохода. IT-проекты, в которых я участвовал, становились всё масштабнее, времени на трейдинг оставалось всё меньше. И поэтому я установил торгового робота год назад. Причём, я его тогда покупал, и он очень хорошо окупился. Теперь я поставил на свой второй счёт нового – SmartInvest. Результатом доволен. Всем рекомендую!",
    },
  ];

  dataForCard = dataForCard.map((e, i) => {
    return (
      <div className="flex flex-col items-center justify-between p-8 border-2 border-blue-950 rounded-2xl" key={i}>
        <img className="w-32 h-32 rounded-full" data-src-image="ava" alt="" />

        <div className="text-center mt-10 h-full">
          <h2 className="text-2xl font-bold ">{e.header}</h2>
          <p className="text-sm mt-3">{e.disc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-3 gap-x-10 mt-32 w-2/3 text-black">
      {dataForCard}
    </div>
  )
}
