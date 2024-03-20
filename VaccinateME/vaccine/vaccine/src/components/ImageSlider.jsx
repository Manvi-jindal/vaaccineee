"use client"
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [
    "https://images.unsplash.com/photo-1615631648086-325025c9e51e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://plus.unsplash.com/premium_photo-1661775348639-448713c5b4bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://plus.unsplash.com/premium_photo-1661597017354-435c6d0eee32?w=2071&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFkdWx0JTIwdmFjY2luYXRpb258ZW58MHx8MHx8fDA%3D"
  ];
  
  const handleTap = (event) => {
    const containerWidth = event.currentTarget.offsetWidth;
    const tapX = event.nativeEvent.offsetX;
    console.log(currentIndex)
    if (tapX < containerWidth / 2 && currentIndex >= 1) {
      setCurrentIndex((prevIndex) => (prevIndex === 1 ? images.length : prevIndex - 1));
    } else if (tapX >= containerWidth / 2 && currentIndex <= images.length) {
      setCurrentIndex((prevIndex) => (prevIndex === images.length ? 1 : prevIndex + 1));
    }
  };

  return (

    <div className="relative mx-auto max-w-screen overflow-hidden rounded-md p-2 sm:p-4"
      onClick={handleTap}
    >

      <div className="relative h-[30rem] w-auto">
        {images.map((image, index) => (
          <div key={index} style={{ display: currentIndex === index + 1 ? 'block' : 'none' }} className="absolute top-0">
            <img src={image} alt="image" className=" h-[28rem] w-screen rounded-[1rem]" />
          </div>
        ))}
        <div className="relative grid place-items-center top-[18rem]">
          <div className='text-center'>

            <h2>Welcome To VaccinateMe</h2>
            <p>Tagline</p>
          </div>
          <div className='flex'>
            <Button radius="sm" className='m-2'>
              <Link href="available-vaccine" className="btn btn-outline-primary">Find Vaccine</Link>
            </Button>
            <Button radius='sm' className='m-2'>
              <Link href="https://selfregistration.cowin.gov.in/" className="btn btn-outline-primary">Book Slot</Link>
            </Button>
            <Button radius='sm' className='m-2'>Upload Documents</Button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default ImageSlider;