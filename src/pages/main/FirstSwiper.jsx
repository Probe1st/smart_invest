import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { useContext } from "react";
import { Context } from "../..";

export default function FirstSwiper() {
  const { app } = useContext(Context);

  let dataForCard = [
    {
      header: "Побиты Собственные Рекорды!",
      disc: "В этом году мы с радостью сообщаем о том, что наша компания превзошла свои ожидания и установила новые рекорды по привлечению новых пользователей и среднему обороту средств наших участников. Это стало возможным благодаря вашей поддержке и доверию к нашим продуктам. Спасибо, что оказываете нам доверие и делаете наш успех возможным",
    },
    {
      header: "Торговый Робот: Умный Автоматизированный Инструмент!",
      disc: "Добро пожаловать в мир нашего уникального торгового робота! Наш интеллектуальный алгоритм обеспечивает автоматизированную и успешную торговлю на форексе. Позвольте роботу работать на вашей стороне и достичь новых высот в доходе! Присоединяйтесь к нашему сообществу успешных трейдеров и дайте возможность нашему роботу поразить вас своими результатами!",
    },
    {
      header: "Мы - Единая Команда!",
      disc: "Хотим поделиться некоторыми запоминающимися моментами, которые мы вместе с вами создали в этом году. От наших успешных вебинаров и обучающих мероприятий до встреч с нашими клиентами и победителей наших розыгрышей! Благодарим вас за ваше участие и поддержку - вместе мы добиваемся большего и создаем яркие моменты",
    },
    {
      header: "Мы Признаны Ведущими!",
      disc: "Нашу компанию отметили как лидера в сфере торговых роботов! Мы гордимся признанием нашего труда и преданности нашим клиентам. Также нам посчастливилось сотрудничать с влиятельными персонами и звездами, которые доверяют нашим продуктам и делают их частью своего успеха! Спасибо, что делаете нашу компанию лучшей в своем классе",
    },
  ];

  dataForCard = dataForCard.map((e, i) => {
    return (
      <SwiperSlide data-bg-image="swiper" className="bg-blue-950 opacity-90 bg-center bg-no-repeat bg-cover bg-blend-soft-light" key={i}>
        <div className="simple-card">
          <h2>{e.header}</h2>
          <p>{e.disc}</p>
        </div>
      </SwiperSlide>
    );
  });  

  listAll(ref(getStorage(app), "/firstSliderMain/"))
    .then((res) => {
      const elems = document.querySelectorAll(`[data-bg-image='swiper']`);

      res.items.forEach((e, i) => {
        getDownloadURL(ref(getStorage(app), `/${e.fullPath}`)).then((url) => {
          elems[i].style.backgroundImage = `url(${url})`
        });
      });
    })
    .catch((e) => console.log(e));

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      rewind={true}
      modules={[Pagination, Autoplay]}
      className="firstSwiper"
      autoplay={{
        enabled: true,
        delay: 5000,
        disableOnInteraction: false
      }}
    >
      {dataForCard}
    </Swiper>
  );
}
