"use client";

import { motion } from 'framer-motion';
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity:0.5 }}
        animate= {{
          opacity:1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten'>
          <Image
            src='/assets/me_bg.png'
            priority
            quality={100}
            alt='Tolosa'
            width={458}
            height={498}
            className='object-contain '
          />
        </div> 
      </motion.div>
    </div>
  )
}

export default Photo
