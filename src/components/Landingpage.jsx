import React from 'react'
import coimg from "../assets/images/content-image01.jpg"
import { FaArrowRight } from "react-icons/fa6";


const Landingpage = () => {

  return (
    <div className='w-full h-screen pt-1'>
      <div className='mt-52'>

        {['we create', 'eye-opening', 'presentation'].map((item, index) => {

          return (
            <>
          
            <div className='ml-14'>
              <div className='flex items-center '>
                {index === 1 && (<div className='w-[12vw] h-[7vw] rounded-lg overflow-hidden bg-red-500'>
                  {/* <img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' alt="" /> */}
                  <img src={coimg} alt="" />
                </div>)}
                <h1 className='font-extrabold text-[8vw] text-[#202021] uppercase leading-[6.6vw] tracking-tighter'>{item}</h1>
              </div>
              
            </div>
            
            </>
          )
        })}
      </div>
      <div className='flex w-full items-center justify-between px-14 py-5 mt-52 border-t-2 border-black/50' >
        {['For public and private companies', 'From the first pitch of IPO'].map((item, index) => (
          <h1>{item}</h1>
        ))}
        <div className='flex gap-2 '>
          <button className='uppercase  border-2 border-black py-1 px-4 rounded-full text-md'>start the project</button>
          <div className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center -rotate-45'><FaArrowRight/></div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage