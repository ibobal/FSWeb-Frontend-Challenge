import { useSelector } from "react-redux";

export default function Profile() {
  const { data } = useSelector((state) => state.data);
  const { title, image, infoSection, aboutMeSection } = data.profileSection;

  return (
    <div className="bg-customIndigo dark:bg-[#171043] text-white px-6 md:px-20 lg:px-80 py-16">
      <h1 className="text-3xl md:text-5xl text-customLime font-bold mb-8">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {infoSection.title}
          </h2>
          {infoSection.informations.map((info, index) => (
            <p key={index} className="flex gap-2 text-lg md:text-xl">
              <span className="text-customLime font-bold">{info.title}</span>
              {info.value}
            </p>
          ))}
        </div>
        <img
          src={image}
          alt="Placeholder"
          className="w-full md:w-90 rounded-xl mx-auto"
        />
        <div className="flex flex-col gap-12 text-lg md:text-xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {aboutMeSection.title}
          </h2>
          <p>{aboutMeSection.descFirst}</p>
          <p>{aboutMeSection.descSecond}</p>
        </div>
      </div>
    </div>
  );
}
