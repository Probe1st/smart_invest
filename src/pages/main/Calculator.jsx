import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useContext } from "react";
import { Context } from "../..";

export default function Calculator() {
  const { app } = useContext(Context);

  getDownloadURL(ref(getStorage(app), "/png/calculator-img.png")).then(
    (url) => {
      const img = document.querySelector('[data-bg-image="calculator"]');
      img.setAttribute("src", url);
    }
  );

  return (
    <form onSubmit={e => handleSubmit(e)} className="calculator">
      {/* ввод начального взноса и расчет */}
      <div className="grid grid-cols-3 gap-x-14">
        <div
          data-menu-calculator
          className="grid grid-rows-3 gap-y-7 items-center"
        >
          <p className="text-black  font-semibold">
            Узнать свой потенциал дохода
          </p>

          <input required type="text" className="button" />

          <input
            onClick={(e) => calculate(e)}
            className="button py-4 bg-slate-300"
            value={"Рассчитать"}
            type="submit"
          />
        </div>

        <div className="border-2 border-blue-900 rounded-3xl"></div>

        <div>
          <img alt="" data-bg-image="calculator" />
        </div>
      </div>

      {/* выбор плана */}
      <div data-menu-calculator className="grid grid-cols-3 gap-x-14 ">
        <input
          required
          id="conservative"
          onChange={(e) => selectPlane(e)}
          type="radio"
          name="plane"
          hidden
          value="conservative"
          className="button"
        />
        <label htmlFor="conservative" className="button">
          Консервативный
        </label>

        <input
          required
          id="moderate"
          onChange={(e) => selectPlane(e)}
          type="radio"
          name="plane"
          hidden
          value="moderate"
          className="button"
        />
        <label htmlFor="moderate" className="button">
          Умеренный
        </label>

        <input
          required
          id="agressive"
          onChange={(e) => selectPlane(e)}
          type="radio"
          name="plane"
          hidden
          value="agressive"
          className="button"
        />
        <label htmlFor="agressive" className="button">
          Агрессивный
        </label>
      </div>
    </form>
  );
}

function handleSubmit(e) {
  e.preventDefault()
}

function calculate(e) {
  // e.preventDefault();
  const input = e.currentTarget
    .closest("[data-menu-calculator]")
    .querySelector("input");
  let initPayment = input.value;

  const isValid = validatePayment(initPayment);
  if (isValid === false) {
    input.style.border = "solid 2px red";
  } else if (isValid === true) {
    input.style.border = "solid 2px rgb(30 58 138)";
  }
}

function validatePayment(sum) {
  let num = +sum;

  if (isNaN(num)) return false; //если не число
  if (num < 100) return false; // если меньше 100

  return true;
}

function selectPlane(e) {
  const menu = e.currentTarget.closest("[data-menu-calculator]");
  const curInput = e.currentTarget;
  const curLabel = menu.querySelector(
    `label[for='${curInput.getAttribute("id")}']`
  );
  const prevLabel = menu.querySelector("label[data-active-plane]");

  curLabel.setAttribute("data-active-plane", "");
  if (prevLabel) prevLabel.removeAttribute("data-active-plane");
}