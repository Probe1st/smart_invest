import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";

export default function Main() {
  return (
    <div className="flex flex-col items-center w-2/3 mt-16 space-y-24">
      <Products />

      <Quations />

      <About />

      <Partners />
    </div>
  );
}

function CardOfProducts({ id }) {
  return (
    <div
      className="flex flex-col items-center space-y-5 bg-slate-800 rounded-2xl px-7 py-5 w-72"
      id={id}
    >
      {/* photo */}
      <div className="w-28 h-28 bg-black rounded-full"></div>

      {/* name */}
      <p>Name</p>

      <p className="text-3xl text-sky-400">Feature</p>

      {/* disc */}
      <p className="text-sm text-slate-500 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        possimus quidem corporis incidunt ex tempora vero aperiam maiores
        nesciunt tempore!
      </p>
    </div>
  );
}

function Products() {
  let cards = ["", "", ""].map((e, i) => {
    return <CardOfProducts key={`product${i}`} />;
  });

  return (
    <div className="space-y-7">
      <h2 className="text-2xl">Роботы</h2>

      <div className="flex flex-wrap justify-around gap-16">{cards}</div>
    </div>
  );
}

function Quations() {
  return (
    <div className="w-2/3 bg-slate-800 p-5 rounded-2xl space-y-5">
      <div>
        <p>
          Есть вопросы? Можете написать свой вопрос в{" "}
          <a href="sdv" className="text-sky-400 hover:underline cursor-pointer">
            чате в телеграме
          </a>{" "}
          или заполнить форму ниже.
        </p>
      </div>

      <form className="flex flex-col items-center space-y-3">
        <InputForm
          className="w-full"
          type="email"
          id="email"
          placeholder="почта"
        />
        <textarea
          className="w-full min-h-[10em] resize-none bg-gray-700 rounded-xl px-5 py-3 items-center outline-none text-slate-200"
          type="text"
          id="message"
          placeholder="Ваш вопрос"
        />

        <SubmitButton text="отправить" />
      </form>
    </div>
  );
}

function About() {
  return (
    <div className="space-y-10">
      <article>
        <h3 className="text-2xl font-bold ">О НАС</h3>

        <div className="whitespace-pre-line mt-5">
          SMART INVEST - ведущая компания, предоставляющая передовые
          инвестиционные услуги и интеллектуальные решения. Мы специализируемся
          на разработке инновационных стратегий инвестирования и предлагаем
          клиентам индивидуальный подход к достижению их финансовых целей.
          <br />
          <br />
          это ведущая компания, специализирующаяся на интеллектуальных
          инвестиционных решениях. Наше название SMART INVEST отражает нашу
          философию и подход к инвестированию - мы стремимся быть умными,
          методичными, аналитичными, ответственными и технологически передовыми.
          <br />
          <br />
          Мы команда экспертов и специалистов в области финансов и инвестиций.
          Наша миссия - помочь Нашим клиентам достичь финансового успеха и
          финансовой независимости. Мы предоставляем передовые инвестиционные
          инструменты и стратегии, основанные на интеллектуальных алгоритмах и
          анализе данных.
          <br />
          <br />
          Наши инвестиционные решения основаны на методах, которые максимизируют
          прибыль и минимизируют риски. Мы применяем передовые технологии
          искусственного интеллекта и машинного обучения для точного
          прогнозирования рыночных тенденций и принятия рациональных
          инвестиционных решений.
          <br />
          <br />
          Мы гордимся нашей чрезвычайной ответственностью перед Нашими клиентами
          и стремимся к долгосрочным и взаимовыгодным отношениям. Наша команда
          состоит из опытных финансовых аналитиков, трейдеров и инвестиционных
          консультантов, которые обеспечивают профессиональное сопровождение и
          поддержку на каждом этапе инвестиционного процесса.
          <br />
          <br />
          В SMART INVEST мы понимаем, что каждый клиент уникален и имеет свои
          финансовые цели. Поэтому мы предлагаем индивидуальный подход,
          разработку персонализированных инвестиционных стратегий и постоянный
          мониторинг портфеля.
          <br />
          <br />
          Если Вы ищете надежного партнера для реализации своих финансовых целей
          и желаете использовать передовые инвестиционные решения, то SMART
          INVEST - Ваш идеальный выбор. Доверьтесь нам и развивайте свои
          инвестиции с умом и успехом.
        </div>
      </article>

      <article>
        <h3 className="text-2xl font-bold ">ПОЧЕМУ НУЖНО РАБОТАТЬ С НАМИ</h3>

        <div className="whitespace-pre-line mt-5">
          Почему стоит использовать наши услуги и сотрудничать с нами? Вот
          несколько причин:
          <br />
          <br />
          Экспертиза и опыт: Наша команда состоит из опытных финансовых
          аналитиков, трейдеров и инвестиционных консультантов с многолетним
          опытом работы на финансовых рынках. Мы обладаем глубокими знаниями и
          навыками, чтобы помочь вам принимать осознанные и стратегические
          инвестиционные решения.
          <br />
          <br />
          Интеллектуальные решения: Мы используем передовые технологии
          искусственного интеллекта и машинного обучения для анализа рынка,
          прогнозирования тенденций и определения оптимальных инвестиционных
          возможностей. Наши интеллектуальные алгоритмы помогут вам принимать
          обоснованные решения и максимизировать вашу прибыль.
          <br />
          <br />
          Персонализированный подход: Мы понимаем, что каждый клиент имеет
          уникальные финансовые цели, временные рамки и уровень риска. Поэтому
          мы разрабатываем индивидуальные инвестиционные стратегии, учитывая
          ваши потребности и предпочтения. Мы обеспечиваем постоянный мониторинг
          и регулярные обновления, чтобы вы всегда были в курсе происходящего и
          могли принимать информированные решения.
          <br />
          <br />
          Безопасность и надежность: Мы придерживаемся высоких стандартов
          безопасности и конфиденциальности. Ваша информация и ваши средства
          защищены надежными технологиями и протоколами. Мы стремимся к
          долгосрочным и взаимовыгодным отношениям с нашими клиентами, и ваше
          доверие - наш приоритет.
          <br />
          <br />
          Успех и результаты: Мы гордимся нашими достижениями и успешной
          историей работы. Наши клиенты достигают финансовый успех благодаря
          нашим инвестиционным стратегиям и рекомендациям. Мы предоставляем
          доказанные результаты и постоянно работаем над улучшением наших услуг
          и алгоритмов.
          <br />
          <br />
          Выбирая SMART INVEST, вы выбираете не только передовые технологии
          автоматической торговли, роботов и торговых советников, но и надежного
          партнера, который поможет вам достичь финансового успеха и личной
          финансовой свободы.
        </div>
      </article>
    </div>
  );
}

function CardOfPartner({ id }) {
  return (
    <div
      className="flex flex-col items-center space-y-5 bg-slate-800 rounded-2xl px-7 py-5 w-72"
      id={id}
    >
      {/* photo */}
      <div className="w-28 h-28 bg-black rounded-full"></div>

      {/* name */}
      <p>Name</p>

      {/* disc */}
      <p className="text-sm text-slate-500 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        possimus quidem corporis incidunt ex tempora vero aperiam maiores
        nesciunt tempore!
      </p>
    </div>
  );
}

function Partners() {
  const cards = ["", "", "", "", "", ""].map((e, i) => {
    return <CardOfPartner key={`partner${i}`} />;
  });

  return (
    <div className="space-y-7">
      <h2 className="text-2xl">Наши спонсоры</h2>

      <div className="flex flex-wrap gap-y-16 justify-around">
        {cards}
      </div>
    </div>
  );
}
