import {  motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Btn = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div div className="flex gap-5 items-center">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`group relative w-fit ${
          props.clr === "black"
            ? isHovered
              ? "text-black bg-black"
              : "bg-black , text-white"
            : isHovered
            ? "text-white"
            : " text-black"
        } border-2 border-[#000000] overflow-hidden rounded-full ${
          props.issmal ? "py-2 text-xs" : "py-3 text-md"
        }   px-5 flex gap-7 items-center cursor-pointer  `}
      >
        <motion.div
          initial={{ transform: "translate(0%, 100%)", borderRadius: "50%" }}
          animate={{
            borderRadius: isHovered ? "10%" : "50%",
            transform: isHovered ? "translate(0%, 0%)" : "translate(0%, 100%)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute left-0 top-0 w-full h-full  ${
            props.clr === "black" ? "bg-white" : " bg-black"
          }   `}
        ></motion.div>

        <motion.div className="z-[2]">
          <h3 className=" font-semibold whitespace-nowrap">{props.value}</h3>
        </motion.div>
        {props.issmal ? (
          ""
        ) : (
          <motion.div
            initial={{}}
            animate={{ scale: isHovered ? 5 : 1, rotate: isHovered ? -45 : 0 }}
            transition={{ ease: "linear", duration: 0.2, delay: 0.1 }}
            className={`w-2 h-2  ${
              props.clr === "black"
                ? isHovered
                  ? "bg-black text-white"
                  : "bg-white"
                : isHovered
                ? "bg-white text-black"
                : "bg-black text-white"
            }   rounded-full flex items-center justify-center `}
          >
            <FaArrowRight
              className={`  w-[50%] h-[50%] ${
                isHovered ? "group-hover:block" : "hidden"
              }`}
            />
          </motion.div>
        )}
      </motion.div>

      {props.issmal? ( <motion.div
          initial={{}}
          animate={{ scale: isHovered ? 4 : 0, rotate: isHovered ? -45 : 0 }}
          transition={{ ease: "linear", duration: 0.3  }}
          className={`w-2 h-2  ${props.clr === "black" ? (isHovered ?"bg-black text-white":"bg-white"):(isHovered? "bg-blue-300 text-black":"bg-blue-300 text-white")}   rounded-full flex items-center justify-center `}
        >
          <FaArrowRight
            className={`  w-[50%] h-[50%] ${
              isHovered ? "group-hover:block" : "hidden"
            }`}
          />
        </motion.div>):""}
    </div>
  );
};

export default Btn;
