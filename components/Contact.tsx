import React from 'react';
import ContactForm from './ContactForm';
import { SiLinkedin } from 'react-icons/si';
import Link from 'next/link';

type Props = {}

export default function Contact({}: Props) {
  return (
    <section id='contact' className='min-h-screen w-screen bg-burgundy text-cream relative flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-20 mb-4'>
        <div className='pt-24 px-6 text-xl md:text-2xl flex flex-col items-center md:items-end gap-y-6'>
          <h2 className='font-offside text-4xl md:text-8xl'>Contact Me</h2>
          <p className='text-center'>Connect Via Email: ashleymorgan.wbdv@gmail.com</p>
          <span className='flex items-center gap-x-2 justify-self-center'>
            <p>Connect Via LinkedIn:</p>
            <Link href='https://www.linkedin.com/in/ashley-morgan-wbdv/' legacyBehavior>
              <a target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center'>
                <span className='hover:bg-cream hover:text-burgundy px-1 hover:rounded-sm hidden md:block'>https://www.linkedin.com/in/ashley-morgan-wbdv/</span>
                <span className='p-1 rounded hover:bg-cream hover:text-burgundy'>
                  <SiLinkedin />
                </span>
              </a>
            </Link>
          </span>
        </div>
        <div className='container flex flex-col items-center md:items-start md:pt-36 px-6 pt-10 pb-10 min-w-full'>
          <p className='text-2xl md:text-4xl'>Or contact me through this form</p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
};