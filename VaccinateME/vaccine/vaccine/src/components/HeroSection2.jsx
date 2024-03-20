"use client"
import React from 'react'
import { Select, SelectItem } from "@nextui-org/react"

const HeroSection2 = () => {
    const district = [
        "Distric1",
        "Distric2",
        "Distric3",
    ]
    const state = [
        "state1",
        "state2",
        "state3",
    ]
    return (
        <>
            <div className='text-center font-bold text-[1rem]'>
                <div>Search Your Nearest Vaccination Center</div>
                <div>Get a preview list of the nearest centers and check availability of vaccination slots</div>
            </div>

            <div className='flex justify-center items-center'>

                <img src="https://i.pinimg.com/564x/e0/b0/1e/e0b01e0f5e5797f98ad2f1e62dc9bcef.jpg" alt="" />
                <div className=' flex-col justify-center text-center w-[40rem]'>
                    <p className='font-bold text-[2rem]'>Select Your District And State</p>
                    <div className='my-3'>
                        <Select
                            label="Select an district"
                            className="w-[10rem] mx-5 "
                            color='primary'
                        >
                            {district.map((district) => (
                                <SelectItem key={district} value={district} >
                                    {district}
                                </SelectItem>
                            ))}
                        </Select>
                        <Select
                            label="Select an State"
                            className="w-[10rem] mx-5"
                            color='primary'
                        >
                            {state.map((state) => (
                                <SelectItem key={state} value={state}>
                                    {state}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection2