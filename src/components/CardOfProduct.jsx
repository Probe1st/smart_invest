export default function CardOfProducts({ id }) {
  return (
    <div
      className="flex flex-col items-center space-y-5 bg-slate-800 rounded-2xl px-7 py-5 w-72"
      id={id}
    >
      {/* photo */}
      <div className="w-28 h-28 bg-black rounded-full"></div>

      {/* name */}
      <p>Name</p>

      <p className="text-3xl text-sky-400">Feature</p>

      {/* disc */}
      <p className="text-sm text-slate-500 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        possimus quidem corporis incidunt ex tempora vero aperiam maiores
        nesciunt tempore!
      </p>
    </div>
  );
}
