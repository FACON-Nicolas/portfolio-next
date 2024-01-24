import {HStack} from "@/components";
import React from "react";

type CardContainerProps = {
    children?: React.ReactNode
    className?: string
}

export const CardContainer = ({ children, className = "" }: CardContainerProps) => {
    return (
        <HStack className={`flex-wrap w-min-80-rem-85-vw ${className}`} justify="center" spacing="2">
            {children}
        </HStack>
    )
}