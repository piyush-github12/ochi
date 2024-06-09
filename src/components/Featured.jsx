import React, { useState } from "react";
import Btn from "./Btn";
import { easeInOut, motion } from "framer-motion";

const Featured = () => {
  const dataarray = [
    {
      id: "1",
      nm: "FYDE",
      imageUrl:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
      tags: ["audit", "copywriting", "sales deck", "slides design"],
    },
    {
      id: "2",
      nm: "VISE",
      imageUrl:
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
      tags: ["agency", "compony presentation"],
    },
    {
      id: "3",
      nm: "TRAWA",
      imageUrl:
        "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
      tags: ["brand identity", "design research", "invester deck"],
    },
    {
      id: "4",
      nm: " PREMIUM BLEND",
      imageUrl:
        "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
      tags: ["branded tamplate"],
    },
  ];

  const [ishoverd, setishoverd] = useState("");
  
  return (
    <div className="w-full h-fit bg-white pt-20">
      <h1 className="text-[3.5vw] leading-none tracking-tight px-14 border-b-2 pb-10 ">
        Featured Projects
      </h1>

      <div className=" w-full h-fit mt-10 px-14 max-md:px-0 relative  ">
        {dataarray.map((item, index) => {
          return (
            <div
              onMouseEnter={() => setishoverd(index)}
              onMouseLeave={() => setishoverd("")}
              className="w-1/2 h-[45vw]  inline-block p-10 max-md:p-5  max-md:mb-5 align-top relative "
            >
              <div className=" flex gap-2 items-center ">
                <div className="w-2 h-2 rounded-full bg-[#212121]"></div>
                <h1 className="tracking-tighter uppercase">{item.nm}</h1>
              </div>
              <div className={`group mt-2 mb-2 rounded-xl duration-700 hover:scale-90  overflow-hidden`}>
                <img
                  className="rounded-xl group-hover:scale-125 duration-500 "
                  src={item.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex items-center gap-2 overflow-hidden">
                {item.tags.map((tag, index) => (
                  <div className="px-2 py-1 max-md:px-[2px] max-md:py-[2px] border-2 border-[#2121219a] rounded-full text-[0.7rem] max-md:text-[1.5vw] whitespace-nowrap uppercase">
                    <div>{tag}</div>
                  </div>
                ))}
              </div>
              <div
                className={`absolute flex items-center justify-center    w-[100vw] top-[50%]  ${
                  item.id % 2 == 0 ? "left-[-100%]" : "right-[-100%]"
                } z-[999] pointer-events-none  whitespace-nowrap overflow-hidden  translate-y-[-50%] text-[8vw] font-bold tracking-tighter text-[#ccea69]`}
              >
                <h1 className="">
                  {item.nm.split("").map((item, inx) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={ishoverd === index ? { y: "0" } : { y: "100%" }}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: inx * 0.07,
                      }}
                      className="inline-block pointer-events-none "
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex items-center justify-center mt-10 mb-10">
        <Btn value="view all case studeis" clr="black" />
      </div>
    </div>
  );
};

export default Featured;
