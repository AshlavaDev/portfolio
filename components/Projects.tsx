import React from 'react';
import ProjectCard from './ProjectCard';
import data from '../data/projects/data.json';

export default function Projects() {

  return (
    <section id='projects' className='min-h-screen flex flex-col xl:flex-row items-center justify-between xl:justify-center bg-burgundy md:pt-6 pb-4'>
      <h2 className='text-cream font-offside text-4xl md:text-8xl px-20 pt-24 md:pt-0 pb-12 xl:pb-0'>Projects</h2>
      <div className='grid grid-cols-1 justify-items-center gap-4 pb-6 md:pb-0'>
        {data.map((project, index) => (
          <ProjectCard key={index} project={project.project} projectName={project.projectName} image={project.images[0]} briefDescription={project.briefDescription} keywords={project.keywords} />
        ))}
      </div>
    </section>
  )
};