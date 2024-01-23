import {ISkill, skills, SkillType} from "@/data";
import {Card, HStack, SkillLogo, Text} from "@/components";
import {Fragment} from "react";
import {capitalize, range} from "@/utils";

export type SkillProps = {
    type: SkillType
}

export const Skills = ({ type }: SkillProps) => {
    return (
        <Fragment>
            {!!skills[type] && (
                <Card title={capitalize(type)} justify='around'>
                    {skills[type]
                        .sort((a: ISkill, b: ISkill) => b.level - a.level)
                        .map((skill, index) => (
                        <Skill skill={skill} key={index} />
                    ))}
                </Card>
            )}
        </Fragment>
    )
}

const Skill = ({ skill }: { skill: ISkill }) => {
    return (
        <HStack items="center" spacing="5" justify="between">
            <SkillLogo src={require(`../../assets/skills/${skill.image}`)} alt={skill.name} />
            <Text>{skill.name}</Text>
            <SkillLevel level={skill.level} max={5} />
        </HStack>
    )
}

const SkillLevel = ({ level, max }: { level: number, max: number }) => {
    return (
        <HStack>
            {range(max).map((_, index) => (
                <Text key={index} type="h1" color={index < level ? "yellow-400" : "gray-400"}>•</Text>
            ))}
        </HStack>
    )
}