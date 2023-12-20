import React, {useMemo} from "react";

export type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
export const textType: Record<TextType, string> = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-lg",
    p: "",
}

export type TextProps = {
    color?: string
    type?: TextType
    children: React.ReactNode
}

export const Text = ({ color = "white", type = "p", children }: TextProps) => {

    const style = useMemo(() => {
        return textType[type]
            .concat(' ')
            .concat(`text-${color}`)
    }, [color, type])

    return (
        <p className={style}>{children}</p>
    )
}


