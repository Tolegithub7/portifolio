"use client";

// import { Description } from '@radix-ui/react-dialog';
import { RovingFocusGroup, RovingFocusGroupItem } from '@radix-ui/react-roving-focus';
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaPhp, 
  FaLaravel, 
  FaDatabase  // MySQL
} from 'react-icons/fa';
import { 
  SiAdobecreativecloud,
  SiTailwindcss,
  SiNextdotjs,
  SiDavinciresolve // DaVinci Resolve 
} from 'react-icons/si';

const about = {
  title: 'About Me',
  Description: 'I am a developer with a passion for creating engaging and user-friendly applications. My expertise lies in building efficient, responsive, and accessible web applications using HTML, CSS, JavaScript, and frameworks like React, Next.js, and Laravel. I also have experience with various database management systems, such as MySQL and MongoDB, and have worked with various design tools, such as Adobe Creative Cloud, Tailwind CSS, and CapCut. I am always eager to learn and grow, and I am excited to contribute to the community as a developer.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tolosa Diriba"
    }, {
      fieldName: "Phone",
      fieldValue: "+251955251753"
    }, {
      fieldName: "Experience",
      fieldValue: "+2 Years"
    }, {
      fieldName: "Nationality",
      fieldValue: "Ethiopian"
    }, {
      fieldName: "Email Address",
      fieldValue: "tolekadima7@gmail.com"
    }, {
      fieldName: "Github",
      fieldValue: "https://github.com/tolekadima7"
    }, {
      fieldName: "Freelance",
      fieldValue: "Available"
    }, {
      fieldName: "Address",
      fieldValue: "Addis Ababa, Ethiopia"
    }, {
      fieldName: "Languages",
      fieldValue: "English, Amharic"
    }
  ]
}
//Experience Data
const experiences = {
    icon: "/assets/resum/badge.svg",
    title: "My Experience",
    Description: "I am a developer with a passion for creating engaging and user-friendly applications. My expertise lies in building efficient, responsive, and accessible web applications using HTML, CSS, JavaScript, and frameworks like React, Next.js, and Laravel. I also have experience with various database management systems, such as MySQL and MongoDB, and have worked with various design tools, such as Adobe Creative Cloud, Tailwind CSS, and CapCut. I am always eager to learn and grow, and I am excited to contribute to the community as a developer.",
    items: [
      {
        company: "Microsoft",
        position: "Software Engineer",
        duration: "2020 - Present",
      }
    ]
};
//Education Data
const eductaion = {
  icon: "/assets/resum/cap.svg",
  title: "My Education",
  Description: "I am a developer with a passion for creating engaging and user-friendly applications. My expertise lies in building efficient, responsive, and accessible web applications using HTML, CSS, JavaScript, and frameworks like React, Next.js, and Laravel.",
  items: [
    {
      institution: "Addis Ababa University",
      degree: "Bs. in Information System",
      duration: "2021 - Present",
    }, {
      institution: "Cisco",
      degree: "CCNA",
      duration: "2017 - 2020",
    }
  ]
};
//Skills Data
const skills = {
  title: "My Skills",
  Description: "I am a developer with a passion for creating engaging and user-friendly applications. My expertise lies in building efficient, responsive, and accessible web applications using HTML, CSS, JavaScript, and frameworks like React, Next.js, and Laravel.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    }, {
      icon: <FaCss3 />,
      name: "css 3"
    }, {
      icon: <FaJs />,
      name: "javascript"
    }, {
      icon: <FaReact />,
      name: "react"
    }, {
      icon: <FaPhp />,
      name: "php"
    }, {
      icon: <FaLaravel />,
      name: "laravel"
    }, {
      icon: <FaDatabase />,
      name: "mysql"
    }, {
      icon: <SiAdobecreativecloud />,
      name: "adobecreative cloud"
    }, {
      icon: <SiTailwindcss />,
      name: "tailwind css"
    }, {
      icon: <SiNextdotjs />,
      name: "next.js"
    }, {
      icon: <SiDavinciresolve />,
      name: "davinci resolve"
    }
  ]
}

import { Tabs, TabsTrigger, TabsList } from '@/components/ui/tabs';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue='experience ' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger  value="experiece">Experience</TabsTrigger>
            <TabsTrigger  value="education">Education</TabsTrigger>
            <TabsTrigger  value="skills">Skills</TabsTrigger>
            <TabsTrigger  value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content  */}
          <div className='min-h-[70vh] w-full'>
            {/* experience  */}
            <TabsContent value="experience" className='w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiences.description}</p>
                <ScrollArea className="h-[400px] ">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experiences.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent '>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left '>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot  */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 '>{items.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education  */}
            <TabsContent value="education" className='w-full'>
              Education
            </TabsContent>
            {/* Skills  */}
            <TabsContent value="skills" className='w-full'>
              Skills
            </TabsContent>
            {/* about  */}
            <TabsContent value="about" className='w-full'>
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
// const Resume = () => {
//   return (
//     <div>
//       <h1>{skills.title}</h1>
//       <p>{skills.Description}</p>
//       <RovingFocusGroup>
//         {skills.skillList.map((skill, index) => (
//           <RovingFocusGroupItem key={index}>
//             <div className="skill-item">
//               {skill.icon}
//               <span>{skill.name}</span>
//             </div>
//           </RovingFocusGroupItem>
//         ))}
//       </RovingFocusGroup>
//     </div>
//   );
// };

export default Resume;
