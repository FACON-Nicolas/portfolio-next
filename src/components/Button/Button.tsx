import React from "react";
import {ButtonProps} from "@/components/Button/";
import {className} from "postcss-selector-parser";

const Button = ({
    children,
    justify = "center",
    items = "center",
    bgColor = "transparent",
    className = "",
    onClick = () => {}
}: ButtonProps) => {
    return (
        <button className={`justify-${justify} items-${items} bg-${bgColor} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
