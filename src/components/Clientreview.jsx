import React, { useState } from "react";
import Btn from "./Btn";
import { easeInOut, motion } from "framer-motion";

const Clientreview = () => {
  const [isOpen, setIsOpen] = useState('1');


  const reviews = [
    {
      id: "1",
      cpn: "KARMAN VENTURES",
      servises: ["invester deck", "sales deck"],
      bName: "William Barnes",
      photo:
        "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
      para: "  They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5 ",
    },
    {
      id: "2",
      cpn: "KARMAN VENTURES",
      servises: ["invester deck", "sales deck"],
      bName: "William Barnes",
      photo:
        "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
      para: "  They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5 ",
    },
    {
      id: "3",
      cpn: "KARMAN VENTURES",
      servises: ["invester deck", "sales deck"],
      bName: "William Barnes",
      photo:
        "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
      para: "  They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5 ",
    },
    {
      id: "4",
      cpn: "KARMAN VENTURES",
      servises: ["invester deck", "sales deck"],
      bName: "William Barnes",
      photo:
        "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
      para: "  They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5 ",
    },
  ];
  return (
    <div className="w-full h-fit bg-white px-14 py-16">
      <h1 className="text-[3.5vw] leading-none tracking-tight   pb-10">
        Client's Reviews
      </h1>
      <motion.div
        className=""
        
      >
        {reviews.map((review,index) => {
          return (
            <motion.div
              initial={false}
              animate={{ height: isOpen == index + 1 ? "30vw" : "40px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="w-full overflow-hidden  boder border-[#21212164] flex mt-2 border-t-2 pt-2"
              key={review.id}
            >
              <div className="w-[50vw]  h-[30vw]">
                <div className="w-full flex ">
                  <div className="w-1/2 h-[30vw]">
                    <h1>KARMAN VENTURES</h1>
                  </div>
                  <div className="w-1/2  h-[30vw] uppercase">
                    <h1 className="mb-10">SERVICES:</h1>
                   
                    <Btn value="investor deck" issmal='true'/>
                    <br />
                    <Btn value="sales deck"  issmal="true"/>
                  </div>
                </div>
              </div>
              <div className="w-[50vw]  h-[30vw] flex">
                <div className="w-[80%] ">
                  <h1>William Barnes</h1>
                  <img
                    className="w-[100px] h-[100px] border-2 rounded-md mt-10 mb-10"
                    src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                    alt=""
                  />
                  <p className="w-[70%]">
                    They were transparent about the time and the stages of the
                    project. The end product is high quality, and I feel
                    confident about how they were handholding the client through
                    the process. I feel like I can introduce them to someone who
                    needs to put a sales deck together from scratch, and they
                    would be able to handhold the client experience from 0 to
                    100 very effectively from story to design. 5/5
                  </p>
                </div>
                <div>
                  <h1
                    onClick={() => setIsOpen(review.id)}
                    className={`cursor-pointer ${
                      isOpen == index + 1 ? "text-[#21212181]" : "text-black"
                    }`}
                  >
                    READ
                  </h1>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Clientreview;
