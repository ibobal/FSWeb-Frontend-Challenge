import { useSelector } from "react-redux";

export default function Profile() {
  const { data, loading, error } = useSelector((state) => state.data);
  const { title, image, infoSection, aboutMeSection } = data.profileSection;

  return (
    <div className="bg-customIndigo px-20 md:px-40 lg:px-80 py-16">
      <h1 className="text-5xl text-customLime font-bold mb-8">{title}</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-3xl font-semibold">{infoSection.title}</h2>
          {infoSection.informations.map((info, index) => (
            <p key={index} className="flex gap-2">
              <span className="text-customLime font-bold">{info.title}</span>
              {info.value}
            </p>
          ))}
        </div>
        <img src={image} alt="Placeholder" className="w-80 rounded-xl" />
        <div>
          <h2 className="text-3xl font-semibold">{aboutMeSection.title}</h2>
          <p className="text-justify mt-4">
            {aboutMeSection.descFirst}
          </p>
          <br></br>
          <p>{aboutMeSection.descSecond}</p>
        </div>
      </div>
    </div>
  );
}
