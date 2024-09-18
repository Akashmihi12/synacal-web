import React from 'react'

type OverComeBlockProps = {
    amount: string,
    title: string,
    description: string
}

function OverComeBlock({ amount, title, description }: OverComeBlockProps) {
    return (
        <div className='h-full w-full flex flex-col justify-between'>
            <div className='text-[56px] leading-[64px] font-[500px] text-black'>{amount}</div>
            <div className='text-[20px] leading-[28px] font-[600px] text-[#31323E]'>{title}</div>
            <div className='text-[18px] leading-[28px] font-[500px] text-[#31323E]'>{description}</div>
        </div>
    )
}

export default OverComeBlock