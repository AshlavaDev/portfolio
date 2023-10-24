import Link from 'next/link';
import Image from 'next/image';

type Props = {
  project: string,
  projectName: string,
  image: {
    name: string,
    src: string,
    alt: string
  },
  briefDescription: string,
  keywords: string
}

export default function ProjectCard({project, projectName, image, briefDescription, keywords}: Props) {
  return (
    <Link href={`/projects/${project}`} >
      <div className='border border-solid border-cream bg-cream hover:bg-burgundy rounded hover:text-cream text-burgundy w-80 h-96 p-1 flex flex-col items-center justify-evenly md:w-[50rem] md:h-52 md:p-4'>
        <h4 className='text-xl md:text-2xl font-semibold'>{projectName}</h4>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='md:w-1/3'>
            <Image src={image.src} alt={image.alt} width={288} height={240} className='object-cover w-full h-full'/>
          </div>
          <div className='flex flex-col gap-2 md:w-2/3'>
            <p className='text-lg md:text-xl text-center'>{briefDescription}</p>
            <p className='text-lg md:text-xl text-center'>{keywords}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}