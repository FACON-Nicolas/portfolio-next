import {IProject} from "@/data";
import {Card, GithubButton, Text} from "@/components";

export type ProjectProps = {
    project: IProject
}

export const Project = ({ project }: ProjectProps) => {
    return (
        <Card
            title={project.name}
            description={project.description}
            image={project.bgImage}
            info={`${project.type} project • ${project.year}`}>
            <Text color="green-400">{project.technologies.join(' • ')}</Text>
            {!!project.github && <GithubButton href={project.github} />}
        </Card>
    )
}
