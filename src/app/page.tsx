import {Header, HStack, Section, Text, VStack} from "@/components";
import Image from "next/image";
import {colors} from "@/constants";
import {presentationTexts} from "@/data";

export default function Home() {
    return (
        <VStack items="center" width="screen" spacing="10">
            <Header />
            <Section title="Who Am I ?">
                <HStack className="w-[min(100rem,80vw)] flex-wrap" justify="around" items="center">
                    <Image
                        className="rounded-full lg:w-[45%] aspect-square w-[80vw]"
                        src={require('../assets/images/profile.jpeg')}
                        alt={"It's my avatar"}
                    />
                    <VStack className="lg:w-[45%] w-[80vw] gap-5">
                        {presentationTexts.map((text: string, index: number) => (
                            <Text key={index} className="leading-8 text-lg">{text}</Text>
                        ))}
                    </VStack>
                </HStack>
            </Section>
        </VStack>
    )
}
