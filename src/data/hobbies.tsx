export type IHobby = {
    title: string;
    description: string;
    image: string;
    more?: string;
}

export const hobbies: IHobby[] = [
    {
        title: "Reading",
        description: `I like to read books, especially about sciences, technology, self-improvement, and business.
        Reading is something that I do everyday to improve my knowledge and skills. I read books in French and English.`,
        image: "i_read",
        more: "This picture has been generated by Artificial Intelligence."
    },
    {
        title: "Programming",
        description: `I like to program in my free time. 
        I like to learn new things and to put my knowledge into practice.
        I like to learn new languages and new frameworks, especially in node.js. 
        I like to work on new projects.`,
        image: "i_code",
        more: "This picture is the source code of the Card component of this website."
    },
    {
        title: "Walking",
        description: `I like to walk in the nature and to discover new places. 
        I like to walk to relax and to think about my life and what I would like to do in the next weeks / months.`,
        image: "i_walk",
        more: "This picture has been generated by Artificial Intelligence."

    },
    {
        title: "Learn foreign languages",
        description: `I like to learn foreign languages. I like to learn English and Spanish.
        I like to learn foreign languages to discover new cultures and to communicate with people from other countries.`,
        image: "i_language",
        more: "This picture has been taken by myself at Dublin Trinity College in Ireland."
    }
]