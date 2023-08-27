import React from 'react';
import ProjectCard from './ProjectCard';
import data from '../data/projects/data.json';

type Props = {

}



export default function Projects({}: Props) {

  return (
    <section id='projects' className='min-h-screen flex flex-col md:flex-row items-center md:justify-between bg-burgundy'>
      <h2 className='text-cream font-offside text-4xl md:text-8xl px-20 pt-24 md:pt-0 pb-12 md:pb-0'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 pr-20'>
        {data.map((project, index) => (
          <ProjectCard key={index} project={project.project} projectName={project.projectName} briefDescription={project.briefDescription} keywords={project.keywords} />
        ))}
      </div>
    </section>
  )
};