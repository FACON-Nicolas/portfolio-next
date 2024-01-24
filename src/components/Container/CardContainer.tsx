import {HStack} from "@/components";
import React from "react";

type CardContainerProps = {
    children?: React.ReactNode
    className?: string
}

export const CardContainer = ({ children, className = "" }: CardContainerProps) => {
    return (
        <HStack className={`flex-wrap w-[min(80rem,85vw)] ${className}`} justify="center">
            {children}
        </HStack>
    )
}