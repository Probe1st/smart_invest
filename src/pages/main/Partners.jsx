import { listAll, ref, getStorage, getDownloadURL } from "firebase/storage";
import { useContext } from "react";
import { Context } from "../..";
import SetBgImage from "../../components/SetBgImage";

export default function Partners() {
  const { app } = useContext(Context);

  let elems = [
    "https://alfaforex.ru/",
    "https://www.fxpro-finance.org/",
    "https://pepperstone.com/en-af/",
    "https://admiralmarkets.com/",
    "https://alpari.com/",
    "https://www.finam.ru/",
    "https://libertex.org/",
    "https://www.forex.com/",
  ];

  elems = elems.map((e, i) => {
    return (
      <a key={i} href={e}>
        <img className="w-32 h-32 rounded-3xl" alt="partners logo" />
      </a>
    );
  });

  listAll(ref(getStorage(app), "/partners/"))
    .then((res) => {
      const elems = document.querySelectorAll('[alt="partners logo"]');

      res.items.forEach((e, i) => {
        getDownloadURL(ref(getStorage(app), `/${e.fullPath}`)).then((url) => {
          elems[i].setAttribute("src", url);
        });
      });
    })
    .catch((e) => console.log(e));

  SetBgImage("/png/bg-partners.png", "bg-partners");
  
  return (
    <div className="space-y-16 mt-16 w-full">
      <h2 className="mt-10 text-4xl font-bold text-black text-center">
        Наши партнеры
      </h2>
      <div
        className="flex flex-row justify-center space-x-4 w-full py-20 bg-cover bg-center bg-no-repeat bg-blue-800"
        data-partners-logo
        data-bg-image='bg-partners'
      >
        <div className="flex flex-wrap items-center justify-around gap-4 w-2/3">
          {elems}
        </div>
      </div>
    </div>
  );
}
