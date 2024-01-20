import React, {Fragment} from "react";
import {HStack, Justify, Text, VStack} from "@/components";
import {BackgroundImage} from "@/components/Container/BackgroundImage";
import {info} from "autoprefixer";

type CardProps = {
    children?: React.ReactNode;
    className?: string;
    title: string;
    description: string;
    image: string;
    justify?: Justify;
    info?: string;
}

export const Card = ({
    children = <Fragment/>,
    className = "",
    title,
    description,
    image,
    justify = "center",
    info = ""
}: CardProps) => {
    return (
        <BackgroundImage
            bgImage={image}
            className="w-[min(90vw,30rem)] rounded-xl shadow-lg shadow-black">
            <VStack
                className={`rounded-xl bg-[#000C] p-10 ${className}`}
                width="full"
                height="full"
                justify={justify}
                spacing='5'>
                <Text type="h2" className="hover:text-green-400 transition-colors">
                    {title}
                </Text>
                {!!info && (
                    <HStack>
                        <Text color="green-400">{info}</Text>
                    </HStack>
                )}
                <Text className="text-xl leading-8">{description}</Text>
                {children}
            </VStack>
        </BackgroundImage>
    )
}