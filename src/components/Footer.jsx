import React from 'react'

import logo from '../assets/Group 128.png'

import facebook from '../assets/social-media/facebook.svg'
import twitter from '../assets/social-media/twitter.svg'
import github from '../assets/social-media/github.svg'

import cc from '../assets/ic_copyright_48px 1.png'

const Footer = () => {
  return (
    <div className='bg-[#384752] pt-5 px-5'>
        <div className='flex-col md:hidden'>
            <div className='flex justify-center'>
                <img src={logo} alt="" />
            </div>

            <div className='flex gap-3 justify-center mt-3'>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={github} alt="" />
            </div>

            <div className='flex items-center justify-center gap-1 text-white py-2 mt-2'>
                <img src={cc} alt="" />
                <p className='font-light text-sm'>Copyright 2021. All right reserved</p>
            </div>
        </div>

        <div className='hidden md:flex md:justify-between py-7 px-10'>
            <img src={logo} alt=""/>

            <div className='flex items-center gap-1 text-white'>
                <img src={cc} alt="" />
                <p className='font-light text-sm'>Copyright 2021. All right reserved</p>
            </div>

            <div className='text-white flex gap-2'>
                <p>Conncet with me:</p>

                <div className='flex gap-3'>
                    <a href="/">
                        <img src={facebook} alt="" />
                    </a>

                    <a href="/">
                        <img src={twitter} alt="" />
                    </a>

                    <a href="/">
                        <img src={github} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer