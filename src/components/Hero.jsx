import { useSelector } from "react-redux";

export default function Hero() {
  const { data, loading, error } = useSelector((state) => state.data);
  const { title, subtitle, image } = data.heroSection;

  return (
    <div className="flex justify-between min-h-screen bg-[linear-gradient(to_right,_#4b37cf_0%,_#4b37cf_67%,_#c9f080_50%,_#c9f080_100%)] px-20 md:px-40 lg:px-80 py-16 ">
      <div className="grow-1 flex flex-col justify-center items-start text-left">
        <h1 className="text-5xl text-customLime font-bold">{title}</h1>
        <p className="text-white py-6">{subtitle}</p>
        <div className="join gap-2">
          <button className="join-item btn btn-white text-customPurple mt-4">
            Github
          </button>
          <button className="join-item btn btn-white text-customPurple mt-4">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
}
