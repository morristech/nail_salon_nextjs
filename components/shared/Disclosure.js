'use client'

import React from 'react'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react'
import { Separator } from '../ui/separator'

const DisclosureSection = () => {
  return (
    <div className="w-full mx-auto text-left my-16">
      <Disclosure defaultOpen={true} className="disclosure-component" as="div">
        <DisclosureButton className="py-2 w-full">
          <h2 className="disclosure-btn">What services do you offer?</h2>
        </DisclosureButton>
        <Separator className="bg-gray-400 mb-2 w-4/5 mx-auto" />
        <Transition
          enter="transition duration-600 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-600 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <DisclosurePanel>
            <p>
              We provide manicures, pedicures, a variety of nail enhancements,
              facials, waxing, eyelash extensions, and other specialties. For
              more, please check our services page.
            </p>
          </DisclosurePanel>
        </Transition>
      </Disclosure>
      <Disclosure defaultOpen={true} className="disclosure-component" as="div">
        <DisclosureButton className="py-2 w-full">
          <h2 className="disclosure-btn">Do you accept walk-ins?</h2>
        </DisclosureButton>
        <Separator className="bg-gray-400 mb-2 w-4/5 mx-auto" />
        <Transition
          enter="transition duration-600 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-600 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <DisclosurePanel>
            <p>
              Yes, walk-ins are welcome. You can also make appointments on the
              phone, in person, or online. When you booked an appointment,
              please call in advance if you cannot make it, so we are able to
              fit in another customer as all technicians are paid in commission.
            </p>
          </DisclosurePanel>
        </Transition>
      </Disclosure>
      <Disclosure defaultOpen={true} className="disclosure-component" as="div">
        <DisclosureButton className="py-2 w-full">
          <h2 className="disclosure-btn">Is this the only Fashion Spa?</h2>
        </DisclosureButton>
        <Separator className="bg-gray-400 mb-2 w-4/5 mx-auto" />
        <Transition
          enter="transition duration-600 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-600 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <DisclosurePanel>
            <p>
              This is the first, and currently, only available Fashion Spa
              location. But the business hopes to expand and have other centers
              available in the future. To find our location, please check the
              contact page.
            </p>
          </DisclosurePanel>
        </Transition>
      </Disclosure>
      <Disclosure defaultOpen={true} className="disclosure-component" as="div">
        <DisclosureButton className="py-2 w-full">
          <h2 className="disclosure-btn">What brands do you use?</h2>
        </DisclosureButton>
        <Separator className="bg-gray-400 mb-2 w-4/5 mx-auto" />
        <Transition
          enter="transition duration-600 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-600 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <DisclosurePanel>
            <p>
              For our nail services, we use top brands like OPI, Essie, Gelish,
              CND, LND, ANC, and DND in over 1,000 colors to choose from.
              <br /> <br />
              For our facials, we use Nu Skin and Beauty Image for our waxings.
              Beauty Image wax has a smoother application than other wax brands
              and works for most sensitive skin types.
            </p>
          </DisclosurePanel>
        </Transition>
      </Disclosure>
    </div>
  )
}

export default DisclosureSection
