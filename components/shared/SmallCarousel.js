'use client'

import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'

import {
  mani1,
  mani2,
  mani4,
  pedi5,
  pedi7,
} from '../../public/assets/carousel1'

const SmallCarousel = () => {
  return (
    <div className="w-[300px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image src={mani1} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={mani2} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={mani4} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pedi5} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pedi7} alt="hero" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SmallCarousel
