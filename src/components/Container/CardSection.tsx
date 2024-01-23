import React from "react";
import {CardContainer, Hobby, Project, Section, SectionProps, Skills} from "@/components";
import {IHobby, IProject, SkillType} from "@/data";
import {getCardDataType} from "@/utils";

type CardSectionProps = Omit<SectionProps, "items" | "children"> & {
    bgColor?: string
    elements: IProject[] | IHobby[] | readonly SkillType[]
}

const Element = ({ element }: { element: IProject | IHobby | SkillType }) => {
    switch (getCardDataType(element)) {
        case "project":
            return <Project project={element as IProject} />
        case "hobby":
            return <Hobby hobby={element as IHobby} />
        default:
            return <Skills type={element as SkillType} />
    }
}

export const CardSection = ({ 
    className = "",
    bgColor = "[#151515]",
    title,
    elements
}: CardSectionProps) => {

    const items = elements.map((element, index) => <Element element={element} key={index} />)

    return (
        <Section title={title} className={`bg-${bgColor}`}>
            <CardContainer bgColor={bgColor} className={className}>
                {items}
            </CardContainer>
        </Section>
    )   
}