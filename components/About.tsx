import React from 'react';

type Props = {}

export default function About({}: Props) {
  return (
    <section id='about' className='min-h-screen flex flex-col md:flex-row justify-evenly'>
      <div>
        <h2 className='font-offside text-burgundy text-4xl md:text-6xl'>About Me</h2>
      </div>
      <div>
        <h2 className='font-offside text-4xl md:text-6xl'>Skills</h2>
      </div>
    </section>
  )
};