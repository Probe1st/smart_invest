import LinkButton from "./Link";


export default function Header() {
    return (
        <header className="flex flex-row items-center w-2/3 py-5 justify-between">
            <div>
                <LinkButton link="/" className="text-sky-400 text-xl" text="Smart Invest"/>
            </div>

            <div className="flex flex-row space-x-5 items-center">
                <LinkButton text="Войти" link="login" />
                <div className="flex flex-col space-y-2 w-fit h-fit">
                    <div className="rounded-full bg-gray-500 w-8 h-1"></div>
                    <div className="rounded-full bg-gray-500 w-8 h-1"></div>
                    <div className="rounded-full bg-gray-500 w-8 h-1"></div>
                </div>
            </div>
        </header>
    );
}