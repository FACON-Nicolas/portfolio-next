import React, {Fragment} from "react";
import {CardContainer, Hobby, Project, Section, SectionProps} from "@/components";
import {IHobby, IProject} from "@/data";
import {CardDataType, getCardDataType} from "@/utils";

type CardSectionProps = Omit<SectionProps, "items" | "children"> & {
    bgColor?: string
    elements: IProject[] | IHobby[]
}

const CardElement = ({ element }: { element: IProject | IHobby }) => {
    return (
        <Fragment>
            {getCardDataType(element) === "project" ? (
                <Project project={element as IProject} />
            ) : (
                <Hobby hobby={element as IHobby} />
            )}
        </Fragment>
    )
};

export const CardSection = ({ 
    className = "",
    bgColor = "[#151515]",
    title,
    elements
}: CardSectionProps) => {

    const items = elements.map((element, index) => <CardElement element={element} key={index} />)

    return (
        <Section title={title} className={`bg-${bgColor}`}>
            <CardContainer bgColor={bgColor} className={className}>
                {items}
            </CardContainer>
        </Section>
    )   
}