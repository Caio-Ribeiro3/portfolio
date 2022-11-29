import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container = (props: ContainerProps) => {
    const { children } = props

    return (
        <div className='max-w-screen-xl container mx-auto px-8'>
            {children}
        </div>
    )
}

export default Container