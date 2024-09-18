import React from 'react'

function Mission() {
    return (
        <div className='w-full h-[682px] flex justify-center'>
            <div className='w-[74%] h-full flex flex-row'>
                <div className='w-full h-full rounded-[16px]' style={{
                    backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
                }}></div>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[85%] h-[66%] flex flex-col gap-4'>
                        <div
                            className='text-[56px] font-medium leading-[64px] text-black'
                        >Our Mission</div>
                        <div
                            className='text-[18px] font-normal leading-[32px] text-black'
                        >At Synacal, our mission is to empower businesses with the latest advancements in artificial intelligence, machine learning, and data science. We believe that by harnessing the power of these technologies, we can help our clients make more informed decisions, create efficiencies, and unlock new opportunities for growth.
                        </div>
                        <div
                            className='text-[18px] font-normal leading-[32px] text-black'
                        >Our goal is to be a trusted partner for businesses looking to stay ahead of the curve and achieve their strategic objectives.
                        </div>
                        <div className='rounded-[57px] border-[1px] border-black text-black px-[16px] py-[24px] text-center text-[14px] font-semibold w-[118px] h-[48px] flex items-center justify-center'>
                            <span>Contact Us</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Mission