export type ProjectType = "Personal" | "School" | "Professional"
export type IProject = {
    name: string
    inDevelopment: boolean
    description: string
    details?: string
    photo: string
    github?: string
    year: number
    type: ProjectType
    bgImage: string
    technologies: string[]
}
export const projects: IProject[] = [
    {
        name: "SaaS for pizzerias",
        inDevelopment: false,
        description: `This SaaS for pizzerias was started in July 2023, it was firstly just for a pizzeria called Da Adamo.
        Now, many restaurants are waiting a first version of my software.
        
        It will be cheap (€900 / year for maintenance and updates), and it will be customizable as they want.`,
        photo: "SaaS.png",
        year: 2023,
        type: "Professional",
        bgImage: "pizz",
        technologies: ["TypeScript", "Next.js", "TailwindCSS", "PostgreSQL", "Docker", "Nest.js", "React Native"]
    }
]
