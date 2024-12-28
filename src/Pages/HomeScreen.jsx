import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiCode, FiDownload } from "react-icons/fi";
import { useMotionValue, motion, animate } from "framer-motion";
import AnimatedTag from "../Elements/AnimatedTag";
import Header from "../Elements/Header";

import Button from "../Elements/Button";
import ContentContainer from "../Elements/ContentContainer";
import SectionHeader from "../Elements/SectionHeader";
import ExperienceCard from "../Elements/ExperienceCard";
import { FaHeart } from "react-icons/fa";
import Aos from "aos";
import ProjectShowcase from "../Elements/ProjectShowcase";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Resume from "../data/Jeet-resume.pdf";
import { toast } from "react-hot-toast";
import FinoveraLogo from "../Images/finovera.png";
import Socials from "../Elements/Socials";

export const HomeScreen = () => {
  const borderDark = useMotionValue("1px solid rgba(0, 0, 0, 0.1)");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    animate(borderDark, "1px solid rgba(0, 0, 0, 0.8)", {
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    });

    Aos.init({ duration: 2000 });
  }, []);

  function handleToast() {
    toast("Resume download is currently unavailable");
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />

        <motion.section
          className="relative grid flex-1 place-content-center overflow-hidden bg-slate-50 px-4 py-24 text-gray-800"
          data-aos="fade"
          data-aos-once="true"
        >
          <div className="relative  flex flex-col items-center">
            <span className="mb-1.5 inline-block rounded-full bg-gray-200/50 px-3 py-1.5 text-sm h-8 border">
              <AnimatedTag />
            </span>
            <h1 className="max-w-3xl bg-gradient-to-br from-slate-900 to-gray-700 bg-clip-text text-transparent text-center text-6xl font-bold leading-tight  sm:text-7xl sm:leading-tight md:text-9xl md:leading-tight">
              Jeet Gajjar
            </h1>

            <p className="my-4 max-w-2xl text-center leading-relaxed md:text-lg md:leading-relaxed text-md text-gray-600">
              I&apos;m a web developer and UI/UX designer. Currently pursuing
              Computer Science Engineering. I help brands to bring their
              products to life.
            </p>
          </div>
          <div className="absolute inset-0 z-0"></div>
          <div className="flex justify-center z-0 md:text-md md:leading-relaxed text-sm">
            <div className=" justify-center flex my-6 gap-2 items-center backdrop-blur-lg w-fit py-1 px-4 rounded-full border hover:scale-105 transition-all ease-linear bg-gray-200/50 font-medium">
              <img className="w-5 h-5" src={FinoveraLogo} alt="finovera logo" />
              <a href="https://finovera.cloud" target=" _blank">
                Currently building Finovera
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-3 pt-7 z-0">
            <a target=" _blank" href={Resume}>
              <Button hasIcon="true" icon={<FiDownload />} type="primary">
                Resume
              </Button>
            </a>
            <Button
              hasIcon="true"
              icon={<FiCode />}
              type="primary"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
          </div>
        </motion.section>
      </div>

      <ContentContainer name="about">
        <SectionHeader id={1}>About me</SectionHeader>
        <div className="mt-12 flex flex-col gap-4 text-gray-600 leading-relaxed sm:leading-relaxed text-md">
          <p className="">
            Hey there, I&apos;m Jeet Gajjar, and my journey into the world of
            web development began about three years ago. It all started when I
            took a leap of faith and joined a startup, eager to dive into the
            exciting realm of real-world projects. As I took on the role of a
            frontend lead, I found myself crafting user-accessible interfaces
            and delving deep into the intricacies of web development.
          </p>
          <p>
            Fast forward to today, and I&apos;ve honed my skills to become a
            passionate Full Stack Web Developer. Specializing in creating
            scalable, secure web applications using the latest technologies,
            I&apos;m driven by the desire to solve real-world problems through
            innovative solutions. My focus on intuitive UI/UX design allows me
            to bridge the gap between functionality and aesthetics, ensuring
            that every project I undertake leaves a lasting impression.
          </p>
          <p>
            When I&apos;m not immersed in lines of code, you&apos;ll often find
            me buried in the pages of a good book or catching up with friends
            over a cup of coffee. And on those rare occasions when I&apos;m not
            at my desk, you might spot me out for a quick run, embracing the
            freedom of the open road.
          </p>
        </div>
      </ContentContainer>
      <ContentContainer>
        <SectionHeader id={2}>Work experience</SectionHeader>
        <ExperienceCard />
      </ContentContainer>
      <ContentContainer name="projects">
        <SectionHeader id={3}>Project showcase</SectionHeader>
        <ProjectShowcase />
        <Link
          to="/projects"
          className="mt-4 text-slate-950 inline-flex font-medium items-center gap-1 group hover:underline hover:underline-offset-4 text-sm md:text-base transition-all ease-in"
        >
          View All Projects{" "}
          <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 -rotate-45 transition-all ease-in duration-100">
            <HiOutlineArrowSmRight className="text-xl md:text-2xl " />
          </span>
        </Link>
      </ContentContainer>
      <ContentContainer name="projects">
        <SectionHeader id={4}>Let&apos;s Connect</SectionHeader>
        <p className="mt-12  gap-4 text-gray-600 leading-relaxed sm:leading-relaxed text-md">
          Thank you for exploring my portfolio! If you&apos;re interested in
          collaborating, have any questions, or just want to say hello, feel
          free to reach out. I&apos;m always open to new opportunities and
          conversations.
        </p>
        <a href="mailto:jeetgajjar740@gmail.com" className="flex mt-4 mb-8">
          <Button type="primary">Send a Message</Button>
        </a>
        <Socials />
      </ContentContainer>
      <footer className="flex flex-col justify-center items-center py-8  border-t border-gray-200 ">
        <p className="text-center text-xs leading-5 w-[70%] sm:text-sm text-gray-600 pb-2">
          Thank you for visiting my portfolio website! Your interest and time
          are greatly appreciated.{" "}
        </p>
        <p className="font-semibold text-sm text-slate-600 flex items-center gap-1">
          {" "}
          Made from{" "}
          <span className="inline-flex items-start text-red-500">
            <FaHeart />
          </span>{" "}
          by Jeet
        </p>
      </footer>
    </>
  );
};

export default HomeScreen;
