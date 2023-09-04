import { getDownloadURL, ref, getStorage } from 'firebase/storage';
import { useContext } from 'react';
import { Context } from '..';

export default function SetBgImage(link, nameImage) {
    const { app } = useContext(Context);

    getDownloadURL(ref(getStorage(app), link)).then(
        (url) => {
          const img = document.querySelector(`[data-bg-image='${nameImage}']`);
          img.style.backgroundImage = `url(${url})`
        }
      );
}