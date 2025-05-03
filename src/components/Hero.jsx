import { useSelector } from "react-redux";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const { data, loading } = useSelector((state) => state.data);

  if (loading === "loading") {
    return (
      <div className="flex flex-col md:flex-row justify-around md:justify-between min-h-screen bg-customIndigo dark:bg-[#171043] md:bg-[linear-gradient(to_right,_#4b37cf_0%,_#4b37cf_73%,_#c9f080_50%,_#c9f080_100%)] md:dark:bg-[linear-gradient(to_right,_#171043_0%,_#171043_73%,_#211F0B_50%,_#211F0B_100%)] px-6 md:px-20 lg:px-80 py-16">
        <div className="flex flex-col justify-center items-start text-left mb-8 md:mb-0">
          <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded skeleton"></div>
          <div className="h-6 w-96 bg-gray-300 dark:bg-gray-700 rounded mt-4 skeleton"></div>
          <div className="h-6 w-80 bg-gray-300 dark:bg-gray-700 rounded mt-2 skeleton"></div>
          <div className="flex gap-4 mt-6">
            <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded skeleton"></div>
            <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded skeleton"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-64 w-64 bg-gray-300 dark:bg-gray-700 rounded-lg skeleton"></div>
        </div>
      </div>
    );
  }

  const { title, subtitle, image } = data.heroSection;

  return (
    <div className="flex flex-col md:flex-row justify-around md:justify-between min-h-screen bg-customIndigo dark:bg-[#171043] md:bg-[linear-gradient(to_right,_#4b37cf_0%,_#4b37cf_73%,_#c9f080_50%,_#c9f080_100%)] md:dark:bg-[linear-gradient(to_right,_#171043_0%,_#171043_73%,_#211F0B_50%,_#211F0B_100%)] px-6 md:px-20 lg:px-80 py-16">
      <div className="flex flex-col justify-center items-start text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl text-customLime font-bold">
          {title}
        </h1>
        <p className="text-white text-lg md:text-3xl py-6 w-full md:w-150">
          {subtitle}
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/ibobal"
            target="_blank"
            className="btn btn-white text-lg text-customPurple dark:text-white dark:outline mt-4"
          >
            <span className="text-2xl">
              <FaGithub />
            </span>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahim-ballı-4751122b6"
            target="_blank"
            className="btn btn-white text-lg text-customPurple dark:text-white dark:outline mt-4"
          >
            <span className="text-2xl">
              <FaLinkedinIn />
            </span>
            LinkedIn
          </a>
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
