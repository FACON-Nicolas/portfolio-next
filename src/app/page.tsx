import {Header, HStack, Section, Text, VStack} from "@/components";
import Image from "next/image";
import {presentationTexts, IProject, projects} from "@/data";
import {colors} from "@/constants";
import {Project} from "@/components/Project";

export default function Home() {
    return (
        <VStack items="center" width="screen" spacing="10">
            <Header />
            <Section title="Who Am I ?">
                <HStack className="w-[min(70rem,80vw)] flex-wrap" justify="around" items="center">
                    <Image
                        className="rounded-full lg:w-[min(45%,35rem)] aspect-square w-[80vw]"
                        src={require('../assets/images/profile.jpeg')}
                        alt={"It's my avatar"}
                    />
                    <VStack className="lg:w-[min(45%,35rem)] w-[80vw] gap-5">
                        {presentationTexts.map((text: string, index: number) => (
                            <Text key={index} className="leading-8 text-lg">{text}</Text>
                        ))}
                    </VStack>
                </HStack>
            </Section>
            <Section title="My projects" className={`bg-${colors.header}`}>
                <HStack className={`bg-${colors.header} flex-wrap w-[min(80rem,90vw)] mb-10`} justify="center">
                    {projects.map((project: IProject, index: number) => (
                        <Project
                            project={project}
                            index={index}
                            key={index}
                        />
                    ))}
                </HStack>
            </Section>
        </VStack>
    )
}
