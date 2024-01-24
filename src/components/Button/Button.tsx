import React from "react";
import {ButtonProps} from "@/components/Button/";
import {className} from "postcss-selector-parser";

const Button = ({
    children,
    justify = "center",
    items = "center",
    className = "",
    onClick = () => {}
}: ButtonProps) => {
    return (
        <button className={`justify-${justify} items-${items} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
