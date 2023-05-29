import React from 'react';

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='bg-cream text-burgundy px-4 py-2 mt-4 w-full absolute bottom-0 flex justify-evenly md:text-lg'>
      <span>© 2023 Ashley Morgan</span>
      <span>Deployed with Vercel</span>
    </footer>
  )
};