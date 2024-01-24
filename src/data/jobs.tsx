export type IJob = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    image: string;
}

export const jobs: IJob[] = [
    {
        company: "Freelance developer",
        position: "At home",
        startDate: "2023-07-13",
        endDate: "now",
        description: "I've been working as a freelance developer for 6 months. I've worked on a variety of projects." +
            "I migrated an API from Firebase to Strapi, I added new features to a React Native app, etc.",
        image: "i_code"
    },
    {
        company: "Louvre-Lens Museum",
        position: "Fullstack developer",
        startDate: "2023-06-05",
        endDate: "2023-07-28",
        description: "I worked on a project to create a mobile app for the Louvre-Lens Museum. " +
            "I developed the frontend with React Native and the backend with Nest.js.",
        image: "i_louvre"
    },
    {
        company: "Lenrek Informatique",
        position: "Java developer",
        startDate: "2023-08-07",
        endDate: "now",
        description: "I worked on a project to create a mobile app for Lenrek Informatique " +
            "on a software called Patti. I developed the frontend with React Native and the backend in Java.",
        image: "i_lenrek"
    },
    {
        company: "IUT de Lens library",
        position: "library assistant",
        startDate: "2022-04-05",
        endDate: "2022-12-31",
        description: "I worked at the IUT de Lens library as a library assistant. " +
            "I was in charge of managing the library and helping students.",
        image: "i_library"
    }
].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
