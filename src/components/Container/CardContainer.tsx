import {HStack} from "@/components";
import React from "react";

type CardContainerProps = {
    children?: React.ReactNode
    className?: string
    bgColor?: string
}

export const CardContainer = ({ children, className = "", bgColor = "[#151515]" }: CardContainerProps) => {
    return (
        <HStack className={`bg-${bgColor} flex-wrap w-[min(80rem,85vw)] ${className}`} justify="center">
            {children}
        </HStack>
    )
}