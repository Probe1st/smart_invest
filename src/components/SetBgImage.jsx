import { getDownloadURL, ref, getStorage } from 'firebase/storage';
import { useContext } from 'react';
import { Context } from '..';

export default function SetBgImage(link = "", nameImage = "", isArray = false) {
  const { app } = useContext(Context);

  getDownloadURL(ref(getStorage(app), link)).then(
    (url) => {
      if (isArray) {
        const imgs = document.querySelectorAll(`[data-bg-image='${nameImage}']`);
        
        for (let i = 0; i < imgs.length; i++) {
          imgs[i].style.backgroundImage = `url(${url})`;
        }

      } else {
        const img = document.querySelector(`[data-bg-image='${nameImage}']`);
        img.style.backgroundImage = `url(${url})`
      }
    }
  );
}