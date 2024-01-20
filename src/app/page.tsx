import {HStack, Section, VStack, Project, TextIcon} from "@/components";
import Image from "next/image";
import {presentationTexts, IProject, projects, Presentation} from "@/data";
import {colors} from "@/constants";

export default function Home() {
    return (
        <VStack items="center" width="screen" spacing="10"  className={`bg-[#151515]`}>
            <Section title="Who Am I ?">
                <HStack className="w-[min(70rem,80vw)] flex-wrap" justify="around" items="center">
                    <Image
                        className="rounded-full lg:w-[min(45%,35rem)] aspect-square w-[80vw]"
                        src={require('../assets/images/profile.jpeg')}
                        alt={"It's my avatar"}
                    />
                    <VStack className="lg:w-[min(45%,35rem)] w-[80vw] gap-5">
                        {presentationTexts.map((text: Presentation, index: number) => (
                            <TextIcon key={index} className="leading-8 text-lg" icon={text.icon}>
                                {text.text}
                            </TextIcon>
                        ))}
                    </VStack>
                </HStack>
            </Section>
            <Section title="My projects" className={`bg-${colors.header}`}>
                <HStack className={`bg-${colors.header} flex-wrap w-[min(80rem,85vw)] mb-10`} justify="center">
                    {projects.map((project: IProject, index: number) => (
                        <Project
                            project={project}
                            key={index}
                        />
                    ))}
                </HStack>
            </Section>
        </VStack>
    )
}
