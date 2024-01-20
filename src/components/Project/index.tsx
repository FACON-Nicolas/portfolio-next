import {IProject} from "@/data";
import {BackgroundImage} from "@/components/Container/BackgroundImage";
import {GithubButton, HStack, Text, VStack} from "@/components";

export type ProjectProps = {
    project: IProject
}

export const Project = ({ project }: ProjectProps) => {
    return (
        <BackgroundImage
            bgImage={project.bgImage}
            className="w-[min(90vw,30rem)] rounded-xl shadow-lg shadow-black">
            <VStack width="full" height="full" spacing="5" justify="around" className="rounded-xl bg-[#000C] p-10">
                <Text type="h2" className="hover:text-green-400 transition">{project.name}</Text>
                <HStack>
                    <Text color="green-400">{project.type} project • {project.year}</Text>
                </HStack>
                <Text className="text-xl leading-8">{project.description}</Text>
                <Text color="green-400">{project.technologies.join(' • ')}</Text>
                {!!project.github && <GithubButton href={project.github} />}
            </VStack>
        </BackgroundImage>
    )
}
