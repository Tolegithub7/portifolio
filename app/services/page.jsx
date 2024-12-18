"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "I create responsive and user-friendly websites using modern technologies, ensuring seamless functionality and appealing designs that deliver excellent user experiences.",
    href: ""
  }, {
    num: '02',
    title: 'Video Editing',
    description: "I transform raw footage into engaging videos by applying creative edits, adding transitions, effects, and music to craft compelling visual stories.",
    href: ""
  }, {
    num: '03',
    title: 'Marketing',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores commodi enim rem rerum, blanditiis fugit officia saepe?",
    href: ""
  }, {
    num: '04',
    title: 'Machine Learning',
    description: "I am exploring the field of Machine Learning, focusing on understanding supervised and reinforcement learning techniques. I am actively building foundational skills through hands-on projects and continuous learning.",
    href: ""
  }
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top  */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl "/>
                  </Link>
                </div>
                {/* title  */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description  */}
                <p className="text-white/60 pl-8">{service.description}</p>
                {/* border  */}
                <div className="border-b border-white/80 w-full"></div>
              </div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  )
}

export default Services;
