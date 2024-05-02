import { useEffect } from "react";
import { Tag } from "./ExperienceCard";
import AOS from "aos";

import profity from "../Images/profity.png";
import Omnifood from "../Images/omnifood.png";
import wildOasis from "../Images/wildOasis.png";
import inventoveu from "../Images/inventoveu.png";
import usepopcorn from "../Images/usepopcorn.png";
import fastpizza from "../Images/fastpizza.png";
import { HiExternalLink, HiLink, HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

function ProjectShowcase() {
  //Conditionally rendder the icons based on it has live link or not.
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const data = [
    {
      image: profity,
      title: "Profity",
      subtitle:
        " A comprehensive stock market monitoring application designed to track gains and losses effortlessly. Users can conveniently manage their stock portfolio, recording purchases and sales with ease. Stay updated on market trends and performance with Profity. Version 2 currently in development.",
      tag: ["React", "Supabase", "UI/UX", "Tailwind CSS", "React Query"],
    },
    {
      image: wildOasis,
      title: "The Wild Oasis",
      subtitle:
        "A robust hotel management application equipped with comprehensive user records, analytics for hotel operations, and seamless booking and management functionalities. Experience the convenience of integrated light and dark modes for optimal user experience.",
      tag: [
        "React",
        "Supabase",
        "Styled Components",
        "React Query",
        "React Forms",
        "React Router",
        "Other libraries",
      ],
    },
    {
      image: usepopcorn,
      title: "UsePopcorn",
      subtitle:
        "UsePopcorn is an app that fetches data from the OMDB API, allowing users to browse and explore a vast collection of movies. Users can bookmark their favorite movies, rate them, and access additional details such as cast, synopsis, and ratings.",
      tag: ["React", "API", "JS"],
    },
   
    {
      image: fastpizza,
      title: "Fast React Pizza",
      subtitle:
        "Fast React Pizza is a web application designed for pizza lovers, offering seamless online pizza ordering with real-time updates. Utilizing a custom API, users can browse through a variety of pizza options, customize their orders, and receive instant updates on their delivery status. The app includes features such as automatic location detection for convenient delivery and provides estimated delivery times for a smooth and efficient ordering experience.",
      tag: ["React", "React Router", "API", "Tailwind"],
    },
  ];

  const iconClass = "text-gray-400 hover:text-cyan-500 cursor-pointer";

  const baseClass = "text-sm  sm:text-md ";
  return (
    <div className="mt-12 lg:w-[80%] flex flex-col gap-4">
      {data.map((item) => (
        <div
          data-aos="fade"
          data-aos-once="true"
          className="flex flex-col lg:flex-row border-t border-transparent hover:border-t hover:border-sky-800/15 hover:bg-sky-800/10   rounded-md transition-all ease-linear gap-4 hover:shadow-sm hover:shadow-sky-600/10 p-4"
          key={item.title}
        >
          <div className="max-w-24 md:min-w-52">
            <img
              src={item.image}
              className="border-2 border-gray-600 rounded-lg max-w-28 md:max-w-[80%]"
            />
          </div>
          <div className="md:leading-none">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center justify-between">
                <p className="text-gray-100 font-medium text-md hover:text-cyan-500 transition-all ease-in hover:underline-offset-4 hover:underline cursor-pointer inline max-w-max">
                  {item.title}
                </p>
                <span className="inline-flex items-center gap-4">
                  <span className={`${iconClass}`}>
                    <HiOutlineExternalLink />
                  </span>
                  <span className={`${iconClass}`}>
                    <FiGithub />
                  </span>
                </span>
              </span>
              <p
                className={`font-medium text-gray-400 flex shrink-0  min-w-52 gap-1  ${baseClass} leading-relaxed`}
              >
                {item.subtitle}
              </p>
              <div className="flex gap-2 flex-wrap">
                {item.tag.map((label) => (
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
