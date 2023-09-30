import { useContext } from "react";
import { Context } from "..";
import { getDownloadURL, ref, getStorage } from 'firebase/storage';


export default function SetSrcImage(link = "", nameImage = "", isArray = false) {
  const { app } = useContext(Context);

  getDownloadURL(ref(getStorage(app), link)).then((url) => {
    if (isArray) {
      const imgs = document.querySelectorAll(`[data-src-image='${nameImage}']`);
      
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("src", url);
      }
    } else {
      const img = document.querySelector(`[data-src-image='${nameImage}']`);
      img.setAttribute("src", url);
    }
  });
}