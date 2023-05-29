import React from 'react';
import Skill from './Skill';

type Props = {}

const frontendSkills: string[] = ['HTML', 'CSS', 'TailwindCSS', 'Javascript', 'React', 'NextJS', 'Vue', 'Nuxt', 'Bootstrap'];
const backendSkills: string[] = ['Node', 'Express', 'SQL', 'Postgres', 'MongoDB', 'Firebase', 'Superbase'];
const otherSkills: string[] = ['Git', 'GitHub', 'Figma', 'UX/UI', 'Writing', 'Communication', 'Research'];

export default function About({}: Props) {
  return (
    <section id='about' className='min-h-screen flex flex-col md:flex-row justify-evenly'>
      <div className='pt-20 px-6 flex flex-col items-center max-w-prose text-burgundy gap-y-6'>
        <h2 className='font-offside text-4xl md:text-6xl'>About Me</h2>
        <p className='text-lg md:text-2xl'>My name is Ashley, and I am a web developer who likes fullstack as well as more frontend-focused accessibility. I have a degree in history but also am finishing my certificate in web development.</p>
        <p className='text-lg md:text-2xl'>I am originally from England and spent a couple of years in Ghana in west Africa before I hit double digits. Eventually my parents, with me in tow, moved to Canada where I settled down, graduating high school and eventually university.</p>
        <p className='text-lg md:text-2xl'>I am nonbinary, using they/them pronouns, am queer and autistic. This might be part of why I focus so much on accessibility, but my ADHD also means I like learning about almost anything, which is why I also like fullstack work.</p>
      </div>
      <div className='pt-20 px-6 flex flex-col items-center max-w-prose pb-4'>
        <h2 className='font-offside text-4xl md:text-6xl pb-2 text-dark-grey'>Skills</h2>
        <div className='flex flex-col gap-10'>
          <div>
            <h4 className='text-2xl md:text-4xl text-burgundy'>Frontend</h4>
            <div className='flex flex-wrap gap-4'>
              {frontendSkills.map((skill: string, index: number) => (
                <Skill key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-2xl md:text-4xl text-burgundy'>Backend</h4>
            <div className='flex flex-wrap gap-4'>
              {backendSkills.map((skill: string, index: number) => (
                <Skill key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-2xl md:text-4xl text-burgundy'>Other Skills</h4>
            <div className='flex flex-wrap gap-4'>
              {otherSkills.map((skill: string, index: number) => (
                <Skill key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};