import React from 'react'
import Btn from './Btn'


const Textsection = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full h-full relative bg-[#ccea69] max-md:py-20 max-md:px-5 py-32 px-14 "
    >
      <div className="w-[80vw] ">
        <h1 className="text-[3.5vw] max-md:text-[30px] leading-none tracking-tight">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.{" "}
        </h1>
      </div>
      <div className="w-full h-full border-t-2 border-b-2 mt-16 border-zinc-800/50  flex max-md:block items-center">
        <div className=" w-[50vw] h-[25vw] p-5">
          <h3 className="uppercase">what you can expect</h3>
        </div>
        <div className=" w-[50vw] h-full p-5 flex max-md:block max-md:w-full max-md:p-0">
          <div className="w-[50%] max-md:w-full  overflow-hidden px-5">
            <h3>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
              <br />
              <br />
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h3>
          </div>
          <div className="flex flex-col px-10 justify-center">
            <h3>S:</h3>
            <br />
            {["Instagram", "Facebook", "Behance", "Linkedin"].map(
              (item, index) => (
                <a href="#" className="underline">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex  justify-between py-5 ">
        <div>
          <h1 className="text-[3.5vw] ">Our approach</h1>
          <Btn value="Read More" clr="black" />
          <Btn value="Read More" />
        </div>
        <div className="w-[50vw] ">
          <img
            data-scroll
            data-scroll-speed="-0.1"
            className="w-full h-full object-cover rounded-xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Textsection