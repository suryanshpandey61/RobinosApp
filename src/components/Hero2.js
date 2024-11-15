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
    <div className='flex ml-[75px]   flex-col lg:flex-row mt-6 gap-4 mx-auto'>
    {/* Forecaster Membership Section */}
    <div className='mb-5'>
        <div className='w-full lg:w-[680px] h-[360px] border bg-[#101010] text-white rounded-md border-slate-800 relative mt-6 lg:mt-0'>
            {/* Top Text */}
            <div className='flex flex-col justify-between'>
                <div className='absolute'>
                    <img src={Cross} className="w-8 h-8"/>
                </div>
                <div className='w-[50px] pt-5 pl-5'>
                    <p className='font-clash font-medium leading-[15.22px] text-[22px]'>
                        ForeCaster <br /><br />Membership 
                    </p>
                </div>

                {/* Icon Text Div */}
                <div className='flex flex-col pl-5 w-full lg:w-[400px] mt-3'>
                    {/* Power and Burn Section */}
                    <div className='flex flex-col sm:flex-row gap-8 sm:gap-20 text-[14px]'>
                        {/* Power */}
                        <div className='flex gap-x-2'>
                            <img src={powerLogo} className="w-6 h-6"/>
                            <span>Power <span className='text-[#616161]'>your NFT</span></span>
                        </div>
                        {/* Burn */}
                        <div className='flex gap-x-2'>
                            <img src={Burnlogo} className="w-6 h-6"/>
                            <span>Burn <span className='text-[#616161]'>your Hunch</span></span>
                        </div>
                    </div>

                    {/* Lock and Receive Section */}
                    <div className='pt-3 flex flex-col sm:flex-row gap-8 sm:gap-20 text-[14px]'>
                        {/* Lock */}
                        <div className='flex gap-x-2'>
                            <img src={orangeCircle} className="w-6 h-6"/>
                            <span>Lock <span className='text-[#616161]'>your 4cast</span></span>
                        </div>
                        {/* Receive */}
                        <div className='flex gap-x-2'>
                            <img src={bolt} className="w-6 h-6"/>
                            <span>Receive <span className='text-[#616161]'>Delegations</span></span>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Join Wishlist Section */}
            <div className='flex pl-5 mt-8 bg-[#181818] ml-2 rounded-xl px-2 py-5 w-full lg:w-[400px]'>
                <div className='w-full sm:w-[200px]'>
                    <span className='text-[#616161]'>
                        Mint your NFT to unlock unique features
                    </span>
                </div>
                <div>
                    <img src={wishlistBtn} className=""/>
                </div>
                <div>
                    <img src={LuliImage} className='absolute top-[-90px] w-[500px] left-[80%] transform -translate-x-[50%]' />
                </div>
            </div>
        </div>
    </div>

    {/* Right Image Section */}
    <div className='lg:w-[480px] w-full'>
        <img src={DelegateImage} className=' object-cover' />
    </div>
</div>

  )
}

export default Hero2