import { useSelector } from "react-redux";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const { data, loading, error } = useSelector((state) => state.data);
  const { title, subtitle, image } = data.heroSection;

  return (
    <div className="flex flex-col md:flex-row justify-around md:justify-between min-h-screen bg-customIndigo dark:bg-[#171043] md:bg-[linear-gradient(to_right,_#4b37cf_0%,_#4b37cf_82%,_#c9f080_50%,_#c9f080_100%)] md:dark:bg-[linear-gradient(to_right,_#171043_0%,_#171043_82%,_#211F0B_50%,_#211F0B_100%)] px-6 md:px-20 lg:px-40 py-16">
      <div className="flex flex-col justify-center items-start text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl text-customLime font-bold">
          {title}
        </h1>
        <p className="text-white text-lg md:text-3xl py-6 w-full md:w-150">
          {subtitle}
        </p>
        <div className="flex gap-4">
          <button className="btn btn-white text-lg text-customPurple dark:text-white dark:outline mt-4">
            <span className="text-2xl">
              <FaGithub />
            </span>
            Github
          </button>
          <button className="btn btn-white text-lg text-customPurple dark:text-white dark:outline mt-4">
            <span className="text-2xl">
              <FaLinkedinIn />
            </span>
            LinkedIn
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image}
          className="max-w-full md:max-w-sm rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
