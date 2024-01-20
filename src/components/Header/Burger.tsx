"use client";
import React, {Fragment, useCallback, useState} from "react";
import BurgerMenu from "@/components/Header/BurgerMenu";
import {Button, Icon} from "@/components";

const Burger = () => {

    const [isVisible, setVisible] = useState<boolean>(false)
    const onClick = useCallback(() => {
        setVisible(true);
    }, [])

    return (
        <Fragment>
            <Button
                className="h-24 w-24 lg:hidden flex"
                items="center"
                justify="center"
                onClick={onClick}>
                <Icon name="menu" />
            </Button>
            {isVisible && <BurgerMenu setVisible={setVisible} />}
        </Fragment>
    )
}

export default Burger
