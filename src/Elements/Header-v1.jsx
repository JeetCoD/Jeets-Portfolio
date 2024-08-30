import React from "react";
import {
  FiBook,
  FiDribbble,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function Header() {
  return (
    <div className="flex justify-between py-4 z-10 fixed backdrop-blur-sm px-4 border border-gray-600/50 items-center w-full sm:w-[80%] mx-auto self-center mt-0 sm:mt-4 sm:rounded-full">
      <div>
        <p className="text-2xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          JeetCoD
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Link
          to="https://github.com/JeetCoD"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="GitHub"
        >
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiGithub className="text-sm md:text-lg" />
          </div>
        </Link>
        <Link
          to="/blog"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Blog"
        >
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiBook className="text-sm md:text-lg" />
          </div>
        </Link>
        <Link
          to="https://www.linkedin.com/in/jeet-gajjar-885bb4266/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="LinkedIn"
        >
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiLinkedin className="text-sm md:text-lg" />
          </div>
        </Link>
        <Link
          to="https://dribbble.com/design_jeet"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Dribbble"
        >
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiDribbble className="text-sm md:text-lg " />
          </div>
        </Link>

        <a
          href="mailto:jeet.gajjar2612@gmail.com"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Email"
        >
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiMail className="text-sm md:text-lg" />
          </div>
        </a>
      </div>

      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: "#0f172a",
          borderRadius: "8px",
          padding: "8px",
        }}
      />
    </div>
  );
}

export default Header;
