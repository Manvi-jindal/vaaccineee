"use client"
import React from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

const inputConfigs = [
    {
        type: "email",
        label: "Email",
        defaultValue: "jhondoe@gmail.com"
    },
    {
        type: "date",
        label: "Date of Vaccine",
        defaultValue: "1990-01-01"
    },
    {
        type: "text",
        label: "Certificate Number",
        defaultValue: "123456789"
    },
    {
        type: "text",
        label: "Name of Hospital",
        defaultValue: "AIIMS"
    },
    {
        type: "text",
        label: "City",
        defaultValue: "Delhi"
    }
];

export default function Certificate() {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-[3rem]">
            <p className="font-bold text-[1.5rem] mb-4">Vaccination Certificate</p>
            <div className="w-[30rem]">
                {inputConfigs.map((config, index) => (
                    <Input
                        key={index} // Use 'index' as the key, not 'config.index'
                        type={config.type}
                        label={config.label}
                        placeholder={config.defaultValue}
                        className="my-2"
                    />
                ))}
                <Select
                    label="Status"
                    className=" my-1 "
                    color='primary'
                >
                    <SelectItem  >
                        Fully Vaccinated
                    </SelectItem>
                    <SelectItem  >
                     Partially Vaccinated
                    </SelectItem>
                    <SelectItem  >
                        Not vaccinated
                    </SelectItem>
                </Select>

                <Button color="primary" className="w-full">Submit</Button>
            </div>
            
        </div>
    );
}