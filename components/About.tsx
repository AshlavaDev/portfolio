import React from 'react';

type Props = {}

export default function About({}: Props) {
  return (
    <section id='about' className='min-h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='pt-20 px-6 flex flex-col items-center max-w-prose text-burgundy gap-y-6'>
        <h2 className='font-offside text-4xl md:text-6xl'>About Me</h2>
        <p className='text-lg md:text-2xl'>My name is Ashley, and I am a web developer who likes fullstack as well as more frontend-focused accessibility. I have a degree in history but also am finishing my certificate in web development.</p>
        <p className='text-lg md:text-2xl'>I am originally from England and spent a couple of years in Ghana in west Africa before I hit double digits. Eventually my parents, with me in tow, moved to Canada where I settled down, graduating high school and eventually university.</p>
        <p className='text-lg md:text-2xl'>I am nonbinary, using they/them pronouns, am queer and autistic. This might be part of why I focus so much on accessibility, but my ADHD also means I like learning about almost anything, which is why I also like fullstack work.</p>
      </div>
      <div className='pt-20 px-6 flex flex-col items-center max-w-prose'>
        <h2 className='font-offside text-4xl md:text-6xl pb-2'>Skills</h2>
      </div>
    </section>
  )
};