import { useSelector } from "react-redux";

export default function Skills() {
  const { data, loading, error } = useSelector((state) => state.data);
  const { title, skills } = data.skillsSection;

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 lg:px-40 py-16 dark:bg-[#252128]">
      <h1 className="text-3xl md:text-5xl text-customPurple dark:text-customLime font-bold mb-8 md:mb-0">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-4 gap-x-10 md:gap-x-60">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <img src={skill.icon} alt={skill.name} className="w-16 md:w-32" />
            <p className="text-center text-gray-500 dark:text-white text-lg md:text-2xl">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
