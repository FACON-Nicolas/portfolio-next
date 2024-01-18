import React, {useMemo} from "react";
import {StackProps} from ".";

const VStack = ({
    children,
    justify,
    items,
    spacing = "2",
    width = "",
    height = "",
    className = "",
    reverse
}: StackProps) => {

    const style = useMemo(() => {
        const justifyValue = !!justify ? `justify-${justify}` : "";
        const itemsValue = !!items ? `items-${items}` : "";
        const widthValue = !!width ? `w-${width}` : "";
        const heightValue = !!height ? `h-${height}` : "";
        const direction = `flex-col${reverse ? '-reverse' : ''}`
        return `flex ${justifyValue} ${itemsValue} gap-${spacing} ${direction} ${widthValue} ${heightValue} ${className}`
    }, [className, height, items, justify, reverse, spacing, width]);

    return (
        <div className={style}>
            {children}
        </div>
    )
}

export default VStack
