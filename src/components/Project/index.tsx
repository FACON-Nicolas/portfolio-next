import {IProject} from "@/data";
import {Card, GithubButton, Text} from "@/components";
import {DescriptionCard} from "@/components/Container/";

export type ProjectProps = {
    project: IProject
}

export const Project = ({ project }: ProjectProps) => {
    return (
        <DescriptionCard
            title={project.name}
            justify="between"
            description={project.description}
            image={project.bgImage}
            info={`${project.type} project • ${project.year}`}>
            <Text color="green-400">{project.technologies.join(' • ')}</Text>
            {!!project.github && <GithubButton href={project.github} />}
        </DescriptionCard>
    )
}
