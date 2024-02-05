import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { useContext, useEffect } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from '../..';
import SetBgImage from '../../components/SetBgImage';
import { LINK_TO_MAIN_RESOURCE } from '../../utils/consts';
import { Link } from 'react-router-dom';

export default function Robots() {
  const { app } = useContext(Context);

  let slides = [
    {
      header: "TradeAlertPro",
      disc: "Получай преимущество\n Эта подписка предоставляет вам доступ к лайв торговым ситуациям, которые будут отправляться непосредственно в ваш ЛС в Телеграмме. Забудьте о необходимости проводить множество часов анализируя графики и сигналы – наш робот сделает всю работу за вас. Подписка на TradeAlert Pro – это надежный путь к оптимизации вашей торговли и увеличению шансов на успех на финансовых рынках.",
      price: "120$"
    },
    {
      header: "SmartInvestPro",
      disc: " Уникальный алгоритм, специализирующийся на EUR/USD паре, с доходностью до 120% в квартал. Этот робот разработан для тех, кто стремится к максимальным результатам и хочет получать высокую прибыль в короткие сроки на валютном рынке.",
      price: "199$"
    },
    {
      header: "OptiGrow",
      disc: "Продвинутый торговый советник с использованием нейронных сетей, предоставляющий доходность от 15% до 50% на паре EUR/USD. OptiGrow представляет собой идеальное решение для инвесторов, желающих диверсифицировать свои инвестиции и получать стабильную прибыль среднего уровня.",
      price: "75$"
    },
    {
      header: "TradeMastery",
      disc: "Эффективный профессиональный советник, специализирующийся на паре GBP/USD, и обеспечивающий стабильный доход от 15%. TradeMastery - идеальный выбор для трейдеров, желающих минимизировать риски и получать устойчивый доход на долгосрочной основе.",
      price: "95$"
    },
  ];

  slides.push(...slides);

  slides = slides.map((e, i) => {
    return (
      <SwiperSlide key={"robot-" + i} data-bg-image="bg-robot-active">
        <img className='h-[10rem]' data-bg-image="robot" alt="" />

        <h3 className='text-2xl font-semibold'>{e.header}</h3>

        <p className='text-sm w-11/12 my-auto'>{e.disc}</p>

        <div className='flex flex-col items-center justify-end w-full flex-grow'>
          <Link to={LINK_TO_MAIN_RESOURCE} className='bg-white text-blue-600 w-2/3 font-bold text-3xl px-3 py-1 rounded-2xl'>Купить</Link>
        </div>
      </SwiperSlide>
    )
  });

  useEffect(() => {
    listAll(ref(getStorage(app), "/robots")).then(res => {
      const imgs = document.querySelectorAll("[data-bg-image='robot']");

      res.items.forEach(async (e, i) => {
        imgs[i].setAttribute("src", await getDownloadURL(e))
      });

      res.items.forEach(async (e, i) => {
        imgs[i + 4].setAttribute("src", await getDownloadURL(e))
      });
    });
  }, [app]);

  // добавление фона на всех ботов
  SetBgImage("/png/bg-robot-active.png", 'bg-robot-active', true);

  return (
    <>
      <h2 className='mt-20 text-4xl font-bold text-blue-900 text-center'>Каталог наших самых продуктивных роботов</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        className='robots-swiper mt-14 w-2/3'
        centeredSlides={true}
        autoplay={{
          enabled: true,
          delay: 3000,
        }}
      >
        {slides}
      </Swiper>
    </>
  );
}