import React, {Fragment} from "react";
import {HStack, Justify, Text, VStack} from "@/components";
import {BackgroundImage} from "@/components/Container/BackgroundImage";

type CardProps = {
    children?: React.ReactNode;
    className?: string;
    image?: string;
    justify?: Justify;
    title: string;
}

export const Card = ({
    children,
    className = "",
    image = "",
    title,
    justify = "center",
}: CardProps) => {
    return (
        <BackgroundImage
            bgImage={image}
            className="w-90-vw-30-rem rounded-xl shadow-lg shadow-black">
            <VStack
                className={`rounded-xl bg-demi-dark p-10 ${className}`}
                width="full"
                height="full"
                justify={justify}
                spacing='5'>
                <Text type="h2" className="hover:text-green-400 transition-colors">
                    {title}
                </Text>
                {children}
            </VStack>
        </BackgroundImage>
    )
}