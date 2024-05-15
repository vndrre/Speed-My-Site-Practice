import React from 'react'

const Landing = () => {
  return (
    <div className='py-20 px-5 bg-[#F7F7F7]' id='home'>
        <div className='text-center mt-10 text-black md:mt-20'> 
            <h1 className='font-semibold text-2xl md:text-5xl'>Is Your Website Slow?</h1>
            <p className='text-xl md:text-2xl md:mt-5'>We will make your website 70% FASTER!</p>
        </div>

        <div className='flex justify-center md:mt-10'>
            <div className='bg-[#384752] text-white rounded-lg py-2 px-5 mt-5 md:w-[600px] w-full'>
                <div className='flex-col'>
                    <h1 className='text-center my-5 text-[17px] md:text-[19px]'>Request a free analysis</h1>

                    <div className='grid grid-cols-1 gap-3 md:gap-5'>
                        <input type="text" placeholder='Website URL' className='placeholder:text-[1A1A1A] text-[#1A1A1A] py-2 px-4 w-full rounded-md' />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                            <input type="text" placeholder='Name' className='placeholder:text-[1A1A1A] text-[#1A1A1A] py-2 px-4 w-full rounded-md' />
                            <input type="text" placeholder='Email' className='placeholder:text-[1A1A1A] text-[#1A1A1A] py-2 px-4 w-full rounded-md' />
                        </div>
                    </div>

                    <a href="/" className='flex justify-center mt-2 mb-3 md:mt-5'>
                        <button className='bg-[#FDBA0E] py-2 px-7 md:px-10 rounded-md'>Analyze</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing