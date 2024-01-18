import {GitHub} from "react-feather";
import {Anchor, AnchorProps} from "@/components";

export const GithubButton = ({
    href = ""
}: Pick<AnchorProps, "href">) => {
    return (
        <Anchor href={href} target="_blank">
            <GitHub
                stroke="#800080"
                width={30}
                height={30}
                className="hover:stroke-amber-400 transition"
            />
        </Anchor>
    )
}