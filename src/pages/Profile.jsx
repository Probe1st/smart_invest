import { useContext, useEffect } from "react";
import { Context } from "..";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import SetSrcImage from "../components/SetSrcImage";

export default function Profile() {
  const { app, auth } = useContext(Context);
  const user = useAuthState(auth);
  const navigate = useNavigate();

  // redirect to profile if user is NOT exists 
  useEffect(() => {
    if (!user[0]) {
      navigate("/login");
    }
  }, [user, navigate]);

  setDataUser(app, auth);

  SetSrcImage("/profile/bank.png", 'bank');

  SetSrcImage("/profile/smart-human.png", 'smart-human');

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
        <img data-src-image="bank" alt="" />

        <h2>На вашем счету</h2>

        <div className="status-bar">
          <p data-balance></p>
        </div>
      </div>

      {/* реферал */}
      <form>
        <img data-src-image="smart-human" alt="" />

        <div className="status-bar">
          <p>Пригласи 3 реферала и получи <br />торгового советника бесплатно</p>
        </div>

        <input className="status-bar outline-none" type="text" name="token" id="token" />
      </form>

      {/* пополнить */}
      <div>
        <h2 className="justify-self-start text-2xl">Пополнить баланс</h2>

        <div className="flex flex-col justify-between space-y-2 w-full text-black">
          <Link className={"w-full bg-purple-300 px-5 py-1 rounded-full"} >Visa / MasterCard</Link>
          <div className="flex flex-row justify-between space-x-2">
            <Link className={"bg-white px-4 py-1 w-full rounded-3xl"} >Btc</Link>
            <Link className={"bg-white px-4 py-1 w-full rounded-3xl"} >Usdt</Link>
          </div>
        </div>

        <Link className={"bg-blue-500 px-20 py-2 w-fit rounded-3xl text-2xl"} >Пополнить</Link>
      </div>

      <button onClick={() => { signOut(auth); navigate('/login') }}>выйти</button>
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

  if (data.purshe) {
    let robot = await getDoc(doc(getFirestore(app), data.purshe));

    const robotImg = robot.data().linkImage;

    const img = document.querySelector("[data-bg-image='robot']");
    img.setAttribute("src", robotImg);

    const name = document.querySelector("[data-robot]");
    name.innerHTML = robot.id;
  }
}