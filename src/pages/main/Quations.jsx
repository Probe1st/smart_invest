import { useState } from "react";
import SetBgImage from "../../components/SetBgImage";


let questions = [
  {
    question: "Как это работает ?",
    answer: "Приветствуем! Наши торговые роботы основаны на передовых алгоритмах и анализе рынка. Они автоматически покупают и продают валютные пары на рынке Форекс, стремясь получить прибыль от изменения курсов валют. Вы просто выбираете робота, оформляете покупку, и он начинает торговать за вас."
  },
  {
    question: "Безопасно ли это ?",
    answer: "Абсолютно, ваша безопасность - наш приоритет. Мы сотрудничаем с надежными брокерами и используем современные технологии для защиты ваших данных и средств. Вы контролируете свой торговый счет и можете в любой момент прекратить работу робота."
  },
  {
    question: "Как снимать деньги?",
    answer: "Снять деньги просто. Вы можете выполнить запрос на вывод средств с вашего торгового счета у брокера. Эти деньги будут отправлены на ваш указанный банковский счет или платежную систему. Все выплаты осуществляются в соответствии с правилами брокера.",
  },
  {
    question: "Как мне выбрать брокера ?",
    answer: "Для начала вам понадобится зарегистрироваться на нашем сайте. Затем выберите подходящего робота и оформите покупку. Далее, пополните свой торговый депозит у выбранного вами брокера и наслаждайтесь автоматической торговлей."
  },
  {
    question: "Что нужно чтобы начать?",
    answer: "Для начала вам понадобится зарегистрироваться на нашем сайте. Затем выберите подходящего робота и оформите покупку. Далее, пополните свой торговый депозит у выбранного вами брокера и наслаждайтесь автоматической торговлей."
  }
]

export default function Quations() {
  SetBgImage("/png/map.png", "map");

  return (
    <div className="text-black w-full mt-20">
      <div className="w-2/3 mx-auto">
        <h2 className="font-bold text-3xl">Вопрос-ответ</h2>
      </div>

      <div className="mt-10 flex flex-row items-center justify-between w-2/3 mx-auto">
        <div className="w-2/5">
          {questions.map(e => {
            return <Question text={e} key={e.question} />
          })}
        </div>

        <div data-bg-image="map" className="min-h-[20rem] w-3/5 bg-contain bg-no-repeat bg-center">

        </div>
      </div>
    </div>
  );
}

function Question({ text}) {
  let [showAnswer, setShowAnswer] = useState(false);

  return (
    <div onClick={() => setShowAnswer(!showAnswer)} key={text.question}>
      <div className="w-full mx-auto mt-3">
        <h3 className="cursor-pointer font-semibold">{text.question}</h3>
        <p hidden={!showAnswer} data-answer className="text-base my-5 w-3/5">{text.answer}</p>
      </div>

      <hr className="border-gray-400 mt-1"/>
    </div>
  )
}