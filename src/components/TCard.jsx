import React from 'react'

import pfp from '../assets/profile picture.png'

const TCard = () => {
  return (
    <div className='bg-white text-black p-4 md:w-[500px] md:flex md:mx-auto'>
        <div>
            <div className='flex items-center gap-2'>
                <img src={pfp} alt="" className='w-[35px] h-[35px]' />
                <div className='text-left'>
                    <h1 className='font-medium text-[#1A1A1A]'>Charles Dim</h1>
                    <p className='text-[#808080]'>Lead Designer, Netflix</p>
                </div>
            </div>

            <div className='mt-3'>
                <p className='text-left text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam praesentium dolorum fugiat ea doloremque doloribus saepe architecto perferendis tenetur, ullam minus optio eius repellat. Vel facere quod quae mollitia eius.</p>
            </div>
        </div>
    </div>
  )
}

export default TCard