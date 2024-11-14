import React from 'react'
import Capa5 from "../assets/Capa_5.png"
import LivePulseAniam from "../assets/Live Pulse Animation.png"
import Vector from "../assets/Vector.png"
import ThreeColorRobinos from "../assets/3_robinos_coin_color 197.png"
import Star from "../assets/Star.png"
import DownArrow from "../assets/Vector 35.png"

function Header() {
  return (
   
    //  top level div 
<div className="w-full overflow-hidden flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 py-4">
  {/* Left image div */}
  <div className="w-full lg:w-[180px] h-[50px] pt-[25px] pl-0 lg:pl-[50px] mb-4 lg:mb-0 flex justify-center">
    <img src={Capa5} className="max-w-full" />
  </div>

  {/* Right div with 5 things */}
  <div className="flex flex-col lg:flex-row pt-[20px] w-full lg:w-[555px] gap-4 lg:gap-6 items-center lg:items-start">

    {/* Bell-icon div */}
    <div className="relative flex justify-center">
      <img src={LivePulseAniam} className="relative left-[-10px] top-[-5px] z-10" />
      <img src={Vector} className="absolute w-[18px] h-[23px] top-[14px]" />
    </div>

    {/* Robinos coin div */}
    <div className="flex border rounded-md border-slate-800  w-full lg:w-[120px] h-[50px] justify-between items-center px-2 py-1">
      {/* Left side two images */}
      <div className="flex items-center space-x-2">
        <img src={ThreeColorRobinos} className="w-[24px] h-[24px]" />
        <p className="text-white font-clash font-medium text-sm">Telos</p>
      </div>

      {/* Right down arrow */}
      <div>
        <img src={DownArrow} className="w-[10px] h-[5px]" />
      </div>
    </div>

    {/* 3 numbered div */}
    <div className="text-white border pb-3  rounded-md border-slate-800 justify-between flex gap-x-5 lg:gap-x-4 w-full lg:w-auto">
      
      <div className="flex justify-center w-[87px] bg-[#131313] items-center h-[30px] mt-2 rounded-md px-1">
        <img src={LivePulseAniam} className="w-[18px] h-[18px]" />
        <p className="font-clash font-medium leading-[17.22px] text-[14px]">13,580</p>
      </div>

      <div className="flex gap-x-1 justify-center w-[87px] bg-[#131313] items-center h-[30px] mt-2 rounded-md px-1">
        <img src={Star} className="w-[18px] h-[18px]" />
        <p className="font-clash font-medium leading-[17.22px] text-[14px]">1,210</p>
      </div>

      <div className="flex items-center pr-2">
        <p className="font-clash font-medium leading-[17.22px] text-[14px]">0x4cd..edEF</p>
      </div>

    </div>

  </div>
</div>

  )
}

export default Header