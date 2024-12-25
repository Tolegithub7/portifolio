"use client";

import { motion } from "framer-motion";
import  React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus quae saepe! Deserunt, consectetur pariatur.',
    stack: [{name: 'React'}, {name: 'Next.js'}, {name: 'Tailwind CSS'}],
    image: '/assets/work/thumb1.png',
    live: "",
    github: "",
  }, {
    num: '02',
    category: 'fullstack',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus quae saepe! Deserunt, consectetur pariatur.',
    stack: [{name: 'Php'}, {name: 'Bootstrap'}, {name: 'Laravel'}],
    image: '/assets/work/thumb2.png',
    live: "",
    github: "",
  },{},{}, {
    num: '03',
    category: 'frontend',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus quae saepe! Deserunt, consectetur pariatur.',
    stack: [{name: 'React'}, {name: 'Axios'}, {name: 'Tailwind CSS'}],
    image: '/assets/work/thumb4.png',
    live: "https://ebusers.vercel.app/",
    github: "https://github.com/Tolegithub7/React/tree/main/Ebusers",
  }
]
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">{project.category} project</h2>
            {/* projecct description */}
            <p className="text-white/60">{project.description}</p>
            {/* stack */}
            <ul className="flex gap-2">
              {project.stack.map((item, index) => {
                return (
                <li key={index} className="text-xl text-accent">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              )})}
            </ul>
            {/* border */}
            <div className="border border-white/60"></div>
            {/* button  */}
            <div className="flex items-center gap-4">
              {/* live project button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center group"> 
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* Github link  */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center group"> 
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">Slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
