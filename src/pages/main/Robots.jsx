import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { useContext } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from '../..';

export default function Robots() {
  const { app } = useContext(Context);

  let slides = [
    {
      header: "SmartInvestPro",
      disc: " Уникальный алгоритм, специализирующийся на EUR/USD паре, с доходностью до 120% в квартал. Этот робот разработан для тех, кто стремится к максимальным результатам и хочет получать высокую прибыль в короткие сроки на валютном рынке."
    },
    {
      header: "OptiGrow",
      disc: "Продвинутый торговый советник с использованием нейронных сетей, предоставляющий доходность от 15% до 50% на паре EUR/USD. OptiGrow представляет собой идеальное решение для инвесторов, желающих диверсифицировать свои инвестиции и получать стабильную прибыль среднего уровня."
    },
    {
      header: "TradeMastery",
      disc: "Эффективный профессиональный советник, специализирующийся на паре GBP/USD, и обеспечивающий стабильный доход от 15%. TradeMastery - идеальный выбор для трейдеров, желающих минимизировать риски и получать устойчивый доход на долгосрочной основе."
    }
  ];

  slides.push(...slides);

  slides = slides.map((e, i) => {
    return (
      <SwiperSlide key={"robot-" + i}>
        <img data-bg-image="robot" alt="" />

        <h3 className='text-2xl font-semibold'>{e.header}</h3>

        <p>{e.disc}</p>
      </SwiperSlide>
    )
  });

  listAll(ref(getStorage(app), "/robots")).then(res => {
    const imgs = document.querySelectorAll("[data-bg-image='robot']");

    res.items.forEach(async (e, i) => {
      imgs[i].setAttribute("src", await getDownloadURL(e))
    });

    res.items.forEach(async (e, i) => {
      imgs[i + 3].setAttribute("src", await getDownloadURL(e))
    });
  })

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      modules={[Autoplay]}
      className='robots-swiper mt-52 w-full'
      centeredSlides={true}
      autoplay={{
        enabled: true,
        delay: 3000,
      }}
    >
      {slides}
    </Swiper>
  );
}
