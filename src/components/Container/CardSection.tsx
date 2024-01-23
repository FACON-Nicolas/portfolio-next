import React from "react";
import {CardContainer, Hobby, Job, Project, Section, SectionProps, Skills} from "@/components";
import {IHobby, IJob, IProject, SkillType} from "@/data";
import {getCardDataType} from "@/utils";

type CardSectionProps = Omit<SectionProps, "items" | "children"> & {
    bgColor?: string
    elements: IProject[] | IHobby[] | readonly SkillType[] | IJob[]
}

const Element = ({ element }: { element: IProject | IHobby | SkillType | IJob }) => {
    switch (getCardDataType(element)) {
        case "project":
            return <Project project={element as IProject} />
        case "hobby":
            return <Hobby hobby={element as IHobby} />
        case "job":
            return <Job job={element as IJob} />
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