import { Link } from "react-router-dom";
import ContentContainer from "../Elements/ContentContainer";
import { HiArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { Tag } from "../Elements/ExperienceCard";
import { FiGithub } from "react-icons/fi";

function Projects() {
    const iconClass = "text-gray-400 hover:text-cyan-500 cursor-pointer text-sm";

  return (
    <div className="p-4 rounded-lg overflow-hidden px-8 md:px-12">
      <Link
        to="/"
        className="mt-4 text-cyan-500 inline-flex items-center gap-1 group hover:underline hover:underline-offset-4 md:text-md font-semibold transition-all ease-in text-md"
      >
        <span className="group-hover:-translate-x-0.5 transition-all ease-in">
          <HiArrowLeft className="" />
        </span>
        Back to Home
      </Link>
      <h2 className="text-gray-100 font-bold md:text-4xl text-2xl my-12">
        All Projects
      </h2>
      <div className="overflow-x-auto">
        <table className="text-gray-100 table-auto w-full rounded-md">
          <thead className="text-sm bg-cyan-950/10 divide-y divide-gray-800">
            <tr className="">
              <th className="p-3 tracking-wide text-left w-1/6 md:w-1/12">
                Year
              </th>
              <th className="p-3 tracking-wide text-left md:w-1/6">
                Project
              </th>
              <th className="p-3 tracking-wide text-left md:w-1/6 hidden md:table-cell">
                Made at
              </th>
              <th className="p-3 tracking-wide text-left md:w-1.5/6 hidden md:table-cell">
                Built with
              </th>
              <th className="p-3 tracking-wide text-left w-2/12">Links</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-left border-b border-gray-800">
              <td className="p-3 text-gray-400 text-sm">2023</td>
              <td className="p-3 text-gray-100  font-semibold text-sm md:text-base">
                Profity
              </td>
              <td className="p-3 text-gray-400 hidden md:table-cell text-sm">
                Personal Project
              </td>
              <td className="p-3 text-gray-300 hidden md:table-cell max-w-24 text-sm">
                <span className="inline-flex flex-wrap gap-2">
                  {" "}
                  <Tag tag={"React"} />
                  <Tag tag={"React"} />
                  <Tag tag={"React"} />
                  <Tag tag={"React"} />
                  <Tag tag={"React"} />
                  <Tag tag={"React"} />
                  <Tag tag={"React"} />
                  <Tag tag={"React"} />
                </span>
              </td>
              <td className="p-3 text-gray-300">
                {" "}
                <span className="inline-flex items-center gap-8">
                  <span className={`${iconClass}`}>
                    {/* <HiOutlineExternalLink /> */}
                    Website
                  </span>
                  <span className={`${iconClass}`}>
                    {/* <FiGithub /> */}
                    Github
                  </span>
                </span>
              </td>
            </tr>
            {/* Additional rows go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
