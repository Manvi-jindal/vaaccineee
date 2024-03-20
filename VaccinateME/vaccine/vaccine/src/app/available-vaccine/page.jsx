"use client"
import React from 'react';
import { Card, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

const vaccinesData = [
  {
    id: 1,
    heading: "Varicella Vaccine",
    description: "Varicella vaccines, commonly known as chickenpox vaccines, offer protection against the varicella-zoster virus, significantly reducing the risk and severity of chickenpox infections."
  },
  {
    id: 1,
    heading: "Flu Vaccine",
    description: "There are three flu vaccines that are preferentially recommended for people 65 years and older. These are Fluzone High-Dose Quadrivalent vaccine, Flublok Quadrivalent recombinant flu vaccine and Fluad Quadrivalent adjuvanted flu vaccine."
  },
  {
    id: 1,
    heading: "Varicella Vaccine",
    description: "Varicella vaccines, commonly known as chickenpox vaccines, offer protection against the varicella-zoster virus, significantly reducing the risk and severity of chickenpox infections."
  },
  {
    id: 1,
    heading: "Recombivax HB",
    description: "Recombivax HB prevents hepatitis B, a liver infection caused by the hepatitis B virus. It stimulates the body's immune system to produce antibodies against the virus, providing immunity against the disease."
  },
  {
    id: 1,
    heading: "Gardasil",
    description: "The HPV vaccine is commonly known by the brand names Gardasil and Cervarix. These vaccines help protect against certain types of human papillomavirus (HPV) infections, which can lead to various cancers, including cervical cancer, anal cancer, and oropharyngeal cancer."
  },
  {
    id: 1,
    heading: "MMR Vaccine",
    description: "The MMR vaccine is a combination vaccine that protects against three infectious diseases: measles, mumps, and rubella. It is commonly known by the abbreviation MMR, which stands for Measles, Mumps, and Rubella. Some brand names for the MMR vaccine include M-M-R II and Priorix"
  },
  {
    id: 1,
    heading: "Boostrix",
    description: "The Tdap vaccine is a combination vaccine that protects against three bacterial diseases: tetanus, diphtheria, and pertussis (whooping cough). The name 'Tdap' stands for Tetanus, Diphtheria, and Pertussis. Some brand names for the Tdap vaccine include Boostrix and Adacel."
  },
  {
    id: 1,
    heading: "Zostavax",
    description: "It's a vaccine used to prevent shingles, a painful skin rash caused by the varicella-zoster virus, which is also responsible for chickenpox. It is recommended by health authorities for adults over 50 years old."
  },

  // Add more vaccine data as needed
];

const AvailableVaccine = () => {
  return (
    <>
      <div className='w-[78rem] mt-[5rem] m-auto'>

        <div className='font-bold text-[2rem]'>
          Available vaccines
        </div>
        <div className=' grid grid-cols-4 gap-2 mt-[5rem]'>

          {vaccinesData.map((vaccine) => (
            <Card key={vaccine.id} className="max-w-[18rem] h-[24rem]">
              <Divider />
              <CardBody>
                <p className='text-[1.5rem] font-bold mb-3'>{vaccine.heading}</p>
                <p>{vaccine.description}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <div className='flex w-full items-center justify-center'>
                  <Button color='primary'>Book Slot</Button>

                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailableVaccine;