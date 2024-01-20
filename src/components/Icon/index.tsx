import Image from "next/image";
import {useMemo} from "react";

export type IconName = "github" | "x" | "menu" | "smile" | "award" | "book" | "map-pin"
type IconProps = {
    name: IconName
    className?: string,
    isClickable?: boolean
}

export const Icon = ({ name, className = "", isClickable = true }: IconProps) => {

    const style = useMemo(() => {
        const myClass = !!isClickable ?
            " filter hover:brightness-100 brightness-200 active:brightness-50 transition" : ""
        return className + myClass + " inline mx-2";
    }, [className, isClickable]);

    return (
        <Image
            priority
            src={require(`../../assets/icons/${name}.svg`)}
            alt={name}
            className={style}
        />
    )
}