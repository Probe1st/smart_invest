export default function InputForm({type, id, placeholder, className = ""}) {
    return (
        <input required className={`${className} bg-white rounded-xl px-5 py-1 items-center outline-none text-black`}
         type={type} id={id} placeholder={placeholder} />
    );
}