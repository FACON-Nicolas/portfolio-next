import {HStack, Section, VStack, TextIcon, CardSection} from "@/components";
import Image from "next/image";
import {presentationTexts, projects, Presentation, hobbies, skillTypes, jobs} from "@/data";
import {colors} from "@/constants";

export default function Home() {
    return (
        <VStack items="center" width="screen" className={`bg-[#151515]`}>
            <Section title="Who Am I ?">
                <HStack className="w-[min(70rem,80vw)] flex-wrap" justify="around" items="center">
                    <Image
                        className="rounded-full lg:w-[min(45%,35rem)] aspect-square w-[80vw]"
                        src={require('../assets/images/profile.jpeg')}
                        alt="It's my avatar"
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
            <CardSection title="My projects" className="bg-blue-900" elements={projects} />
            <CardSection title="My hobbies" elements={hobbies} />
            <CardSection title="My skills" className="bg-blue-900" elements={skillTypes} />
            <CardSection title="My Jobs" elements={jobs} />
        </VStack>
    )
}
