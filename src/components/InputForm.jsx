

export default function InputForm({type, id, placeholder}) {
    return (
        <input required className="bg-gray-700 rounded-xl px-5 py-1 items-center outline-none text-slate-200"
         type={type} id={id} placeholder={placeholder} />
    );
}