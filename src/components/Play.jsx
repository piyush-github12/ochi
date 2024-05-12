import React from 'react'

const Play = () => {

  
  return (
    <div className="relative overflow-hidden w-screen h-screen ">
      <img
        className="w-full h-full object-cover"
        src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg"
        alt=""
      />
      <div className="absolute w-[500px] h-[400px]  left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2  flex    ">
        <div className="w-[50%] h-full  flex items-center justify-center">
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center">
            <div className="w-[70%] h-[70%] rounded-full bg-[#212020] flex items-center justify-center">
              <div className="w-full h-5 px-[2px] ">
                <div className="h-full w-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full  flex items-center justify-center">
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center">
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

export default Play