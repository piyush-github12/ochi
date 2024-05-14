import { motion } from 'framer-motion'
import React from 'react'

const marque = () => {
    
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.05"
      className="w-full relative  bg-[#004d43] py-20 rounded-t-2xl"
    >
      <div className="border-t-2 border-b-2 border-white/50 text-white font-extrabold flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[21vw] uppercase pr-10 leading-[19vw] tracking-tighter"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[21vw] uppercase pr-10 leading-[19vw] tracking-tighter"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[21vw] uppercase pr-10 leading-[19vw] tracking-tighter"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default marque