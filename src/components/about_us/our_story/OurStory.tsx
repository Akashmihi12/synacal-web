import ResearchDataBlock from '@/components/research/ResearchDataBlock'
import React from 'react'
import OurStoryDataBlock from './OurStoryBlock'

function OurStory() {
    return (
        <div className='w-full h-[668px] flex justify-center '>
            <div className='w-[74%] h-full flex flex-col gap-[42px]'>
                <div className='w-full h-[28%] '>
                    <div className='text-[56px] leading-[64px] font-[500px] text-center text-black'>Our Story</div>
                    <div className='text-[18px] leading-[32px] font-[400px] text-center text-[#31323E] mt-[0.5%]'>
                        Our story began with a vision to empower businesses with cutting-edge technology solutions. We started as a small team of tech enthusiasts and in the process of growing into a dynamic group of experts dedicated to delivering exceptional services to our clients. Our journey is fueled by a passion for innovation, a commitment to excellence, and a drive to create a positive impact in the world.</div>
                </div>
                <div className='w-full h-[72%]  grid grid-cols-3 gap-4'>
                    <div>
                        <OurStoryDataBlock
                            date="From Start-Up to Global Success"
                            imageUrl="/research/subresearch1.webp"
                            content="Chronicles our journey from a small start-up to a global powerhouse, emphasizing the challenges our founders overcame to 
achieve success."
                        />
                    </div>
                    <div>
                        <OurStoryDataBlock
                            date="Innovating Through Adversity"
                            imageUrl="/research/subresearch2.webp"
                            content="Focuses on how we navigated a rapidly changing business landscape through innovation and resilience, staying ahead 
of the curve."
                        />
                    </div>
                    <div>
                        <OurStoryDataBlock
                            date="Building a Legacy of Excellence"
                            imageUrl="/research/subresearch3.webp"
                            content="Showcases our commitment to positive impact and excellence, detailing how we've become industry leaders while upholding our 
core values."
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OurStory