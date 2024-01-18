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
    technologies: string[],
    openSource?: boolean
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
    }, {
        name: "Sprite Sheet Splitter",
        inDevelopment: false,
        description: `Made for beginners in game design, my sprite splitter tool makes setting up 2D games easy. 
        It breaks down sprite sheets into separate pictures without any trouble, so you can focus on putting 
        them in your game without a lot of learning.`,
        photo: "Sprite.png",
        year: 2022,
        type: "Personal",
        bgImage: "splitter",
        technologies: ["Python", "Flet", "PIL"],
        openSource: true,
        github: "https://github.com/FACON-Nicolas/Sprite-Sheet-Splitter"
    },
    {
        name: "Conway's Game of Life",
        inDevelopment: false,
        description: `Designed for beginners, my Game of Life tool makes creating simulations easy. 
        It looks at the grid, figures out which cells are alive or not, and updates everything for you. 
        No need for tricky coding – perfect for those just starting out. 
        It's a simple way to explore the world of simulations without getting overwhelmed.`,
        photo: "conways.png",
        year: 2022,
        type: "Personal",
        bgImage: "gol",
        technologies: ["C++", "SFML"],
        openSource: true,
        github: "https://github.com/FACON-Nicolas/conways-cpp"
    },
    {
        name: "Pacman",
        inDevelopment: false,
        description: `For gaming beginners, my Pac-Man tool is an easy way to play. 
        Just move Pac-Man around with the arrow keys, eat the dots, and avoid the ghosts.
         No need for tricky controls – it's perfect for those who want a simple and fun gaming experience.`,
        photo: "conways.png",
        year: 2022,
        type: "Personal",
        bgImage: "pacman",
        technologies: ["C++", "SFML", "Boost"],
        openSource: true,
        github: "https://github.com/FACON-Nicolas/pacman"
    }
]
