'use client'

import Link from 'next/link';
import { useState } from 'react';
import { SlMenu } from "react-icons/sl";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-burgundy min-w-full text-cream px-4 md:px-8 py-2 md:py-4 flex flex-col justify-center md:flex-row gap-y-4 md:items-center md:justify-between fixed w-full z-20 top-0 left-0'>

      <h2 className='font-offside text-2xl hidden md:block'>Ashley Morgan</h2>
      
      <button className='block md:hidden justify-self-center max-w-fit' onClick={() => setIsOpen(!isOpen)}>
        <span className="sr-only">Open main menu</span>
        <SlMenu />
      </button>
      <nav className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}>
        <ul className='text-md md:text-lg md:flex md:flex-row md:gap-x-10 gap-y-5 md:items-center'>
          <li>
            <Link href='#intro' className='navLink'>
              Home
            </Link>
          </li>
          <li>
            <Link href='#projects' className='navLink'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='#about' className='navLink'>
              About Me/Skills
            </Link>
          </li>
          <li>
            <Link href='#contact' className='navLink'>
              Contact
            </Link>
          </li>
          <li>
            <Link href='https://ashleys-accessibility.hashnode.dev/' className='navLink'>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};