'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const HeroSwiper = () => {
  return (
    <div className="hero-swiper">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/assets/nail/nail_art_1.jpg"
              width={1200}
              height={800}
              alt="beauty_spa"
              className="w-full h-[300px] md:h-[500px]  object-cover rounded-sm"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/assets/nail/nail_art_2.jpg"
              width={1200}
              height={800}
              alt="beauty_spa"
              className="w-full  h-[300px] md:h-[500px] rounded-sm   object-cover"
            />
          </CarouselItem>

          <CarouselItem>
            <Image
              src="/assets/nail/nail_art_3.jpg"
              width={1200}
              height={800}
              alt="beauty_spa"
              className="w-full  h-[300px] md:h-[500px] rounded-sm   object-cover"
            />
          </CarouselItem>
          {/* <CarouselItem>
            <Image
              src="/assets/nail/nail_art1.jpg"
              width={400}
              height={200}
              alt="beauty_spa"
              className="w-full  h-[300px] md:h-[400px]   object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/assets/nail/spa_1.jpg"
              width={400}
              height={200}
              alt="beauty_spa"
              className="w-full  h-[300px] md:h-[400px]   object-cover"
            />
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroSwiper
