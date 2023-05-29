import React from 'react';

type Props = {
  skill: string
}

export default function Skill({skill}: Props) {
  return (
    <span className='md:text-lg hover:text-lg md:hover:text-xl px-2 py-1 bg-burgundy text-cream rounded'>{skill}</span>
  )
};