import React from 'react'
import Btn from './Btn';
import { motion } from 'framer-motion';

const Ready = () => {
  
  return (
    <div className="w-full relative h-[100vh] bg-[#ccea69] ">
      <div className="  w-full pt-20 text-center text-[12vw] leading-[11vw] uppercase font-extrabold  tracking-tighter text-[#202021]">
        {["ready", "to start", "the project?"].map((item) => {
          return (
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "50%" }}
                whileInView={{ y: "0" }}
                transition={{ delay: "0.5" }}
                className=" h-[12vw] "
              >
                {item}
              </motion.h1>
            </div>
          );
        })}
      </div>
      <div
        
        className="flex flex-col w-full mt-16 items-center justify-center"
      >
        <Btn value="START THE PROJECT" clr="black" />
        <h3>or</h3>
        <Btn value="hello@ochi.design" />
      </div>

      <div className="absolute z-[99999] w-[500px] h-[400px]  left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2  flex    ">
        <div
          data-scroll
          data-scroll-speed="0.5"
          className="w-[50%] h-full  flex items-center justify-center"
        >
          <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center">
            <div className="w-[70%] h-[70%] rounded-full bg-[#212020] flex items-center justify-center">
              <div className="w-full h-5 px-[2px] ">
                <div className="h-full w-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.5"
          className="w-[50%] h-full  flex items-center justify-center"
        >
          <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center">
            <div className="w-[70%] h-[70%] rounded-full bg-[#212020] flex items-center justify-center">
              <div className="w-full h-5 px-[2px] ">
                <div className="h-full w-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready