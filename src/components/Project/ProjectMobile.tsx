import {ProjectProps} from "@/components/Project/index";
import {BackgroundImage} from "@/components/Container/BackgroundImage";
import {GithubButton, Text, VStack} from "@/components";

export const ProjectMobile = ({ project, index }: ProjectProps) => {
    return (
        <BackgroundImage bgImage={project.bgImage} className="w-[90vw] rounded-xl xl:hidden shadow-lg shadow-black">
            <VStack width="full" height="full" spacing="5" className="rounded-xl bg-[#0007] p-10">
                <Text type="h2" className="hover:text-amber-400 transition">{project.name}</Text>
                <Text color="amber-400">{project.type} project • {project.year}</Text>
                <Text className="text-xl leading-8">{project.description}</Text>
                <Text color="amber-400">{project.technologies.join(' • ')}</Text>
                {!!project.github && <GithubButton href={project.github} />}
            </VStack>
        </BackgroundImage>
    )
}