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

  return (
    <div className="card-profile">
      {/* Ваш торговый советиник */}
      <YourRobot />

      {/* Баланс */}
      <Balance />

      {/* реферал */}
      <Referral />

      {/* пополнить */}
      <Replenish />

      <button onClick={() => { signOut(auth); navigate('/login') }}>выйти</button>
    </div>
  );
}

function YourRobot() {
  return (
    <div>
      <img data-bg-image="robot" alt="" />

      <h2>Ваш торговый советник</h2>

      <div className="status-bar">
        <p data-robot>Не приобретено</p>
      </div>
    </div>
  )
}

function Balance() {
  return (
    <div>
      <img data-src-image="bank" alt="" />

      <h2>На вашем счету</h2>

      <div className="status-bar">
        <p data-balance></p>
      </div>
    </div>
  )
}

function Referral() {
  return (
    <form>
      <img data-src-image="smart-human" alt="" />

      <div className="status-bar">
        <p>Пригласи 3 реферала и получи <br />торгового советника бесплатно</p>
      </div>

      <input className="status-bar outline-none" type="text" name="token" id="token" />
    </form>
  )
}

function Replenish() {
  return (
    <div>
      <h2 className="justify-self-start text-2xl">Пополнить баланс</h2>

      <div className="flex flex-col justify-between space-y-2 w-full">
        <p className="text-justify">Для получения информации об удобных вариантах оплаты обратитесь к нашему персональному менеджеру. 
          Он предоставит вам индивидуальные реквизиты, и закрепит индивидуального робота.</p>
      </div>

      <Link to={"//example.com"} target="_blank" className={"bg-blue-500 px-20 py-2 w-fit rounded-3xl text-2xl"} >Связаться</Link>
    </div>
  )
}