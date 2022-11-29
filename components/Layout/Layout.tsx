import Head from 'next/head'
import Link from 'next/link'
import { cloneElement, ReactNode, useRef } from 'react';

import { AiFillHtml5, AiOutlineGithub, AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";

import Container from "../Container/Container"

interface LayoutProps {
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    const { children } = props

    const headerRef = useRef<HTMLElement | null>(null)

    return (
        <div className='text-gray-800'>
            <Head>
                <title>Caio's portfolio</title>
                <meta name="description" content="Welcome to my portfolio page, here you can find some of my projetcs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header ref={headerRef} className='sticky top-0 bg-white z-50'>
                <Container>
                    <div className='py-4 border-b flex justify-between'>
                        <Link href='/'>
                            Caio Ribeiro
                        </Link>
                        <div className='flex gap-8'>
                            <a target='_blank' href='https://www.linkedin.com/in/caio-ribeiro-465509185/'>
                                <AiFillLinkedin size={24} />
                            </a>
                            <a target='_blank' href='https://github.com/Caio-Ribeiro3'>
                                <AiOutlineGithub size={24} />
                            </a>
                            <a href="mailto:devcaioribeiro@gmail.com" >
                                <AiTwotoneMail size={24} />
                            </a>
                        </div>
                    </div>
                </Container>
            </header>

            <Container>
                <main className='divide-y'>
                    {cloneElement(children, { headerHeight: headerRef.current?.getBoundingClientRect().height })}
                </main>
            </Container>
        </div>
    )
}

export default Layout