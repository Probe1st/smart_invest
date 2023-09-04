import LinkButton from "../../components/LinkButton";

export default function WayWithUs() {
  let dataForCard = [
    {
      header: "Создайте заявку",
      disc: "Клиент оставляет заявку или регистрируется на нашем сайте, проявляя интерес к покупке робота. Наш менеджер связывается с клиентом для обсуждения деталей и предоставления необходимой информации.",
    },
    {
      header: "Покупка робота",
      disc: "Клиент выбирает подходящего робота и оплачивает его. Наш менеджер подтверждает заказ и предоставляет дополнительные инструкции.",
    },
    {
      header: "Выбор брокера",
      disc: "Клиент самостоятельно выбирает и регистрирует счет у предпочитаемогоброкера. Это позволяет клиенту иметь полный контроль над своими средствами, избегая передачи средств третьим лицам и обеспечивая безопасность и уверенность в управлении своими инвестициями.",
    },
    {
      header: "Подключение",
      disc: "Мы создаем виртуальный сервер с удаленным столом для клиента, обеспечивая бесперебойную работу робота. Специалисты настраивают и размещают торгового робота на виртуальном сервере.",
    },
    {
      header: "Поддержка и управление",
      disc: "Наша команда специалистов доступна 24/7 для оказания поддержки и ответов на вопросы клиентов. Клиент может управлять своим портфелем инвестиций, вносить изменения или остановить работу робота при необходимости.",
    },
  ];

  dataForCard = dataForCard.map((e, i) => {
    return (
      <div
        key={i}
        className="flex flex-col items-center justify-between w-52 text-center"
      >
        <div className="flex flex-row items-center justify-center text-3xl text-white bg-blue-800 w-16 h-16 rounded-full">
          {i + 1}
        </div>
        <div className="mb-auto mt-3">
          <h2 className="font-bold text-lg">{e.header}</h2>
          <p className="mt-2 text-[0.7rem] leading-4">{e.disc}</p>
        </div>
      </div>
    );
  });

  return (
    <div
      className="
      flex flex-col justify-between items-start w-full h-fit bg-contain bg-no-repeat "
    >
      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/smart-invest-14838.appspot.com/o/png%2Fway.png?alt=media&token=690f8614-b736-4dd1-bd8e-4a739718bf4d)]
        flex flex-row items-center w-full h-[700px] bg-auto bg-top bg-no-repeat">
        <div className="way">{dataForCard}</div>
      </div>

      <LinkButton
        link={"/registration"}
        text={"Подключиться"}
        className={
          "flex w-fit mt-5 mx-auto font-bold rounded-full bg-gradient-to-t from-[#193a9f] to-[#2952cd] py-3 px-5 min-w-[8.4rem]"
        }
      />
    </div>
  );
}