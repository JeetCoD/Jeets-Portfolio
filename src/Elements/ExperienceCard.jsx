import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ExperienceCard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const data = [
    {
      company: "Dicot Innovation Pvt Ltd",
      join: "May 2022",
      end: "Jul 2023",
      positionedAt: "Frontend Lead",
      link: "https://www.dicot.tech/",
      responsibility:
        "Ensured smooth coordination among team members to streamline workflow and consistently deliver high-quality results. Played a key role in expanding the customer base by making the application more intuitive and user-friendly. Introduced new concepts to enhance the existing web application and orchestrated a comprehensive redesign to improve user experience.",
      tags: [
        "React",
        "Figma",
        "Chakra UI",
        "JavaScript",
        "Tailwind CSS",
        "HTML & CSS",
      ],
    },
    {
      company: "Mindful gurukul",
      join: "Sep 2022",
      end: "March 2023",
      positionedAt: "User Interface Designer",
      link: "https://mindfulgurukul.com/",
      responsibility:
        "Designed the entire app at Mindful Gurukul, focusing on a complete redesign from scratch with the target audience in mind.  The company presented the new design and prototype of the app, which played a crucial role in securing funding from IIT Mandi Catalyst. Demonstrated the app's potential through the redesigned interface and features, leading to successful fundraising efforts",
      tags: ["Figma", "Prototypes", "UI/UX"],
    },
  ];

  const baseClass = "text-sm sm:text-md ";

  return (
    <div className="mt-12 lg:w-[80%] flex flex-col gap-4">
      {data.map((experience) => (
        <div
          data-aos="fade"
          data-aos-once="true"
          className="flex flex-col lg:flex-row border-t border-transparent lg:hover:border-t lg:hover:border-slate-300/15 lg:hover:bg-slate-100 lg:hover:shadow-sm lg:hover:shadow-slate-200/10 rounded-md transition-all ease-linear gap-4 py-4 lg:p-4 cursor-pointer"
          key={experience.company}
        >
          <div
            className={`font-medium text-gray-600 flex shrink-0 min-w-52 gap-1 ${baseClass}`}
          >
            <span>{experience.join} &mdash; </span>
            <span>{experience.end}</span>
          </div>
          <div className="md:leading-none">
            <div className="flex flex-col gap-4">
              <p
                className={`text-gray-800 font-medium text-md transition-all ease-in lg:hover:text-gray-900 lg:hover:underline-offset-4 lg:hover:underline cursor-pointer`}
              >
                <a href={experience.link} target="_blank" rel="noreferrer">
                  {experience.company}
                  <span> &bull; </span>
                  <span className="">{experience.positionedAt}</span>
                </a>
              </p>
              <p
                className={` text-gray-600 flex shrink-0 min-w-52 gap-1 ${baseClass} leading-relaxed`}
              >
                {experience.responsibility}
              </p>
              <div className="flex gap-2 flex-wrap">
                {experience.tags.map((label) => (
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

export function Tag({ tag, size }) {
  return (
    <span
      className={`flex ${size} bg-slate-900 px-3 py-1 rounded-xl text-slate-100 font-medium`}
    >
      {tag}
    </span>
  );
}

export default ExperienceCard;
