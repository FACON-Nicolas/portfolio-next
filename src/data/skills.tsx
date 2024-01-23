import {groupBy} from "@/utils";

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

export const skillTypes = ["frontend", "backend", "database", "devops", "mobile", "other"] as const;
export type SkillType = typeof skillTypes[number];

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type ISkill = {
    name: string;
    level: Range<0, 5>;
    image: string;
    type: SkillType;
}

export const skills: Record<string, ISkill[]> = groupBy([
    {
        name: 'TypeScript',
        level: 3,
        image: 'typescript.svg',
        type: 'frontend'
    },
    {
        name: 'TypeScript',
        level: 3,
        image: 'typescript.svg',
        type: 'backend'
    },
    {
        name: 'React.js',
        level: 4,
        image: 'react.svg',
        type: 'frontend'
    },
    {
        name: 'Express.js',
        level: 3,
        image: 'expressjs.svg',
        type: 'backend'
    },
    {
        name: 'Next.js',
        level: 2,
        image: 'nextjs.svg',
        type: 'frontend'
    },
    {
        name: 'Nest.js',
        level: 2,
        image: 'nest.svg',
        type: 'backend'
    },
    {
        name: 'PostgreSQL',
        level: 3,
        image: 'postgresql.png',
        type: 'database'
    },
    {
        name: 'MongoDB',
        level: 3,
        image: 'mongodb.svg',
        type: 'database'
    },
    {
        name: 'Docker',
        level: 1,
        image: 'docker.png',
        type: 'devops'
    },
    {
        name: 'Git',
        level: 3,
        image: 'github.svg',
        type: 'other'
    },
    {
        name: 'React Native',
        level: 4,
        image: 'react.svg',
        type: 'mobile'
    },
    {
        name: 'SwiftUI',
        level: 1,
        image: 'swiftUI.png',
        type: 'mobile'
    },
    {
        name: 'C++',
        level: 3,
        image: 'cpp.svg',
        type: 'other'
    }
], 'type');
