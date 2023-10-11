import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useContext } from "react";
import { Context } from "../..";
import SetSrcImage from "../../components/SetSrcImage";

export default function Calculator() {
  const { app } = useContext(Context);

  SetSrcImage("/png/calculator-img.png", "calculator");


  return (
    <form onSubmit={(e) => handleSubmit(e)} className="calculator">
      {/* ввод начального взноса и расчет */}
      <div className="grid grid-cols-3 gap-x-14">
        <div
          data-menu-calculator
          className="grid grid-rows-3 gap-y-7 items-center"
        >
          <p className="text-black  font-semibold">
            Узнать свой потенциал дохода
          </p>

          <input required type="text" placeholder="100" className="button bg-inherit" />

          <input
            onClick={(e) => calculate(e, app)}
            className="button py-4 bg-[#16338E59]"
            value={"Рассчитать"}
            type="submit"
          />
        </div>

        <div data-video="graphic" className="flex flex-row h-full border-2 border-blue-900 rounded-3xl bg-no-repeat bg-cover bg-right" alt=""></div>

        <div>
          <img alt="" data-src-image="calculator" />
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
  e.preventDefault();
}

function calculate(e, app) {
  e.preventDefault();
  const input = e.currentTarget
    .closest("[data-menu-calculator]")
    .querySelector("input");
  let initPayment = input.value;

  const isValid = validatePayment(initPayment);
  if (isValid === false) {
    input.style.border = "solid 2px red";
    return;
  } else if (isValid === true) {
    input.style.border = "solid 2px rgb(30 58 138)";
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }  

  let randNumb = () => getRandomArbitrary(1, 3).toFixed(0);
  
  getDownloadURL(ref(getStorage(app), `/graphics/graphic-${randNumb()}-${randNumb()}.gif`)).then(
    (url) => {
      const video = document.querySelector("[data-video='graphic']");
      // video.setAttribute("src", url);
      video.style.backgroundImage = `url(${url})`
    }
  );
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
