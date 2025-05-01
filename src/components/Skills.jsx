import { useSelector } from "react-redux";

export default function Skills() {
  const { data, loading, error } = useSelector((state) => state.data);
  const { title, skills } = data.skillsSection;

  return (
    <div className="flex justify-between px-20 md:px-40 lg:px-80 py-16 ">
      <div>
        <h1 className="text-5xl text-customPurple font-bold">{title}</h1>
      </div>
      <div className="grow-1 flex justify-end items-center">
        <div className="grid grid-cols-2 gap-4 mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
