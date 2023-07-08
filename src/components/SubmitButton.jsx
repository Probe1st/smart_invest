

export default function SubmitButton({text}) {
    return (
        <button onSubmit={e => e.preventDefault()} 
            type="submit" className="bg-indigo-400 px-10 py-1 w-fit h-fit rounded-full text-slate-900 text-lg cursor-pointer">
            {text}
        </button>
    );
}