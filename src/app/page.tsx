import {HStack, Section, VStack, TextIcon, CardSection} from "@/components";
import Image from "next/image";
import {presentationTexts, projects, Presentation, hobbies, skillTypes, jobs} from "@/data";
import {colors} from "@/constants";

export default function Home() {
    return (
        <VStack items="center" width="screen" className="bg-dark">
            <Section title="Who Am I ?">
                <HStack className="w-70-rem-80-percent flex-wrap" justify="around" items="center">
                    <Image
                        className="rounded-full w-profile-pic aspect-square"
                        src={require('../assets/images/profile.jpeg')}
                        alt="It's my avatar"
                    />
                    <VStack className="w-profile-pic gap-5">
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
