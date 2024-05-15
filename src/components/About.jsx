import React from 'react'
import Progress from './Progress'

const About = () => {
  return (
    <div className='px-5 py-20 md:px-10 text-[#1A1A1A] md:flex md:flex-row-reverse md:gap-20' id='about'>
        <div>
            <h1 className='text-2xl font-semibold'>About Us</h1>
            <hr className='md:border-[2px] border border-[#FDBA0E] rounded-lg w-[40%] md:w-[75%] mt-2 mb-3'/>
            <div className='text-[18px] w-[100%] md:w-[90%]'>
                <p>My passion for building websites started since 2013 and since then i have helped companies around the world build amazing websites and products that create real value for the business and users.
                <br/><br/>I enjoy solving problems with clean scalable solutions and I also have a genuine passion for inspiring design.
                <br/><br/>I am a fullstack developer focusing on core frontend and backend technologies which include HTML, CSS, Javascript, React and other core languages</p>
            </div>
        </div>

        <div className='md:w-[105%]'>
            <div className='mt-7 grid grid-cols-1 gap-2 grid-'>
                <h1 className='text-[16px] font-medium'>Optimising Javascript loading time</h1>
                <Progress/>
            </div>

            <div className='mt-3 grid grid-cols-1 gap-2'>
                <h1 className='text-[16px] font-medium'>Speeding up Queries</h1>
                <Progress/>
            </div>

            <div className='mt-3 grid grid-cols-1 gap-2'>
                <h1 className='text-[16px] font-medium'>Optimizing Image Loading</h1>
                <Progress/>
            </div>

            <div className='mt-3 grid grid-cols-1 gap-2'>
                <h1 className='text-[16px] font-medium'>Optimizing CSS</h1>
                <Progress/>
            </div>
        </div>
    </div>
  )
}

export default About