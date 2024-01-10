import React, {useMemo} from "react";
import {SectionProps, Text, VStack} from "@/components";

export const Section = ({
    children,
    items = "center",
    className = "",
    title
}: SectionProps) => {

    const style = useMemo(() => {
        return className + " pt-10";
    }, [className])

    return (
        <VStack items={items} className={style} width="screen" spacing="10">
            <Text type="h1">{title}</Text>
            {children}
        </VStack>
    )
}
