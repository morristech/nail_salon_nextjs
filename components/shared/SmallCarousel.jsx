'use client'

import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'

import {
  mani1,
  mani2,
  mani3,
  pedi1,
  pedi2,
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
          <Image src={mani3} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pedi1} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pedi2} alt="hero" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SmallCarousel
