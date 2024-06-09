import React from 'react'
import coimg from "../assets/images/content-image01.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Btn from './Btn';


const Landingpage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.5" className="w-full h-screen pt-1">
      <div  className="mt-52 ">
        {["we create", "eye-opening", "presentation"].map((item, index) => {
          return (
            <>
              <div className="ml-14 max-md:ml-5">
                <div className="flex items-center ">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: "0" }}
                      animate={{ width: "12vw" }}
                      transition={{ delay: "0.7" }}
                      className="w-[0]] h-[8vw] rounded-lg overflow-hidden bg-red-500"
                    >
                      {/* <img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' alt="" /> */}
                      <img
                        src={coimg}
                        alt=""
                        className="w-[12vw] h-[8vw] object-cover "
                      />
                    </motion.div>
                  )}
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0" }}
                    transition={{ delay: "0.2" }}
                    className="font-extrabold text-[8vw] max-md:text-[50px] max-md:leading-[45px] text-[#202021] uppercase leading-[6.6vw] tracking-tighter"
                  >
                    {item}
                  </motion.h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div
        data-scroll
        data-scroll-speed=".2"
        className="flex w-full max-md:px-2 items-center justify-between px-14 py-5 mt-52 border-t-2 border-black/50"
      >
        {[
          "For public and private companies",
          "From the first pitch of IPO",
        ].map((item, index) => (
          <h1 className='max-md:text-[0.5rem]'>{item}</h1>
        ))}

        <Btn value="START YOUR PROJECT" />
        
      </div>
    </div>
  );
}

export default Landingpage