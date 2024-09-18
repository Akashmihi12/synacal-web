import React from 'react'
import OverComeBlock from './OverComeBlock'

function Overcome() {
    return (
        <div className='w-full h-[164px]   flex justify-center'>
            <div className='w-[74%] h-full   flex flex-row gap-8 '>
                <div className='w-full h-full '>
                    <OverComeBlock amount='10+' title='Clients' description='The founding story of Hubit is a tale of passion' />
                </div>
                <div className='w-full h-full '>
                    <OverComeBlock amount='50+' title='Industry' description='The founding story of Hubit is a tale of passion' />
                </div>
                <div className='w-full h-full '>
                    <OverComeBlock amount='100+' title='Users' description='The founding story of Hubit is a tale of passion' />
                </div>
                <div className='w-full h-full '>
                    <OverComeBlock amount='100%' title='Customer Satisfaction' description='The founding story of Hubit is a tale of passion' />
                </div>
            </div>
        </div>
    )
}

export default Overcome