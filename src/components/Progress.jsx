import React from 'react'

const Progress = () => {
  return (
    <div className='bg-[#E4E4E4] rounded-full w-full'>
        <div className='bg-[#0066FF] w-[75%] rounded-full flex justify-end items-center pr-2'>
            <h1 className='text-sm text-white'>75%</h1>
            
            <div className="text-[#FDBA0E]">
                <ion-icon name="flash"></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default Progress