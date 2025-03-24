import React from 'react'
import Disclosure from '@/components/shared/Disclosure'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center my-4">About us</h1>
      <h4 className="w-4/5 md:w-3/5 text-center mx-auto">
      We are a nail shop which was established on 2024, with the aim to offer varied nail services to clients with different needs, the services include manicures( acrylic, gel and gelX) and pedicures( gel and acrylic pedis) with any desired nails designs of their choice, our mission is to leave our clients feeling seen, heard and healed from what troubles they may have encountered through beauty and relaxed conversations. 
      </h4>

      <div></div>
      <br />
      <br />

      <h3>Featured on City News Magazine for Sweet Water</h3>
      <div className="w-full ">
        <Image
          src="/assets/fashion_magazine.jpg"
          width={400}
          height={400}
          className="w-[400px] h-[400px] mx-auto object-cover p-2"
        />
      </div>

      {/* <div className="flex flex-row space-x-4 justify-center">
        <div>
          <img src={aboutus1} alt="aboutus" />
        </div>

        <div>
          <img src={aboutus2} alt="aboutus" />
        </div>
      </div> */}

      {/*  disclosure section */}
      <Disclosure />
    </div>
  )
}

export default AboutPage
