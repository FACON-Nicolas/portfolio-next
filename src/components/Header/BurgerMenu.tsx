import React from "react";
import {Button, VStack} from "@/components";
import Buttons from "./Buttons";
import {X} from "react-feather";

const BurgerMenu = ({
    setVisible
}: {
    setVisible: (value: boolean) => void
}) => {
    return (
        <VStack width="full" className="z-10 absolute left-0 top-0 bg-black">
            <Button onClick={() => setVisible(false)}>
                <X stroke="red" width={30} height={30} strokeWidth={3} className="top-5 right-5 absolute" />
            </Button>
            <Buttons />
        </VStack>
    )
}

export default BurgerMenu
