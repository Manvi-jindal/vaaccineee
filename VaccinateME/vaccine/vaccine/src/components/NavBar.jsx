"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';



export default function NavBar() {
  const menuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Upload',
      href: '/upload',
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      name: 'Certificate',
      href: '/certificate',
    },
    {
      name: "FAQ's",
      href: '/faq',
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // <>

    // hello
    // </>
    <div className="w-full z-10 backdrop-blur-md  sticky top-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img src="https://i.pinimg.com/564x/1d/ca/f2/1dcaf20d1cd105b8fcf69c3e802ff144.jpg" width="40" height="40" className="d-inline-block align-top" alt="" loading="lazy"/>
          </span>
          <span className="font-bold text-blue-500">VaccinateMe</span>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search"
          />
        </div>
        <Login />
        <Signup />
      </div>
    </div>
  );
}
