import React from "react";

type TargetValue = '_blank' | '_self' | '_parent' | '_top';

export type AnchorProps = {
    href?: string;
    target?: TargetValue;
    children: React.ReactNode;
    className?: string;
}

export const Anchor = ({href = "", target = "_self", children, className = ""}: AnchorProps) => {
    return (
        <a href={href} target={target} className={className}>
            {children}
        </a>
    )
}