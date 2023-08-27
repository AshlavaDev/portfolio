import Link from 'next/link';

type Props = {
  project: string,
  projectName: string,
  briefDescription: string,
  keywords: string
}

export default function ProjectCard({project, projectName, briefDescription, keywords}: Props) {

  return (
    <Link href={{ 
      pathname: `/projects/${project}`,
      query: { project: project} 
    }} >
      <div className='border border-solid border-cream hover:bg-cream rounded text-cream hover:text-burgundy w-80 h-96 p-1'>
        <h4>{projectName}</h4>
        <p>{briefDescription}</p>
        <p>{keywords}</p>
      </div>
    </Link>
  )
}