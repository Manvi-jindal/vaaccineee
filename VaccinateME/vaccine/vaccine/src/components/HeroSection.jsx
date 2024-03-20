"use client"
import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import Signup from "./Signup"

const HeroSection = () => {
    return (
        <>
            <div className='flex justify-evenly '>
                <div>

                    <Card className="w-[30rem] h-[23rem]"

                    >

                        <CardBody>
                            <p className='font-bold text-[2rem]'>Empowering Adults Through Vaccination Awareness</p>

                            <p className='my-4'>VaccinateMe</p>
                            <p>At VaccinateMe, we are dedicated to providing adults with the necessary information about vaccines to make informed decisions and protect their health.</p>
                        </CardBody>

                        <div className='flex items-center w-full justify-evenly border-slate-100 border-1 shadow-md  p-2'>
                            <p>Learn more --</p>
                            {<Signup />}
                        </div>


                    </Card>

                </div>
                <img
                    alt="Woman listing to music"
                    className="object-cover h-[20rem] w-[30rem] rounded-xl"
                    src="https://i.pinimg.com/564x/91/c4/98/91c498c8a4fc3e843daa96ded34f9a67.jpg"
                />


            </div>
        </>
    )
}

export default HeroSection