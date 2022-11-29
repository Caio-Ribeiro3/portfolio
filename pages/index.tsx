import Image from 'next/image'
import Link from 'next/link'

import differenceInYears from 'date-fns/differenceInYears'
import { Project, getProjects } from './api/projects';
import Layout from '../components/Layout/Layout';
import { techs } from '../constants';
import { useRef } from 'react';

interface HomeProps {
  projects: Project[];
  headerHeight?: number
}

export default function Home(props: HomeProps) {

  const { projects, headerHeight } = props

  const projectsSectionRef = useRef<HTMLElement | null>(null)
  const techStackSectionRef = useRef<HTMLElement | null>(null)

  return (
    <>
      <section
        className='flex py-16 justify-center  gap-8'
        style={{ height: `calc(100vh - ${headerHeight || 0}px)`, scrollSnapAlign: 'end' }}
      >
        <div className='lg:w-[50%] my-auto text-center'>
          <h1 className="text-5xl font-bold">
            👋 Hi, my name is Caio, a frontend developer
          </h1>
          <p className='my-8'>
            Fascinated by technology, i studied Systems Development at SENAI CETIND, although a full-stack developer, lately i&apos;ve been more focused on the frontend and mobile development using React.Js and React-Native.
            <br />
            I love challenges that involve both creativity and logic, always trying to find the best solution to a problem. Because of this a lot of the fun in the field for me come from hackathons at my free time.
          </p>
          <nav className='mx-auto w-full sm:w-max flex flex-col sm:flex-row gap-4 sm:gap-8'>
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => {
                projectsSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest"
                });
              }} >
              View Projects
            </button>
            <button
              className="text-gray-800 bg-white hover:bg-gray-50 border border-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => {
                techStackSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest"
                });
              }}
            >
              View Tech Stack
            </button>
          </nav>
        </div>
      </section>
      <section
        className='h-[100vh] flex flex-col py-16 justify-center'
        style={{ scrollSnapAlign: 'center' }}
        ref={techStackSectionRef}
      >
        <h2 className="text-5xl font-bold mb-16 lg:mb-24">
          Tech Stack
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mx-auto'>
          {techs.map(({ id, title, startedAt, endedAt, Icon, color }) => (
            <div key={id} className='flex gap-8'>
              <Icon color={color} size={56} />
              <div>
                <h4 className='text-xl md:text-4xl'>{title}</h4>
                <p>{differenceInYears(endedAt ?? Date.now(), startedAt) || 1} {differenceInYears(endedAt ?? Date.now(), startedAt) > 1 ? 'years' : 'year'}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className='min-h-[100vh] flex flex-col py-16'
        style={{ scrollSnapAlign: 'start' }}
        ref={projectsSectionRef}
      >
        <h2 className="text-5xl font-bold mb-16 lg:mb-24">
          Projects
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4'>
          {projects.map(({ id, name, images, techsUsed, slug }) => (
            <Link key={id} href={`/project/${slug}`}>
              <div className='flex gap-4 flex-col'>
                <div className='relative h-[250px] w-auto'>
                  <Image
                    src={images[0]}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>
                <div>
                  <h4 className='text-xl font-bold'>{name}</h4>
                  {techsUsed.map(el => (
                    <span key={el} className=''>
                      {techs.find(tech => tech.id === el)?.title}{' '}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: { projects }
  }
}
