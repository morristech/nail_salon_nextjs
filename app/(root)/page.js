import SmallCarousel from '@/components/shared/SmallCarousel'
import HeroSwiper from '@/components/shared/HeroSwiper'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full flex-1 mx-auto flex flex-col items-center ">
      <HeroSwiper />

      <div className="my-4 w-[90%] sm:w-[80%]  mx-auto">
        <h2 className="text-red-800 my-4 text-2xl font-bold">
          Make Every Visit Unforgettable
        </h2>
        <p>
          BeauMont provides a fresh environment to have a relaxing
          experience and look your best. Everything except hair and makeup, our
          professional staff will help reinvent you.
        </p>
      </div>

      {/* small carousels */}
      <div className="small-carousels-container">
        <div className="small-carousel">
          <div className="mx-auto">
            <SmallCarousel />
          </div>
          <div className="">
            <h2 className="link-title">
              Manicures, Pedicures, and Nail Enhancements
            </h2>
            <p>
              With over 1,000 colors to choose from, our experienced technicians
              will make your nails look like a work of art. Various options of
              natural nail treatments or nail enhancments.
            </p>
            <div className="service-link">
              <Link href="/services">List of Services &#62;</Link>
            </div>
          </div>
        </div>

        <div className="small-carousel">
          <div className="my-auto mx-auto">
            <SmallCarousel />
          </div>
          <div className="my-auto">
            <h2 className="link-title">Facials and Eyelash Extensions</h2>
            <p>
              Prepare for a night out with a flirtatious set of lashes. Or give
              yourself the healthy glow that you always desired with facials
              using Nu Skin products.
            </p>
            <div className="service-link">
              <Link href="/services">List of Services &#62;</Link>
            </div>
          </div>
        </div>

        <div className="small-carousel">
          <div className="my-auto mx-auto">
            <SmallCarousel />
          </div>
          <div className="my-auto">
            <h2 className="link-title">Waxing</h2>
            <p>
              Reveal a new layer of yourself with Beauty Image wax, provided
              with our warm care. This wax has a smooth application and works
              well with most sensitive skin types.
            </p>
            <div className=" service-link">
              <Link href="/services">List of Services &#62;</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
