import React from "react";

type BackgroundImageProps = {
    bgImage: string
    children: React.ReactNode
    className?: string
}

export const BackgroundImage = ({ bgImage, children, className = "" }: BackgroundImageProps) => {
    return (
        <div className={`bg-${bgImage} bg-center bg-no-repeat bg-cover ${className}`}>
            {children}
        </div>
    );
}