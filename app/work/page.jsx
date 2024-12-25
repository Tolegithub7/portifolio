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
  return (
    <div>
      This for WORK WORK WORK
    </div>
  )
}

export default Work;
