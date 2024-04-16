import Image from 'next/image';
import Link from 'next/link';
import { TfiArrowLeft } from 'react-icons/tfi';

import data from '@/data/projects/data.json';

export default function ProjectPage({ params }: { params: { project: string } }) {

  function getProjectData() {
    return data.find((project) => project.project === params.project);
  }

  const projectData = getProjectData();

  return (
    <>
    { projectData ? (
      <section className='pt-16 md:pt-28 lg:pt-20 px-4 md:px-10 flex flex-col md:flex-row md:justify-center items-center md:items-start md:min-h-screen text-burgundy text-lg md:text-xl'>
        <div className='md:flex-1 flex flex-col items-center md:grid md:grid-cols-1 2xl:grid-cols-2 place-items-center gap-4 order-last md:order-first pb-4 md:pb-0'>
          {projectData.images.map((image, index) => (
            <div className='relative h-auto aspect-w-1 aspect-h-1 flex justify-center' key={index}>
              <Image src={image.src} alt={image.alt} width="0" height="0" sizes="100vw" className='w-4/5 h-auto'/>
            </div>
          ))}
        </div>
        <div className='md:flex-1 flex flex-col gap-4 pb-4'>
          <Link href='/#projects' className='backButton flex items-center gap-2'><TfiArrowLeft /> Back</Link>
          <h1 className='text-4xl md:text-6xl font-offside'>{projectData.projectName}</h1>
          <p className='text-2xl md:text-2xl'>{projectData.briefDescription}</p>
          <p className='text-2xl md:text-2xl'>{projectData.keywords}</p>
          <p className='text-2xl md:text-2xl'>Project Description</p>
          <p className='md:text-lg'>{projectData.projectDescription}</p>
          <p className='text-2xl md:text-2xl'>Limitations</p>
          <p className='md:text-lg'>{projectData.projectLimitations}</p>
          <p className='text-2xl md:text-2xl'>Links</p>
          <ul className='flex flex-col gap-2'>
            {projectData.projectLinks.deployed &&
            <li><a href={projectData.projectLinks.deployed} target='_blank' className='backButton'>Deployed Project</a> </li>
            }
            <li><a href={projectData.projectLinks.github} target='_blank' className='backButton'>Github Repo</a></li>
          </ul>
        </div>
      </section>
    ) : (
      <div className='flex flex-col items-center gap-4 pt-12 md:pt-24'>
        <h1 className='text-4xl md:text-6xl font-offside'>Project Not Found</h1>
        <Link href='/#projects' className='backButton flex items-center gap-2'><TfiArrowLeft /> Back</Link>
      </div>
    )}
    </>
  )
}
