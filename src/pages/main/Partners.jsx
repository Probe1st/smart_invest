import { listAll, ref, getStorage, getDownloadURL } from "firebase/storage";
import { useContext } from "react";
import { Context } from "../..";

export default function Partners() {
  const { app } = useContext(Context);

  let elems = new Array(8).fill(0);
  elems = elems.map((e, i) => {
    return (
      <img className="w-32 h-32 rounded-3xl" key={i} alt="partners logo" />
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

  return (
    <div className="space-y-16 mt-36 w-full">
      <h2 className="mt-10 text-4xl font-bold text-black text-center">
        Наши партнеры
      </h2>
      <div
        className="flex flex-row justify-center space-x-4 w-full py-20 bg-blue-800"
        data-partners-logo
      >
        <div className="flex flex-row justify-between space-x-4 w-2/3">{elems}</div>
      </div>
    </div>
  );
}
