import Link from 'next/link';
import React from 'react';

type Props = {}

export default function NavBar({}: Props) {
  return (
    <header className='font-alegreya bg-burgundy min-w-full text-cream px-4 md:px-8 py-2 md:py-4 flex items-center justify-between'>
      <h2 className='font-offside text-lg md:text-2xl'>Ashley Morgan</h2>
      <nav className='text-md md:text-lg'>
        <ul className='flex items-center gap-x-10'>
          <li>
            <Link href='' className='hover:bg-cream hover:text-burgundy py-2 px-4 rounded'>
              Home
            </Link>
          </li>
          <li>
            <Link href='' className='hover:bg-cream hover:text-burgundy py-2 px-4 rounded'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='' className='hover:bg-cream hover:text-burgundy py-2 px-4 rounded'>
              About Me/Skills
            </Link>
          </li>
          <li>
            <Link href='' className='hover:bg-cream hover:text-burgundy py-2 px-4 rounded'>
              Contact
            </Link>
          </li>
          <li>
            <Link href='https://ashleys-accessibility.hashnode.dev/' className='hover:bg-cream hover:text-burgundy py-2 px-4 rounded'>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};