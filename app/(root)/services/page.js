import React from 'react'

import Table1 from '@/components/shared/tables/Table1'
import Table2 from '@/components/shared/tables/Table2'
import Table3 from '@/components/shared/tables/Table3'
import Table4 from '@/components/shared/tables/Table4'
import Table5 from '@/components/shared/tables/Table5'
import Table6 from '@/components/shared/tables/Table6'
import Table7 from '@/components/shared/tables/Table7'

const ServicesPage = () => {
  return (
    <div className="p-2">
      {/* services title */}
      <div className="title-div my-6">
        <h1 className="text-center">Services and Prices</h1>
        <h4 className="text-center mt-2 ">
          All of the products we use are guaranteed brand name and high quality.
        </h4>
        <h4 className="text-center text-red-800 text-sm">
          Prices do not include gratuity/tips.
        </h4>
      </div>

      {/* service type descriptions */}
      <div className="flex flex-col md:flex-row md:space-x-4 md:justify-around p-2">
        <div className="flex flex-col space-y-8">
          <div className="max-w-[600px]">
            <h3>Regular Manicure: $20</h3>
            <p>
              Manicure includes nail trimming, shaping, buffing, cuticle
              grooming & conditioning. Lotion massage & color polish of your
              choice.
            </p>
            <h4>Min. Duration: 20 mins</h4>
          </div>

          <div className="max-w-[600px]">
            <h3>Signature Manicure: $26</h3>
            <p>
              Regular manicure with added hand & arm massage, natural sugar
              crystal scrub to exfoliate all dry skin. Followed by finishing
              lotion, and color polish of your choice.
            </p>
            <h4>Min. Duration: 25 mins</h4>
          </div>

          <div className="max-w-[600px]">
            <h3>Gel Manicure: $35</h3>
            <p>
              Regular manicure with the benefit of gel polish. Does not chip,
              lasts up to two weeks, and no need for drying time! Provides a
              strong natural nail protection with a glossy finish.
            </p>
            <h4>Min. Duration: 30 mins</h4>
          </div>
          <div className="max-w-[600px]">
            <h3>Royal Manicure: $35</h3>
            <p>
              All the benefits of a manicure, plus an exfoliating hand massage
              to remove dry and dead skin This reveals new & smooth skin.
              Followed by a paraffin wax treatment, hot towels, and with a glass
              of wine.
            </p>
            <h4>Min. Duration: 30 mins</h4>
          </div>
        </div>

        <div className="flex flex-col space-y-8 mt-8 md:mt-0 ">
          <div className="max-w-[600px]">
            <h3>Regular Pedicure: $30</h3>
            <p>
              Pedicure includes nail trimming, shaping, buffing, cuticle
              grooming & conditioning. Lotion massage & color polish of your
              choice.
            </p>
            <h4>Min. Duration: 25 mins</h4>
          </div>

          <div className="max-w-[600px]">
            <h3>Signature Pedicure: $37</h3>
            <p>
              This selection has a sugar crystal scrub to exfoliate and smooth
              down your skin, as well as a cooling gel to alleviate muscle pain.
            </p>
            <h4>Min. Duration: 30 mins</h4>
          </div>

          <div className="max-w-[600px]">
            <h3>Fashion Deluxe Pedicure: $47</h3>
            <p>
              An upgraded version of the Signature Pedicure to soften your skin
              and ease you into relaxation. This set includes a longer leg
              massage, a hot towel wrap, natural sugar crystal scrub,
              moisturizing masque, and a bath salt soak all in your preferred
              fragrance of either Cucumber, Grapefruit, Lavender, Ocean, or
              Tangerine.
            </p>
            <h4>Min. Duration: 45 mins</h4>
          </div>

          <div className="max-w-[600px]">
            <h3>Royal Deluxe Pedicure: $57</h3>
            <p>
              Rejuvenate your skin with our most hydrating selection, leaving
              your skin supple and silky soft. You receive everything that our
              Winn Deluxe Pedicure has to offer in your preferred fragrance of
              either Cucumber, Grapefruit, Lavender, Ocean, or Tangerine with an
              additional paraffin wax treatment.
            </p>
            <h4>Min. Duration: 45 mins</h4>
          </div>

          <div className="max-w-[600px]">
            <h3>Royal Hot Stone Pedicure: $67</h3>
            <p>
              The ultimate experience of relaxation, the hot stone massage helps
              to increase circulation and loosen tension in your muscles.
              Includes everything that will come with our Royal Deluxe pedicure
              in your preferred fragrance of either Cucumber, Grapefruit,
              Lavender, Ocean, or Tangerine.
            </p>
            <h4>Min. Duration: 50 mins</h4>
          </div>
        </div>
      </div>

      {/* tables */}
      <div className="my-4 ">
        <div className="mt-4 w-full">
          <h2 className="text-center">Natural Nail Treatments</h2>
          <Table1 />
        </div>

        <div className="mt-4 w-full">
          <h2 className="text-center">Enhancements</h2>
          <Table2 />
        </div>

        <div className="mt-4 w-full">
          <h2 className="text-center">Kids Menu (10 and Under)</h2>
          <Table3 />
        </div>

        <div className="mt-4 w-full">
          <h2 className="text-center">Additional Services For Nails</h2>
          <Table4 />
        </div>

        <div className="mt-4 w-full">
          <h2 className="text-center">Waxing</h2>
          <Table5 />
        </div>

        <div className="mt-4 w-full">
          <h2 className="text-center">Tints & Eyelash Extensions</h2>
          <Table6 />
        </div>

        <div className="mt-4 w-full">
          <h2 className="text-center">Facials</h2>
          <Table7 />
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
