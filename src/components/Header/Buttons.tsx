import {HeaderButton, HStack, types, VStack} from "@/components";
import React, {useMemo} from "react";

type ButtonsProps = { horizontal?: boolean }
export const Buttons = ({ horizontal = false }: ButtonsProps) => {

    const Stack = useMemo(() => {
        return horizontal ? HStack : VStack
    }, [horizontal])

    return (
        <Stack>
            {Object.keys(types).map((value: keyof typeof types) => {
                return <HeaderButton key={value} value={value} visible={horizontal} />
            })}
        </Stack>
    )
}

export default Buttons
