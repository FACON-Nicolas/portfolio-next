import {Anchor, AnchorProps, Icon} from "@/components";

export const GithubButton = ({
    href = ""
}: Pick<AnchorProps, "href">) => {
    return (
        <Anchor href={href} target="_blank">
            <Icon name="github" />
        </Anchor>
    )
}