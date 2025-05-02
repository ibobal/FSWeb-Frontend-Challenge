import { useSelector } from "react-redux";

export default function Projects() {
  const { data, loading, error } = useSelector((state) => state.data);
  const { title, projects } = data.projectsSection;

  return (
    <div className="dark:bg-[#1A210B] px-6 md:px-20 lg:px-40 py-16 bg-customLime">
      <h1 className="text-3xl md:text-5xl text-customPurple dark:text-customLime font-bold mb-10">
        {title}
      </h1>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            className="card flex flex-col lg:flex-row bg-white dark:bg-[#2B2727] shadow-sm"
            key={index}
          >
            <figure className="w-full lg:w-auto">
              <img
                src={project.image}
                alt="Album"
                className="w-full lg:w-auto"
              />
            </figure>
            <div className="card-body p-8">
              <h2 className="card-title text-2xl md:text-3xl text-customPurple dark:text-[#C1BAED] font-bold mb-8">
                {project.name}
              </h2>
              <p className="text-sm md:text-lg">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-customPurple dark:bg-[#8173DA] text-white text-sm md:text-lg px-3 py-1 rounded-full"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="card-actions flex flex-col md:flex-row gap-4 mt-4">
                <a className="text-customPurple dark:text-customLime text-sm md:text-lg font-semibold underline">
                  View Site
                </a>
                <a className="text-customPurple dark:text-customLime text-sm md:text-lg font-semibold underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
