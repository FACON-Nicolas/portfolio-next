"use client";
import React, {useCallback, useState} from "react";
import {Menu} from "react-feather";
import BurgerMenu from "@/components/Header/BurgerMenu";

const Burger = () => {

    const [isVisible, setVisible] = useState<boolean>(false)
    const onClick = useCallback(() => {
        setVisible(true)
    }, [])

    return (
        <>
            <button className="h-24 w-24 items-center justify-center lg:hidden flex" onClick={onClick}>
                <Menu stroke="white" width={30} height={30} />
            </button>
            {isVisible && <BurgerMenu setVisible={setVisible} />}
        </>
    )
}

export default Burger
