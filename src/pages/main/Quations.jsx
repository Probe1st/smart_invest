export default function Quations() {
  let quations = [
    "Как это работает ?",
    "Безопасно ли это ?",
    "Как снимать деньги?",
    "Какой рабочий депозит?",
    "Как мне выбрать брокера ?",
    "Что нужно чтобы начать?"
  ]

  quations = quations.map((e, i) => {
    return (
      <div key={"quation-" + i}>
        <div className="w-2/3 mx-auto mt-3">
          <p className="font-semibold">{e}</p>
        </div>

        <hr className="mt-1"/>
      </div>
    )
  })

  return (
    <div className="text-black w-full mt-44">
      <div className="w-2/3 mx-auto">
        <h2 className="font-bold text-3xl">Вопрос-ответ</h2>
      </div>

      <div className="mt-10">
        {quations}
      </div>
    </div>
  );
}
