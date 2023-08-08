export default function SubmitButton({ text, onSubmitFunc }) {
  return (
    <button
      type="submit"
      className="bg-white px-10 py-1 w-fit h-fit rounded-full text-black text-lg cursor-pointer"
    >
      {text}
    </button>
  );
}
