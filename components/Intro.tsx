import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

type Props = {};

export default function Intro({}: Props) {
  return (
    <section id='intro' className='flex flex-col justify-center items-center min-h-screen'>
      <div className="h-64 w-64 relative bg-burgundy rounded-full">
        <Image
          src='/images/profile1.png'
          alt='A picture of a non-binary person, Ashley Morgan, smiling'
          fill
          objectFit='cover'
          className='rounded-full'
        />
      </div>
      <h1 className='font-offside md:text-6xl text-4xl py-4 md:py-6'>Ashley Morgan</h1>
      <div className='flex flex-col md:flex-row gap-y-5 items-center justify-between gap-x-6 text-2xl md:text-4xl text-burgundy'>
        <div className='flex flex-col items-center gap-y-4'>
          <h3 className='text-4xl md:text-6xl'>Web Developer</h3>
          <div className='flex gap-x-4'>
            <Link href='https://github.com/AshlavaDev' legacyBehavior>
              <a target='_blank' rel="noopener noreferrer">
                <SiGithub />
              </a>
            </Link>
            <Link href='https://www.linkedin.com/in/ashley-morgan-wbdv/' legacyBehavior>
              <a target='_blank' rel="noopener noreferrer">
                <SiLinkedin />
              </a>
            </Link>
          </div>
        </div>
        <div className='flex flex-col justify-start'>
          <h4>Fullstack</h4>
          <h4>Frontend Accessibility</h4>
        </div>
      </div>
    </section>
  )
};