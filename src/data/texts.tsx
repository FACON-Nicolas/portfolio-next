import {IconName} from "@/components";

export type Presentation = {
    text: string,
    icon: IconName
}

export const presentationTexts: Presentation[] = [
    {
        text: `Hi! My name is Nicolas Facon and I develop websites and mobile applications on my
            free time. I like learn with programming about IT and about the things I work with.
            It is a sort of challenge for me.`,
        icon: "smile"
    },
    {
        text: `In 2021, I entered in Lens University Institute of Technology, french university in
             IT, to learn more about software and web development. I am currently on the third and last year.
            I put my knowledge into practice in various projects.
            In 2023, I studied 4 months in Ireland to improve my English and 
            it's was one of the best experience of my life.`,
        icon: "award"
    },
    {
        text: `My hobbies are reading, programming, walking, learn foreign
            languages󠁧󠁢󠁥 and sciences. Currently, The last book I've read is The Lean Startup !.`,
        icon: "book",
    },
    {
        text: `I am ready to work as React Native developer in the Arras, Lens,
            Béthune and Lille area in France in September 2024.`,
        icon: "map-pin"
    }

]
