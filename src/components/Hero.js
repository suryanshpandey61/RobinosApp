import React from 'react'
import Cross from "../assets/cross.svg"
import TopArrow from "../assets/Group 43031.svg";
import Cross1 from "../assets/Group 43030.svg"
import OrangeRope from "../assets/OrangeRope.svg"
import WhiteDot from "../assets/WhiteDot.svg"
import OrangeCircularRing from "../assets/OrangeCirculerRing.svg"
import CirculerStar from "../assets/cabeza.71 1.svg";
import BuyBtn from "../assets/Buy4Castbtn.svg";
import OpenShopbtn from "../assets/OpenShopbtn.svg"
function Hero() {
  return (
    <div className="flex flex-col lg:flex-row lg:mt-9 lg:ml-[70px] mt-4">

    {/* Left Square Div */}
    <div className="w-full lg:w-[400px] h-[300px] border bg-[#101010] text-white rounded-md border-slate-800 relative mt-4 lg:mt-0">
      {/* Top Text and Top Arrow Div */}
      <div className="flex justify-between">
        <div className="absolute">
          <img src={Cross} />
        </div>
        <div className="w-[50px] pt-3 pl-4">
          <p className="font-clash font-medium leading-[15.22px] text-[22px]">
            Lifetime <br /><br />Rewards
          </p>
        </div>
        <div className="pt-3 pr-4">
          <img src={TopArrow} />
        </div>
      </div>
  
      {/* Dollar Money Div */}
      <div className="font-clash mt-2 font-medium leading-[15.22px] text-[35px] top-[60px] left-4 relative">
        <span className="font-clash text-[20px] absolute top-[-5px]">$</span>
        <span className="relative left-4">8,632</span>
        <span className="text-[16px] font-clash font-medium leading-3 absolute top-[-5px] left-[105px]">.55</span>
      </div>
  
      {/* Bottom Two Images */}
      <div className="absolute bottom-0 mb-3 ml-2">
        <img src={Cross1} />
        <img src={OrangeRope} className="absolute bottom-0 left-1" />
        <img src={WhiteDot} className="absolute left-[360px] top-4" />
      </div>
    </div>
  
    {/* Right Side Divs */}
    <div className="relative lg:left-[20px] mt-4 lg:mt-0">
  
      {/* Top Two Left-Right Rectangle Divs */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
  
        {/* New Cycle Left Rectangle */}
        <div className="w-full lg:w-[340px] h-[180px] border bg-[#101010] text-white rounded-md border-slate-800 relative">
          {/* Top Text and Top Orange Circular Ring */}
          <div className="flex justify-between">
            <div className="absolute">
              <img src={Cross} />
            </div>
            <div className="w-[190px] pt-3 pl-4">
              <p className="font-clash font-medium leading-[15.22px] text-[22px]">
                New Cycle <br /><br />Rewards
              </p>
            </div>
            <div className="pt-3 pr-4">
              <img src={OrangeCircularRing} />
            </div>
          </div>
  
          {/* Middle Level Text */}
          <div className="mt-6 ml-3">
            <p className="font-clash font-medium leading-[15.22px]">
              <span className="text-[#616161]">Cycle Ends in</span> <span> 1 day 32 mins</span>
            </p>
          </div>
  
          {/* Dollar Money Div */}
          <div className="font-clash font-medium leading-[15.22px] text-[35px] top-[30px] left-4 relative">
            <span className="font-clash text-[20px] absolute top-[-5px]">$</span>
            <span className="relative left-4">1,259</span>
          </div>
        </div>
  
        {/* Claimable Rewards Right Rectangle Div */}
        <div className="w-full lg:w-[340px] h-[180px] border bg-[#101010] text-white rounded-md border-slate-800 relative">
          {/* Top Text and Top Orange Circular Ring */}
          <div className="flex justify-between">
            <div className="absolute bottom-0 right-0 w-[150px]">
              <img src={Cross} />
            </div>
            <div className="w-[190px] pt-3 pl-4">
              <p className="font-clash font-medium leading-[15.22px] text-[22px]">
                Claimable <br /><br />Rewards
              </p>
            </div>
          </div>
  
          {/* Dollar Money Div */}
          <div className="font-clash font-medium leading-[15.22px] text-[35px] top-[80px] left-4 relative">
            <span className="font-clash text-[20px] absolute top-[-5px]">$</span>
            <span className="relative left-4">0</span>
          </div>
        </div>
  
      </div>
  
      {/* Bottom Hunch Shop Long Div */}
      <div className="w-full lg:w-[696px] flex items-center mt-3 h-[110px] border bg-[#101010] text-white rounded-md border-slate-800 relative">
        {/* Star Image Div */}
        <div>
          <img src={CirculerStar} className="relative ml-4" />
        </div>
  
        {/* Text Div */}
        <div className="flex flex-col gap-y-1">
          <p className="font-clash font-medium leading-[15.22px] text-[16px]">
            Hunch Shop
          </p>
          <p className="font-clash font-medium text-[15px] leading-[15.22px]">
            <span className="text-[#616161]">Exchange your Hunch for valuable assets!</span>
          </p>
        </div>
  
        <div className="flex gap-x-3">
          <div>
            <img src={OpenShopbtn} />
          </div>
          <div>
            <img src={BuyBtn} />
          </div>
        </div>
      </div>
  
    </div>
  
  </div>
  

  )
}

export default Hero