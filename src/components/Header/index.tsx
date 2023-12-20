import {HStack} from "@/components";
import React from "react";
import Buttons from "./Buttons";
import Burger from "./Burger";
import Image from "next/image";

export const Header = () => {
    return (
        <HStack justify="between" items="center" width="screen" className="bg-blue-900">
            <Burger />
            <Image
                src={require("../../assets/images/profile.jpeg")}
                alt={"My profile picture"}
                className="aspect-square w-20 m-2 rounded-full hidden lg:inline"
            />
            <Buttons horizontal />
        </HStack>
    )
}
