import { useContext } from "react";
import { Context } from "..";
import { getDownloadURL, ref, getStorage } from 'firebase/storage';


export default function SetSrcImage(link, nameImage) {
    const { app } = useContext(Context);

    getDownloadURL(ref(getStorage(app), link)).then((url) => {
        const img = document.querySelector(`[data-src-image='${nameImage}']`);
        img.setAttribute("src", url);
      });
}