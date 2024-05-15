import React from 'react'

import recent from '../assets/recentwork.svg'

const Works = () => {
  return (
    <div className='py-10 px-10' id='works'>
        <div className='text-center'>
            <h1 className='font-medium text-xl md:text-4xl '>Recent Works</h1>
            <hr className='md:border-[2px] border border-[#FDBA0E] mx-auto rounded-lg mt-2 mb-3 md:my-5 w-36 md:w-48'/>
        </div>

        <div>
            <div className='hidden md:grid lg:flex md:gap-20 md:justify-center mt-16'>
              <img src={recent} alt="" />
              <img src={recent} alt="" />
            </div>

            <div className='flex justify-center'>
              <div className='md:hidden grid grid-cols-1 gap-10 mt-10'>
                <img src={recent} alt="" />
                <img src={recent} alt="" />
                <img src={recent} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Works