import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

export const techs = [
    {
        id: 'html',
        title: 'HTML',
        startedAt: new Date(2019, 5, 1),
        endedAt: undefined,
        color: '#e34c26',
        Icon: AiFillHtml5
    },
    {
        id: 'css',
        title: 'CSS',
        startedAt: new Date(2019, 5, 1),
        endedAt: undefined,
        color: '#264de4',
        Icon: DiCss3
    },
    {
        id: 'react',
        title: 'React.js',
        startedAt: new Date(2019, 5, 1),
        endedAt: undefined,
        color: '#61DBFB',
        Icon: FaReact
    },
    {
        id: 'react native',
        title: 'React Native',
        startedAt: new Date(2020, 8, 1),
        endedAt: new Date(2021, 9, 1),
        color: '#61DBFB',
        Icon: FaReact
    },
    {
        id: 'javascript',
        title: 'Javascript',
        startedAt: new Date(2019, 5, 1),
        endedAt: undefined,
        color: '#f7df1e',
        Icon: DiJavascript
    },
    {
        id: 'typescript',
        title: 'Typescript',
        startedAt: new Date(2021, 11, 1),
        endedAt: undefined,
        color: '#007acc',
        Icon: SiTypescript
    }
] as const