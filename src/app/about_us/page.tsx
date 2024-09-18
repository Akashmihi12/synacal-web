import AboutUs from '@/components/about_us/AboutUs'
import Mission from '@/components/about_us/mission/Mission'
import OurStory from '@/components/about_us/our_story/OurStory'
import Overcome from '@/components/about_us/overcomes/Overcome'
import Section1 from '@/components/about_us/section1/Section1'
import HeadNotice from '@/components/HeadNotice'
import React from 'react'

function page() {
    return (
        <div>
            <div className='mt-[86px]'>
                <AboutUs />
            </div>
            <div className=" mt-[106px] w-full bg-background-color">
                <HeadNotice
                    text1="Passionate Professionals Delivering."
                    specialText="Innovative"
                    text2="Solutions Beyond Your Expectations."
                    description="Embracing technology is crucial for the growth of your business, and our cutting-edge solutions empower you to thrive in the ever-evolving digital landscape."
                    button_text="Contact Us"
                />
            </div>
            <div className='mt-[86px]'>
                <Section1 />
            </div>
            <div className='mt-[86px]'>
                <Overcome />
            </div>
            <div className='mt-[86px]'>
                <OurStory />
            </div>
            <div className='mt-[86px]'>
                <Mission />
            </div>
        </div>
    )
}

export default page