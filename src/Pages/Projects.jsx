import { Link } from "react-router-dom";
import ContentContainer from "../Elements/ContentContainer";
import { HiArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { Tag } from "../Elements/ExperienceCard";
import { FiGithub } from "react-icons/fi";
import { project } from "../data/project-data";

function Projects() {
  const iconClass =
    "text-slate-400 hover:text-slate-800 cursor-pointer transition-colors duration-300";

  return (
    <div className="py-2 rounded-lg overflow-hidden px-6 md:px-12">
      <Link
        to="/"
        className="mt-12 text-slate-800 inline-flex items-center gap-1 group hover:underline hover:underline-offset-4 md:text-md font-semibold transition-all ease-in text-md"
      >
        <span className="group-hover:-translate-x-0.5 transition-all ease-in">
          <HiArrowLeft className="" />
        </span>
        Back to Home
      </Link>
      <h2 className="text-slate-800 font-bold md:text-4xl text-2xl mb-12 mt-4">
        All Projects
      </h2>
      <div className="overflow-x-auto rounded-lg mb-24">
        <table className="text-slate-600 table-auto w-full ">
          <thead className="text-sm bg-slate-200/50 divide-y divide-slate-300">
            <tr className="">
              <th className="p-3 tracking-wide text-left w-1/6 md:w-1/12">
                Year
              </th>
              <th className="p-3 tracking-wide text-left md:w-1/6">Project</th>
              <th className="p-3 tracking-wide text-left md:w-1/6 hidden md:table-cell">
                Made at
              </th>
              <th className="p-3 tracking-wide text-left md:w-1.5/6 hidden md:table-cell">
                Built with
              </th>
              <th className="p-3 tracking-wide text-left w-2/12">Links</th>
            </tr>
          </thead>
          <tbody>
            {project.map((data) => (
              <tr
                className="text-left border-b border-slate-200 hover:bg-slate-100"
                key={data.projectName}
              >
                <td className="p-3 text-slate-600 text-sm py-4">{data.year}</td>
                <td className="p-3 text-slate-800  font-semibold text-sm md:text-base ">
                  <a
                    href={data.githubLink}
                    target=" _blank"
                    className="hover:text-slate-950 transition-all ease-in hover:underline-offset-2 hover:underline cursor-pointer no-underline underline-offset-0"
                  >
                    {" "}
                    {data.projectName}{" "}
                  </a>
                </td>
                <td className="p-3 py-8 text-slate-600 hidden md:table-cell text-sm">
                  {data.madeAt}
                </td>
                <td className="p-3 text-slate-300 hidden md:table-cell max-w-24 text-sm">
                  <span className="inline-flex flex-wrap gap-2">
                    {data.builtWith.map((tag) => (
                      <Tag
                        key={Math.random()}
                        tag={tag}
                        size="text-xs font-medium"
                      />
                    ))}
                  </span>
                </td>
                <td className="p-3 text-gray-300 ">
                  {" "}
                  <span className="inline-flex items-center gap-4 sm:gap-4 flex-row ">
                    {data.webLink && (
                      <span className={`${iconClass}`}>
                        <a href={data.webLink} target=" _blank">
                          <HiOutlineExternalLink />
                        </a>
                      </span>
                    )}
                    {data.githubLink && (
                      <span className={`${iconClass}`}>
                        <a href={data.githubLink} target=" _blank">
                          <FiGithub />
                        </a>
                      </span>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
