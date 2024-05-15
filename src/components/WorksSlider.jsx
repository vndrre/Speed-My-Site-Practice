import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from 'swiper/modules'

import { ServiceData } from '../constants'

const WorksSlider = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-white'>
        <Swiper 
        
            breakpoints={{
                340: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}

            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className='max-w-[90%] lg:max-w-[80%]'
        >
            {ServiceData.map((item)=> (
                <SwiperSlide key={item.title}>
                    <div className='flex flex-col gap-6 group relative shadow-lg text-black rounded-xl py-6 px-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                        <div 
                        className='aboslute inset-0 bg-cover bg-center' 
                        style={{backgroundImage: 'url(${item.backgroundImage})'}}/>

                        <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 duration-200'/>

                        <div className='relative flex flex-col gap-3'>
                            <item.icon className='text-gray-600 group-hover:text-black h-[32px] w-[32px]'/>
                            <h1 className='text-xl lg:text-2xl'> {item.title} </h1>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default WorksSlider