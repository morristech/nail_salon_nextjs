import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="mx-auto w-full md:w-4/5 p-2">
      <div className="mx-auto text-center my-4">
        <h1>Contact and Location</h1>
        <h4>
          Clean and hip locale, with a variety of services. Everything but hair.
        </h4>
      </div>

      <div className="w-full rounded-sm  mx-auto">
        <Image
          src="/assets/location1.jpg"
          alt="gmap"
          width={500}
          height={300}
          className=" mx-auto rounded-sm h-[150px] sm:h-[300px] object-cover "
        />
      </div>

      <div className="w-full mx-auto mt-4  flex flex-row justify-between items-center ">
        <div>
          <h2>Address: </h2>
          <h4>
            {' '}
            1234 Beauty Drive <br /> Sweet Water, NY 12345
          </h4>
          <h2>Phone Number:</h2>
          <h4>(954) 000-1234</h4>
        </div>

        <div>
          <h2>Business Hours:</h2>
          <h3>Monday - Saturday</h3>
          <h4> 9:00am - 7:00pm</h4>
          <h3>Sunday</h3>
          <h4>10:00am - 5:00pm</h4>
        </div>
      </div>

      <div className="my-4">
        <h2>What is around the area?</h2>
        <p>
          {' '}
          Fashion Nail is located in Sweet Water on the SW corner of Beauty
          Drive in the Beauty plaza, between a Walmart and a Burlington. The
          Beauty Plaza also has a sushi bar and hair salon. Beauty Plaza is
          across from the AMC 44 Theater.
        </p>
      </div>
    </div>
  )
}

export default ContactPage
