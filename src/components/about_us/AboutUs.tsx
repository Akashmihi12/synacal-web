import React from 'react'

function AboutUs() {
    return (
        <div className='w-full h-[292px] flex justify-center items-center'>
            <div className='w-[74%] h-full bg-[#DFE3E633] opacity-80 border-[1px] rounded-[16px] border-white-border-gradient flex flex-col justify-center items-center'>
                <div className='text-[64px] leading-[72px] font-semibold text-Text-Black-gradient text-center mb-2'
                    style={{
                        background: 'linear-gradient(90deg, #272727 0%, #191919 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    About Us
                </div>
                <div className='text-[14px] leading-[24px] font-medium text-Text-Black-gradient text-center'
                    style={{
                        background: 'linear-gradient(90deg, #272727 0%, #191919 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Home/about us
                </div>
            </div>
        </div>
    )
}

export default AboutUs
