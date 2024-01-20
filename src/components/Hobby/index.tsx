import {IHobby} from "@/data";
import {Card, Text} from "@/components";

export type HobbyProps = {
    hobby: IHobby
}
export const Hobby = ({ hobby }: HobbyProps) => {
    return (
        <Card
            title={hobby.title}
            image={hobby.image}
            description={hobby.description}>
            {hobby.more && <Text color="green-400">{hobby.more}</Text>}
        </Card>
    )
}