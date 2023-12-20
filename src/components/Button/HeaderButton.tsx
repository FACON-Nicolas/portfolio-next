import React from "react";
import {HeaderButtonProps, types} from ".";
import Link from "next/link";
import {Text} from "@/components";

const HeaderButton = ({
    value,
    visible
}: HeaderButtonProps) => {
    return (
        <Link
            href={types[value]}
            className={`lg:flex justify-center items-center h-24 w-48 ${visible ? 'hidden' : 'flex'}`}>
            <Text type="h5">{value}</Text>
        </Link>
    )
}

export default HeaderButton
