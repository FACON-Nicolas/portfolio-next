import Image from "next/image";

export const SkillLogo = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <Image
            src={src}
            alt={alt}
            className={className}
            width={64}
        />
    )
}