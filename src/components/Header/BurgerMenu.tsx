import React from "react";
import {Button, Icon, VStack} from "@/components";
import Buttons from "./Buttons";

const BurgerMenu = ({
    setVisible
}: {
    setVisible: (value: boolean) => void
}) => {
    return (
        <VStack width="full" className="z-10 absolute left-0 top-0 bg-black">
            <Button onClick={() => setVisible(false)}>
                <Icon name="x" className="top-5 right-5 absolute" />
            </Button>
            <Buttons />
        </VStack>
    )
}

export default BurgerMenu
