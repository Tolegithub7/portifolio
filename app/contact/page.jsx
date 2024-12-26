"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "+251955251753",
  }, {
    icon: <FaEnvelope />,
    title: "Email",
    content: "tolasa.diriba-ug@aau.edu.et",
  }, {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    content: "Addis Ababa, Ethiopia",
  }
];
import { motion } from "framer-motion";

const Contact = () => {
  return <motion.section 
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      transition: { delay:2.4, duration: 0.4, ease: "easeIn" },
  }}
  className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form  */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent "> Lets work together!</h3>
            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            {/* input  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="firstname" placeholder="First Name" />
              <Input label="lastname" placeholder="Last Name" />
              <Input label="email" placeholder="Email Address" />
              <Input label="phone" placeholder="Phone Number" />
            </div>
            {/* select  */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder='Select a service'/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a Service</SelectLabel>
                  <SelectItem value='web development'>Web Development</SelectItem>
                  <SelectItem value='video editing'>Video Editing</SelectItem>
                  <SelectItem value='digital marketing'>Digital Marketing</SelectItem>
                  <SelectItem value='deploy'>Deployment, Testing and Maintainance </SelectItem>
                  <SelectItem value='other'>Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea  */}
            <Textarea 
              className='h-[200px]'
              placeholder="Type your message here..."
            />
            {/* button  */}
            <Button size='sm' className='max-w-40'>Send Message</Button>
          </form>
        </div>
        {/* info  */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-6">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex gap-4 items-center">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px] ">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                  <p className="text-white/60">{item.title}: {item.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
