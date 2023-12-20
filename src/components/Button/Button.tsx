import React from "react";
import {ButtonProps} from "@/components/Button/index";

const Button = ({
    children,
    justify = "center",
    items = "center",
    bgColor = "transparent",
    onClick = () => {}
}: ButtonProps) => {
    return (
        <button className={`justify-${justify} items-${items} bg-${bgColor}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
