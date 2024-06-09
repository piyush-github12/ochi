import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Play = () => {

  const [rotate, setrotate] = useState(0)

  const [dx, setdx] = useState(0)
  const [dy, setdy] = useState(0)

  useEffect(()=>{

    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      setdx(deltaX/40)
      setdy(deltaY/40)
      

      var angal = Math.atan2(deltaY , deltaX) * (180/Math.PI);

      setrotate(angal-180)
    })
  })

  
  return (
    <div className="relative w-full h-fit overflow-hidden  ">
      <div data-scroll >
        <img
          className="w-full h-full object-cover"
          src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg"
          alt=""
        />
        <div className="absolute  w-[500px] h-[400px] max-md:w-[200px] max-md:h-[100px]  left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2  flex    ">
          <div
            data-scroll
            data-scroll-speed="0.2"
            className="w-[50%] h-full   flex items-center justify-center"
          >
            <div
              id="eye1"
              className="relative w-[200px] h-[200px] max-md:h-[100px] bg-white rounded-full flex items-center justify-center"
            >
              <div
                style={{ transform: `translate(${dx}px, ${dy}px` }}
                className="relative  w-[70%] h-[70%] rounded-full bg-[#212020] "
              >
                <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white">
                  PLAY
                </h2>
                <div
                  id="line"
                  style={{
                    transform: `translate(-50% ,-50%)  rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 px-[2px] "
                >
                  <div className="h-full w-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="0.2"
            className="w-[50%] h-full  flex items-center justify-center"
          >
            <div
              id="eye2"
              className="relative w-[200px] h-[200px] max-md:h-[100px] bg-white rounded-full flex items-center justify-center"
            >
              <div
                style={{ transform: `translate(${dx}px, ${dy}px` }}
                className="relative  w-[70%] h-[70%] rounded-full bg-[#212020] "
              >
                <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white">
                  PLAY
                </h2>
                <div
                  id="line"
                  style={{
                    transform: `translate(-50% ,-50%)  rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 px-[2px] "
                >
                  <div className="h-full w-5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play