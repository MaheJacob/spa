import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt="hro"
          src="/Images/spa hr.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Book an <span className='text-primary'>appointment </span> 
         with your favourite <span className='text-primary'>Spa Therapist</span></h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>
        
        <Button className="mt-10">Explore Now </Button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
