'use client'

import Link from 'next/link';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { SlMenu } from "react-icons/sl";


type Props = {}

export default function NavBar({}: Props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-burgundy min-w-full text-cream px-4 md:px-8 py-2 md:py-4 flex flex-col justify-center md:flex-row gap-y-4 md:items-center md:justify-between fixed w-full z-20 top-0 left-0'>
      <div className='flex justify-between items-center space-x-2'>
        {/*TODO: Add Logo */}
        <h2 className='font-offside text-2xl hidden md:block'>Ashley Morgan</h2>
      </div>
      <button className='block md:hidden ' onClick={() => setIsOpen(!isOpen)}>
        <span className="sr-only">Open main menu</span>
        <SlMenu />
      </button>
      <nav className={`w-full block md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}>
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