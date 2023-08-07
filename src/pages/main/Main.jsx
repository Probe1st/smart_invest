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

export default function Main() {
  

  return (
    <div className="flex flex-col justify-center items-center w-full mt-20">
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
      
      <Transactions />
      {/* + */}

      <Clients />
      {/* + */}

      <Quations />
      {/* + */}
    </div>
  );
}

