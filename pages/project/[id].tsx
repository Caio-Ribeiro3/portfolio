import { GetStaticProps } from "next"
import Head from "next/head";
import Image from "next/image";
import { ReactElement, useState } from "react";
import Layout from "../../components/Layout/Layout"
import { techs } from "../../constants";
import { getProjects, Project } from "../api/projects"

interface ProjectProps {
  project: Project;
  headerHeight?: number;
}

const Project = (props: ProjectProps) => {

  const { project, headerHeight } = props

  const [currentImage, setCurrentImage] = useState(project.images[0])

  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content={project.description} />
      </Head>

      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16"
        style={{ minHeight: `calc(100vh - ${headerHeight || 0}px)` }}
      >
        <div className="flex flex-col gap-8 min-h-[50vh] md:h-auto">
          <div className={`relative ${project.images.length > 1 ? 'h-[33vh]' : 'h-full'} lg:h-[calc(100%-calc(100px+4rem))] w-auto`}>
            <Image
              src={currentImage}
              alt=''
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
          <div className="overflow-x-auto pr-4 md:pr-0">
            <div className="grid grid-cols-4 gap-4 w-[200%] md:w-auto">
              {project.images.reduce<string[]>((acc, curr) => {
                if (curr !== currentImage) {
                  acc.push(curr)
                }
                return acc
              }, []).map((src) => (
                <div
                  key={src}
                  className='relative h-[100px] w-full cursor-pointer'
                  onClick={() => {
                    setCurrentImage(src)
                  }}
                >
                  <Image
                    src={src}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center text-center lg:text-left lg:items-start">
          <h1 className="text-5xl font-bold">
            {project.name}
          </h1>
          <p className="my-4">
            {project.description}
          </p>
          <div className="flex flex-col gap-4">
            {project.techsUsed.map(key => {

              const tech = techs.find(el => el.id === key)

              if (!tech) return <></>

              const { Icon, color, title } = tech

              return (
                <div key={key} className='flex gap-4'>
                  <Icon color={color} size={24} />
                  <div>
                    <h4 className='text-md'>{title}</h4>
                  </div>
                </div>
              )
            })}
          </div>
          <a
            target='_blank'
            rel="noreferrer"
            href={project.link}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Visit the Project
          </a>
        </div>
      </section>
    </>
  )
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export async function getStaticPaths() {

  const projects = await getProjects()

  return {
    paths: projects.map(({ id }) => ({ params: { id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const projects = await getProjects()

  return {
    props: { project: projects.find(project => project.id === params?.id) },
  }
}

export default Project