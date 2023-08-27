'use client'

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { TfiArrowLeft } from 'react-icons/tfi';
import data from '../../../data/projects/data.json';

type Props = {
  
}

export default function ProjectPage ({}: Props ) {
  const router = useSearchParams();
  const project = router.get('project');

  const projectData = data.find((project) => project === project);

  console.log(projectData);


  return (
    
    <section className='pt-20 px-4 md:px-10 flex flex-col md:flex-row md:justify-center items-center md:items-baseline min-h-screen text-burgundy text-lg md:text-xl'>
      { projectData ? (
      <>
        <div className='md:flex-1 md:grid md:grid-cols-2'>
          <Image src='' alt=''></Image>
          <Image src='' alt=''></Image>
          <Image src='' alt=''></Image>
        </div>
        <div className='md:flex-1 flex flex-col gap-4'>
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
            <li><a href={projectData.projectLinks.deployed} target='_blank' className='backButton'>Deployed Project</a> </li>
            <li><a href={projectData.projectLinks.github} target='_blank' className='backButton'>Github Repo</a></li>
          </ul>
        </div>
      </>
       ) : (
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-4xl md:text-6xl font-offside'>Project Not Found</h1>
          <Link href='/#projects' className='backButton flex items-center gap-2'><TfiArrowLeft /> Back</Link>
        </div>
       )}
    </section>
  )
}