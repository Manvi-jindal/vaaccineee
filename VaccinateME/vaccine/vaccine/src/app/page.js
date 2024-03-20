"use client"
import HeroSection from '@/components/HeroSection'
import HeroSection2 from '@/components/HeroSection2'
import ImageSlider from '@/components/ImageSlider'
import React from 'react'

const page = () => {
  return (
    <>
      <ImageSlider />
      <div>
        <HeroSection />
      </div>
      <div></div>
      <div className='my-[10rem]'>

        <HeroSection2 />
      </div>

    </>
  )
}

export default page
