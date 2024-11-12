import React from 'react'
import Cross from "../assets/cross.svg"
import powerLogo  from "../assets/powerlogo.svg"
import LuliImage from "../assets/Luli Image.svg"
import DelegateImage from '../assets/DelegateImage.svg'
import Burnlogo from '../assets/burnlogo.svg'
import orangeCircle from '../assets/orangeRing.svg'
import bolt from '../assets/bolt.svg';
import wishlistBtn from '../assets/wishlist btn.svg'
function Hero2() {
  return (
    <div className='flex mt-6 w-[1120px] gap-x-4 mx-auto'>
        {/* forecaster membership  div  */}
        <div className='mb-5'>
        <div className='w-full lg:w-[680px] h-[380px] border bg-[#101010] text-white rounded-md border-slate-800 relative mt-6 lg:mt-0'>
        {/* top text  */}
        <div className='flex flex-col justify-between'>
            <div className='absolute'>
                <img src={Cross} />
            </div>
            <div className='w-[50px] pt-5 pl-5'>
                <p className='font-clash font-medium leading-[15.22px] text-[22px]'>
                    ForeCaster <br /><br />Membership 
                </p>
            </div>
            {/*4 icon text-div  */}
            <div className='flex mt-3 flex-col pl-5 w-[400px]'>
                {/* power burn  */}
                <div className='flex  pt-[50px] gap-x-[80px] text-[14px]'>
                    {/* power text */}
                    <div className='flex gap-x-2'>
                        <img src={powerLogo}/>
                        <span>Power<span className='text-[#616161]'> your NFT</span></span>
                    </div>
                    {/* burn text  */}
                    <div className='flex gap-x-2'>
                      <img src={Burnlogo}/>
                      <span>Burn <span className='text-[#616161]'> your Hunch</span></span>
                    </div>
                </div>

                {/* lock recieve  */}
                <div>
                    {/* lock  */}
                    <div className='pt-3 flex gap-x-[80px] text-[14px]'>
                    <div className='flex gap-x-2'>
                        <img src={orangeCircle}/>
                        <span>Lock<span className='text-[#616161]'> your 4cast</span></span>
                    </div>
                    <div className='flex gap-x-2'>
                        <img src={bolt}/>
                        <span>Recieve<span className='text-[#616161]'> Delegations</span></span>
                    </div>

                    </div>
                </div>


            </div>
           
        </div>
        
   {/* join wishlist wali big div  */}
   <div className='flex pl-5 mt-[50px] bg-[#181818]  ml-2 rounded-xl px-2 py-5 w-[400px]  '>
            <div className='w-[200px]'>
                <span className='text-[#616161]'>
                    Mint your NFT to unlock unique features
                </span>
            </div>
            {/* wishlist btn  */}
            <div>
                <img src={wishlistBtn}/>

            </div>
            <div>
            <img src={LuliImage} className='absolute top-[-90px] w-[500px] left-[300px] '/>
        </div>
        </div>
        

       
        </div>
        
     
           
        </div>
        {/* rigth image div  */}
        <div className=''>
            <img src={DelegateImage} className='h-[380px]'/>
        </div>
    </div>
  )
}

export default Hero2