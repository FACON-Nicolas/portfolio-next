import {HStack, Text, VStack} from "@/components";
import Image from "next/image";
import {ProjectProps} from "@/components/Project/index";

export const ProjectLarge = ({ project, index }: ProjectProps) => {
    return (
        <HStack
            className="rounded-lg w-[min(100rem,80vw)] xl:flex hidden"
            justify="center"
            items="center"
            reverse={index % 2 !== 0}>
            <VStack className="w-[45%] my-auto" height="full">
                <Text color="amber-400">
                    {project.type} project • {project.year}
                </Text>
                <Text
                    type="h2"
                    className="transition hover:text-amber-400">
                    {project.name}
                </Text>
                <VStack
                    className="w-full my-auto shadow shadow-gray-900 p-4 translate-x-1/4 bg-blue-950 rounded-lg"
                    justify="center">
                    <Text className="leading-8 text-lg">{project.description}</Text>
                </VStack>
            </VStack>
            <VStack className="w-[70%]" height="full">
                <Image
                    src={require('../../assets/images/SaaS.png')}
                    className="w-full"
                    alt={project.photo}
                />
            </VStack>
        </HStack>
    )
}