import { useEffect } from "react";
import { Tag } from "./ExperienceCard";
import AOS from "aos";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { project } from "../data/project-data";

function ProjectShowcase() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const baseClass = "text-sm sm:text-md";
  const iconClass =
    "text-slate-400 hover:text-slate-800 cursor-pointer transition-colors duration-300";

  // Filter projects with images
  const projectsWithImages = project.filter((item) => item.image);

  return (
    <div className="mt-12 lg:w-[80%] flex flex-col gap-4">
      {projectsWithImages.map((item) => (
        <div
          data-aos="fade"
          data-aos-once="true"
          className="flex flex-col lg:flex-row border-t border-transparent rounded-md transition-all duration-300 ease-linear gap-4lg:hover:border-t lg:hover:border-slate-300/15 lg:hover:bg-slate-100 lg:hover:shadow-sm lg:hover:shadow-slate-200/10 py-4 lg:p-4 cursor-pointer"
          key={item.projectName}
        >
          <div className="max-w-24 md:min-w-52">
            <img
              src={item.image}
              alt={item.projectName}
              className="border border-slate-200 rounded-lg max-w-28 md:max-w-[80%] mb-2 md:mb-0"
            />
          </div>
          <div className="md:leading-none">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center justify-between">
                <a href={item.githubLink} target="_blank" rel="noreferrer">
                  <p className="text-slate-800 font-medium text-md hover:text-slate-950 transition-colors duration-300 ease-in hover:underline-offset-4 hover:underline cursor-pointer inline max-w-max">
                    {item.projectName}
                  </p>
                </a>
                <span className="inline-flex items-center gap-4">
                  {item.webLink && (
                    <a href={item.webLink} target="_blank" rel="noreferrer">
                      <span className={iconClass}>
                        <HiOutlineExternalLink />
                      </span>
                    </a>
                  )}
                  {item.githubLink && (
                    <a href={item.githubLink} target="_blank" rel="noreferrer">
                      <span className={iconClass}>
                        <FiGithub />
                      </span>
                    </a>
                  )}
                </span>
              </span>
              <p
                className={` text-slate-600 flex shrink-0 min-w-52 gap-1 ${baseClass} leading-relaxed`}
              >
                {item.subtitle}
              </p>
              <div className="flex gap-2 flex-wrap">
                {item.builtWith.map((label) => (
                  <Tag tag={label} key={label} size="text-xs" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectShowcase;
