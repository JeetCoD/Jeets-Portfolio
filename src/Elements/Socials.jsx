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

function Socials() {
  return (
    <div className="flex flex-row gap-4 mb-36">
      <Link to="https://github.com/JeetCoD" target="_blank">
        <div className="flex  rounded-md  cursor-pointer text-slate-600 hover:text-slate-950  transition-all ease-in">
          <FiGithub className="text-lg md:text-xl" />
        </div>
      </Link>
      <Link to="/blog">
        <div className="flex  rounded-md  cursor-pointer text-slate-600 hover:text-slate-950 transition-all ease-in">
          <FiBook className="text-lg md:text-xl" />
        </div>
      </Link>
      <Link
        to="https://www.linkedin.com/in/jeet-gajjar-885bb4266/"
        target="_blank"
      >
        <div className="flex  rounded-md  cursor-pointer text-slate-600 hover:text-slate-950 transition-all ease-in">
          <FiLinkedin className="text-lg md:text-xl" />
        </div>
      </Link>
      <Link to="https://dribbble.com/design_jeet" target="_blank">
        <div className="flex  rounded-md  cursor-pointer text-slate-600 hover:text-slate-950 transition-all ease-in">
          <FiDribbble className="text-lg md:text-xl " />
        </div>
      </Link>

      <a href="mailto:jeet.gajjar2612@gmail.com">
        <div className="flex  rounded-md  cursor-pointer text-slate-600 hover:text-slate-950 transition-all ease-in">
          <FiMail className="text-lg md:text-xl" />
        </div>
      </a>
    </div>
  );
}

export default Socials;
