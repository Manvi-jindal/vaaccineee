"use client"
import React from 'react';
import { Input, Radio, RadioGroup, Select, SelectItem, Checkbox, Button } from '@nextui-org/react';

const Upload = () => {
    const vaccinesData = [
        {
            id: 1,
            heading: "Varicella Vaccine"
        },
        {
            id: 2,
            heading: "Flu Vaccine"
        },
        {
            id: 3,
            heading: "Varicella Vaccine"
        },
        {
            id: 4,
            heading: "Recombivax HB"
        },
        {
            id: 5,
            heading: "Gardasil"
        },
        {
            id: 6,
            heading: "MMR Vaccine"
        },
        {
            id: 7,
            heading: "Boostrix"
        },
        {
            id: 8,
            heading: "Zostavax"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full mt-[3rem]">
            <div className="w-[30rem]">
                <Input
                    type="text"
                    label="Name"
                    placeholder="Enter Your Name"
                    className="my-2"
                />
                <Input
                    type="text"
                    label="Age"
                    placeholder="Enter Your Age"
                    className="my-2"
                />
                <Input
                    type="file"
                    placeholder="Upload Document"
                    className="my-2"
                />
                <RadioGroup
                    label="Are you a cancer patient"
                    orientation="horizontal"
                >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                </RadioGroup>
                <RadioGroup
                    label="Have you been vaccinated in the past 1 month?"
                    orientation="horizontal"
                >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                </RadioGroup>
                <Select
                    label="Vaccination Status"
                    className="my-2"
                    color="primary"
                >
                    {vaccinesData.map(vaccine => (
                        <SelectItem key={vaccine.id} value={vaccine.id.toString()}>
                            {vaccine.heading}
                        </SelectItem>
                    ))}
                </Select>
                <RadioGroup
                    label="Are you diabetic?"
                    orientation="horizontal"
                >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                </RadioGroup>
                <Checkbox defaultSelected>Check Out</Checkbox>
                <Button color="primary" className="w-full">Submit</Button>
            </div>
        </div>
    );
};

export default Upload;