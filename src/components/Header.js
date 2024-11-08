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
    <div className='w-full  overflow-hidden flex justify-between'>
     
       {/* left image div  */}
        <div className='w-[180px] h-[50px] pt-[25px] pl-[50px]'>
          <img src={Capa5}/>   
        </div>   

        {/* rigth div with 5 things    */}
        <div className='flex pt-[20px] w-[555px]'>

            {/* bell-icon div  */}
            <div className='relative'>
                <img src={LivePulseAniam} className='relative left-[-10px] top-[-5px] z-10' />
                <img src={Vector} className=' absolute w-[18px] h-[23px] top-[14px] '/>
            </div>

            {/* robinos coin div  */}
            <div className='flex border rounded-md border-slate-800 w-[120px] '>
                {/* left side two img  */}
                <div className='pl-2'>
                    <img src={ThreeColorRobinos} className=' relative w-[24px] h-[24px] top-[13px] '/>
                    <p className='relative text-white left-8 font-clash font-medium leading-[17.22px] top-[-9px] w-[38px]'>Telos</p>
                    
                </div>

                {/* right down logo div  */}
                <div>
                    <img src={DownArrow} className=' w-[10px] h-[5px] relative top-[22px] left-[55px] '/>
                </div>
               
            </div>

            {/* 3 numbered div  */}
            <div className='text-white border rounded-md border-slate-800 flex gap-x-5 ml-2'>

                <div className='flex justify-center w-[87px] bg-[#131313] items-center  h-[30px] mt-2 ml-1 rounded-md px-1 '>
                    <img src={LivePulseAniam} className=''/>
                    <p className='left-[-15px] relative font-clash font-medium leading-[17.22px] text-[14px]'>13,580</p>
                </div>

                <div  className='flex gap-x-1 justify-center w-[87px] bg-[#131313] items-center  h-[30px] mt-2  rounded-md px-1 '>
                    <img src={Star}/>
                    <p className='font-clash font-medium leading-[17.22px] text-[14px]'>1,210</p>
                </div>

                <div className='flex items-center pr-2'>
                  <p className='font-clash font-medium leading-[17.22px] text-[14px] flex items-center'>0x4cd..edEF</p>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Header