import React from 'react'
import Disclosure from '@/components/shared/Disclosure'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center my-4">About us</h1>
      <h4 className="w-4/5 md:w-3/5 text-center mx-auto">
        Ready to feel relaxed, rejuvenated and refreshed; spend the day with
        Winn Nail Spa, the therapeutic center that can address all your beauty
        and pampering needs.
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
