import { Link } from "react-router-dom";

export default function Discription() {
    return (
        <div className="w-2/3">
            <p className="text-blue-900 font-bold text-2xl text-justify">
                Мы вплотную подошли к будущему финансовых инвестиций, объединив передовые технологии 
                и искусственный интеллект для создания стратегий, которые наши роботы используют для 
                достижения успеха на рынках. Присоединяйтесь к нам и откройте для себя мир роботизированной торговли.
            </p>

            <Link className="flex w-fit mt-5 mx-auto font-bold rounded-full bg-gradient-to-r from-[#193A9F] to-[#2856E2] py-3 px-5 min-w-[8.4rem]" to={"/registration"} >Попробовать неделю бесплатно</Link> 
        </div>
    )
}