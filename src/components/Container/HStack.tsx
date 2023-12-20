import React from "react";
import {StackProps} from "@/components/Container/index";

const HStack = ({
    children,
    justify = "start",
    items = "start",
    spacing = "2",
    width = "auto",
    height = "auto",
    className = ""
}: StackProps) => {
    return (
        <div className={`flex justify-${justify} items-${items} gap-${spacing} w-${width} h-${height} ${className}`}>
            {children}
        </div>
    )
}

export default HStack
