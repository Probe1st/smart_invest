import 'swiper/css';
import FirstSwiper from "./FirstSwiper";
import Calculator from './Calculator';
import Characteristics from './Characteristics';
import Partners from './Partners';
import Principles from './Principles';
import HowDoItWorks from './HowDoItWorks';
import WayWithUs from './WayWithUs';
import PromoCalculator from './PromoCalculator';
import Statistics from './Statistics';
import Robots from './Robots';
import Transactions from './Transactions';
import Clients from "./Clients";
import Quations from "./Quations";
import ReferalNotice from '../../components/ReferalNotice';
import SetSrcImage from '../../components/SetSrcImage';
import SetBgImage from '../../components/SetBgImage';


export default function Main() {
  SetSrcImage("/bgPictures/golden-coin.png", "golden-coin", true); // вставка трех монеток

  SetSrcImage("bgPictures/bank-ethereum.png", "bank-ethereum");
  SetSrcImage("bgPictures/bag-with-money.png", "bag-with-money");
  SetSrcImage("bgPictures/graphic.png", "graphic");

  SetSrcImage("bgPictures/credit-card.png", "credit-card");
  SetSrcImage("bgPictures/gift.png", "gift");
  SetSrcImage("bgPictures/piggy-bank.png", "piggy-bank");

  SetSrcImage("bgPictures/padlock.png", "padlock");
  SetSrcImage("bgPictures/bitcoins.png", "bitcoins");
  SetSrcImage("bgPictures/wallet.png", "wallet");

  SetBgImage("/png/bg-for-principles.png", 'bg-principles', true);

  return (
    <div className="flex flex-col justify-center items-center w-full mt-8">
      <img className='absolute -z-50 opacity-30 top-[50rem] right-[1rem] w-[200px]' data-src-image="golden-coin" alt="" />
      <img className='absolute -z-50 opacity-30 top-[100rem] left-[2rem] w-[200px]' data-src-image="golden-coin" alt="" />
      <img className='absolute -z-50 opacity-30 top-[193rem] right-[15rem] w-[25rem]' data-src-image="golden-coin" alt="" />

      <img className='absolute -z-50 top-[130rem] right-[7rem] w-[20rem]' data-src-image="bank-ethereum" alt="" />
      <img className='absolute -z-50 top-[235rem] left-[20%] w-[25rem]' data-src-image="bag-with-money" alt="" />
      <img className='absolute -z-50 top-[160rem] left-[5rem] w-[25rem]' data-src-image="graphic" alt="" />

      <img className='absolute -z-50 top-[97rem] right-[5rem] w-[25rem]' data-src-image="credit-card" alt="" />
      <img className='absolute -z-50 top-[310rem] right-[20rem] w-[15rem]' data-src-image="gift" alt="" />
      <img className='absolute -z-50 top-[400rem] right-[10rem] w-[20rem]' data-src-image="piggy-bank" alt="" />

      <img className='absolute -z-50 top-[338rem] left-[20rem] w-[15rem]' data-src-image="padlock" alt="" />
      <img className='absolute -z-50 top-[440rem] left-[20rem] w-[20rem]' data-src-image="bitcoins" alt="" />
      <img className='absolute -z-50 top-[450rem] right-[10rem] w-[25rem]' data-src-image="wallet" alt="" />

      <FirstSwiper />
      {/* + */}

      <Characteristics />
      {/* + */}

      <Partners />
      {/* + */}

      <Principles />
      {/* + */}

      <HowDoItWorks />
      {/* + */}

      <WayWithUs />
      {/* + */}

      <PromoCalculator />
      {/* + */}

      <Calculator />
      {/* +/- */}

      <Statistics />
      {/* + */}

      <Robots />
      {/* + */}

      <Transactions />
      {/* + */}

      <Clients />
      {/* + */}

      <Quations />
      {/* + */}

      <ReferalNotice />
    </div>
  );
}

