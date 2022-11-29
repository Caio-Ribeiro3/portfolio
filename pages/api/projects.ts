// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Project = {
  id: string;
  name: string;
  techsUsed: string[];
  slug: string;
  link: string;
  images: string[];
  description: string;
}

export function getProjects(): Promise<Project[]> {
  return Promise.resolve([
    {
      id: 'react-vssm',
      images: ['/react-vssm/main.png'],
      link: 'https://www.npmjs.com/package/react-vssm',
      name: 'React Very Simple State Management',
      slug: 'react-vssm',
      techsUsed: ['typescript'],
      description: 'A simple state management library made with typescript made for studying purposes'
    },
    // {
    //   id: 'headless-ecommerce',
    //   images: [
    //     'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=600',
    //     'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   ],
    //   link: 'https://www.npmjs.com/package/react-vssm',
    //   name: 'Headless E-commerce',
    //   slug: 'headless-ecommerce',
    //   techsUsed: ['typescript', 'react', 'html', 'css'],
    //   description: 'A headless ecommerce using NextJs, Tailwind Css and Wordpress as a CMS'
    // },
  ])
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {

  const projects = await getProjects()

  res.status(200).json(projects)
}
