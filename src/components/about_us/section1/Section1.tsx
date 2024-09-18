import React from 'react'


function Section1() {
    return (
        <div className='w-full h-screen flex justify-center '>
            <div className='w-[74%] h-full'>
                <div className='flex gap-[1.15%] h-full'>
                    <div className='h-full w-[60%] bg-[#DFE3E633] opacity-80 rounded-2xl border-[1px] border-white-border-gradient'>

                    </div>
                    <div className='h-full w-[40%] '>
                        <div className='w-full h-full flex flex-col gap-[1.15%]'>
                            <div className='w-full h-full bg-[#DFE3E633] opacity-80 rounded-2xl border-[1px] border-white-border-gradient'></div>
                            <div className='w-full h-full bg-[#DFE3E633] opacity-80 rounded-2xl border-[1px] border-white-border-gradient '></div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section1;

