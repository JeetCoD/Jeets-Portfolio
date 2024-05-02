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

  const baseClass = "text-sm  sm:text-md ";

  return (
    <div className="mt-12 lg:w-[80%] flex flex-col gap-4">
      {data.map((experience) => (
        <div
          data-aos="fade"
          data-aos-once="true"
          className="flex flex-col lg:flex-row border-t border-transparent hover:border-t hover:border-sky-800/15 hover:bg-sky-800/10   rounded-md transition-all ease-linear gap-4 hover:shadow-sm hover:shadow-sky-600/10 p-4 cursor-pointer"
          key={experience.company}
        >
          <div
            className={`font-medium text-gray-600 flex shrink-0  min-w-52 gap-1  ${baseClass}`}
          >
            <span>{experience.join} &mdash; </span>
            <span>{experience.end}</span>
          </div>
          <div className="md:leading-none">
            <div className="flex flex-col gap-4">
              <p className="text-gray-100 font-medium text-md hover:text-cyan-500 transition-all ease-in hover:underline-offset-4 hover:underline cursor-pointer">
                <a href={experience.link} target=" _blank">
                  {" "}
                  {experience.company}
                  <span> &bull; </span>
                  <span className="">{experience.positionedAt}</span>
                </a>
              </p>
              <p
                className={`font-medium text-gray-400 flex shrink-0  min-w-52 gap-1  ${baseClass} leading-relaxed`}
              >
                {experience.responsibility}
              </p>
              <div className="flex gap-2 flex-wrap">
                {experience.tags.map((label) => (
                  <Tag tag={label} key={label} size="text-sm" />
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
      className={`flex ${size} bg-cyan-300/10 px-3 py-1 rounded-full text-cyan-500`}
    >
      {tag}
    </span>
  );
}

export default ExperienceCard;
