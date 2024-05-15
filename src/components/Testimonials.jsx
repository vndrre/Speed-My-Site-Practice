import React from 'react'
import TCard from './TCard'

const Testimonials = () => {
  return (
    <div className='bg-[#F7F7F7] py-20 px-5' id='blog'>
        <div className='text-center'>
            <h1 className='font-medium text-xl md:text-4xl '>What Our Clients Say</h1>
            <hr className='md:border-[2px] border border-[#FDBA0E] mx-auto rounded-lg mt-2 mb-3 md:my-5 w-36 md:w-48'/>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1'>
                <div className='mt-10'>
                    <TCard/>
                </div>
                
                <div className='mt-10'>
                    <TCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials