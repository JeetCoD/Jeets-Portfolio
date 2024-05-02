import {
  FiDribbble,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex justify-between py-4 z-10 bg-white-50 z-100 fixed backdrop-blur-sm px-4  border-b border-gray-600/50">
      <div>
        <p className="text-2xl font-semibold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent ">
          JeetCoD
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Link
          to="https://github.com/JeetCoD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border  border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiGithub className="text-lg" />
          </div>
        </Link>

        <Link
          to="https://www.linkedin.com/in/jeet-gajjar-885bb4266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border  border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiLinkedin className="text-lg" />
          </div>
        </Link>
        <Link
          to="https://dribbble.com/jeet_design2612"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border  border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiDribbble className="text-lg " />
          </div>
        </Link>

        <a href="mailto:jeet.gajjar2612@gmail.com">
          <div className="flex p-2 bg-sky-800/10 hover:bg-sky-800/30 rounded-md border-solid border  border-cyan-600/50 cursor-pointer text-cyan-800 hover:text-cyan-600 hover:border-cyan-600 transition-all ease-in">
            <FiMail className="  text-lg" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
