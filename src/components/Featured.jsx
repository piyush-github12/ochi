import React from "react";

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
  return (
    <div className="w-full h-fit bg-white pt-20">
      <h1 className="text-[3.5vw] leading-none tracking-tight px-14 border-b-2 ">
        Featured Projects
      </h1>

      <div className=" w-full h-fit mt-10 px-14">
        {dataarray.map((item, index) => {
          return (
            
            <div className="w-[45vw] h-[40vw] bg-teal-300 inline-block  ">{item.nm} </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
