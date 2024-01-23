import {Card, HStack, Justify, Text} from "@/components";
import React, {Fragment} from "react";

type CardProps = {
    children?: React.ReactNode;
    className?: string;
    title: string;
    description: string;
    image: string;
    justify?: Justify;
    info?: string;
}

export const DescriptionCard = ({
    children,
    className = "",
    title,
    description,
    image,
    justify = "center",
    info = ""
}: CardProps) => {
    return (
        <Card className={className} image={image} justify={justify} title={title}>
            {!!info && (
                <HStack>
                    <Text color="green-400">{info}</Text>
                </HStack>
            )}
            <Text className="text-xl leading-8">{description}</Text>
            {children}
        </Card>
    )
}