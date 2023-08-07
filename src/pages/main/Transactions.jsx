import { useContext } from "react";
import { Context } from "../..";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

export default function Transactions() {
  const { app } = useContext(Context);

  listAll(ref(getStorage(app), "/transactions")).then((res) => {
      const imgs = document.querySelectorAll("[data-bg-image='logo-bank']");

      res.items.forEach((e, i) => {
        getDownloadURL(ref(getStorage(app), e.fullPath)).then((url) =>
          imgs[i].setAttribute("src", url)
        );
      });
    }).catch((e) => console.log(e));

  let dataForCard = [
    {
      id: randId(),
      sum: randSum(5)
    },
    {
      id: randId(),
      sum: randSum(6)
    },
    {
      id: randId(),
      sum: randSum(5)
    },
    {
      id: randId(),
      sum: randSum(7)
    },
  ];

  getDownloadURL(ref(getStorage(app), "/png/Vector.png")).then(url => {
    const imgs = document.querySelectorAll("[data-bg-image='vetcor-r']");
    imgs.forEach(e => {
      e.setAttribute("src", url)
    })
  })

  dataForCard = dataForCard.map((e, i) => {
    const currency = ['€', 'p', '$', "₸", ]
    return (
      <div className="flex flex-row justify-between items-center w-full px-12 py-2 border-2 border-blue-950 rounded-3xl text-2xl" key={i}>
        <div className="flex flex-row justify-between items-center space-x-8">
          <img className="w-20 h-20 " alt="" data-bg-image='logo-bank'/>
          <p className="font-semibold">ID***{e.id}</p>
        </div>

        <img className="w-14 h-10" alt="" data-bg-image='vetcor-r'/>

        <div>
          <p>+ <span className="font-semibold text-blue-500">{e.sum}</span> {currency[i]}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-rows-4 gap-y-5 mt-28 w-2/3 text-black">
      {dataForCard}
    </div>
  )
}

function randId() {
  let id = (10**4) * Math.random();
  return id.toFixed(0);
}

function randSum(multiplier) {
  let sum = (10**multiplier) * Math.random();
  return sliceNumber(sum.toFixed(0))
}

function sliceNumber(num) {
  num = num.toString();

  if(num.length < 7) {
    num = num.split("");
    num.splice(-3, 0, " ");
    return num.join("")
  }else if(num.length < 9) {
    num = num.split("");
    num.splice(-3, 0, " ");
    num.splice(-7, 0, " ");    
    return num.join("")
  }

  return num
}