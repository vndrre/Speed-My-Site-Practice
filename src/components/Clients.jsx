import React from 'react'

import google from '../assets/clients/mobile-view/google-logo-9831 2.png'
import bolt from '../assets/clients/mobile-view/Bolt_logo 2.png'
import amazon from '../assets/clients/mobile-view/Daco_10288 2.png'
import paypal from '../assets/clients/mobile-view/Logo-PayPal-transparent-PNG 2.png'
import netflix from '../assets/clients/mobile-view/pngwing 2.png'

import clients from '../assets/clients/Group 132.png'

const Clients = () => {
  return (
    <div className='bg-[#F7F7F7] px-5 py-10'>
        <div className='text-center'>
            <h1 className='text-xl md:text-3xl md:pb-5 font-medium'>Over 50+ Optimized Websites</h1>
            <hr className='md:border-[2px] border border-[#FDBA0E] rounded-lg mt-2 mb-3 w-48 mx-auto'/>
        </div>

        <div className='flex justify-center mt-5 md:hidden'>
            <div className='flex-col'>
                <div className='flex gap-7  '>
                    <img src={google} alt="" />
                    <img src={bolt} alt="" />
                    <img src={amazon} alt="" />
                </div>

                <div className='flex justify-center mt-3 gap-7'>
                    <img src={paypal} alt="" />
                    <img src={netflix} alt="" />
                </div>
            </div>
        </div>

        <div className='md:flex md:justify-center hidden md:mt-14'>
            <img src={clients} alt='' className='' />
        </div>
    </div>
  )
}

export default Clients