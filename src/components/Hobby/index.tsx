import {IHobby} from "@/data";
import {Card, DescriptionCard, Text} from "@/components";

export type HobbyProps = {
    hobby: IHobby
}
export const Hobby = ({ hobby }: HobbyProps) => {
    return (
        <DescriptionCard
            title={hobby.title}
            image={hobby.image}
            description={hobby.description}>
            {hobby.more && <Text color="green-400">{hobby.more}</Text>}
        </DescriptionCard>
    )
}