import React, {MouseEventHandler} from "react";
import {Items, Justify} from "@/components";

export type OnClick = MouseEventHandler<HTMLButtonElement>
export type ButtonProps = {
    children: React.ReactNode
    justify?: Justify
    items?: Items
    bgColor?: string
    onClick?: OnClick
}

export const types: Record<string, string> = {
    About: "/#about",
    Contact: "/#contact",
    Projects: "/#projects",
    CV: "/#cv",
}

export type HeaderButtonProps = {
    value: keyof typeof types
    visible: boolean
}

export {default as Button} from './Button'
export {default as HeaderButton} from './HeaderButton'
