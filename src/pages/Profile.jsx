import { useContext } from "react";
import { Context } from "..";
import { ref, getDownloadURL, getStorage } from "firebase/storage";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import LinkButton from '../components/LinkButton';

export default function Profile() {
  const { app, auth } = useContext(Context);

  setDataUser(app, auth);

  getDownloadURL(ref(getStorage(app), "/profile/bank.png")).then((url) => {
    const img = document.querySelector("[data-bg-image='bank']");
    img.setAttribute("src", url);
  });

  getDownloadURL(ref(getStorage(app), "/profile/smart-human.png")).then(
    (url) => {
      const img = document.querySelector("[data-bg-image='smart-human']");
      img.setAttribute("src", url);
    }
  );

  return (
    <div className="card-profile">
      {/* Ваш торговый советиник */}
      <div>
        <img data-bg-image="robot" alt="" />

        <h2>Ваш торговый советник</h2>

        <div className="status-bar">
          <p data-robot>имя советника</p>
        </div>
      </div>

      {/* Баланс */}
      <div>
        <img data-bg-image="bank" alt="" />

        <h2>На вашем счету</h2>

        <div className="status-bar">
          <p data-balance></p>
        </div>
      </div>

      {/* реферал */}
      <form>
        <img data-bg-image="smart-human" alt="" />

        <div className="status-bar">
          <p>Пригласи 3 реферала и получи <br />торгового советника бесплатно</p>
        </div>

        <input className="status-bar outline-none" type="text" name="token" id="token" />
      </form>

      {/* пополнить */}
      <div>
        <h2 className="justify-self-start text-2xl">Пополнить баланс</h2>

        <div className="flex flex-col justify-between space-y-2 w-full text-black">
          <LinkButton className={"w-full bg-purple-300 px-5 py-1 rounded-full"} text={"Visa / MasterCard"} />
          <div className="flex flex-row justify-between space-x-2">
            <LinkButton className={"bg-white px-4 py-1 w-full rounded-3xl"} text={"Btc"} />
            <LinkButton className={"bg-white px-4 py-1 w-full rounded-3xl"} text={"Usdt"} />
          </div>
        </div>

        <LinkButton className={"bg-blue-500 px-20 py-2 w-fit rounded-3xl text-2xl"} text={"Пополнить"} />
      </div>

      <button onClick={() => {signOut(auth); window.location.href = "/login"}}>выйти</button>
    </div>
  );
}

async function setDataUser(app, auth) {
  const snap = await getDoc(
    doc(getFirestore(app), "/users/", auth.currentUser.email)
  );
  const data = snap.data();

  const balance = document.querySelector("[data-balance]");
  const { currency, number } = data.balance;
  balance.innerHTML = number + currency;

  if(data.purshe) {
    let robot = await getDoc(doc(getFirestore(app), data.purshe));

    const robotImg = robot.data().linkImage;

    const img = document.querySelector("[data-bg-image='robot']");
    img.setAttribute("src", robotImg);
  
    const name = document.querySelector("[data-robot]");
    name.innerHTML = robot.id;
  }
}