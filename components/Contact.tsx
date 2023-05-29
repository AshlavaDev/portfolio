import React from 'react';
import Footer from './Footer';

type Props = {}

export default function Contact({}: Props) {
  return (
    <section id='contact' className='min-h-screen bg-burgundy text-cream relative'>
      <h2 className='font-offside text-4xl md:text-8xl pt-24 px-6'>Contact Me</h2>
      <Footer />
    </section>
  )
};