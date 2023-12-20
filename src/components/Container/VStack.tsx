import React from "react";
import {StackProps} from ".";

const VStack = ({
    children,
    justify = "start",
    items = "start",
    spacing = "2",
    width = "auto",
    height = "auto",
    className = ""
}: StackProps) => {
    return (
        <div className={`flex justify-${justify} items-${items} gap-${spacing} flex-col w-${width} h-${height} ${className}`}>
            {children}
        </div>
    )
}

export default VStack
