import Image from "next/image"

interface Props{
    icon: string
    size?: number
    className?: string
    alt: string
}

export default function Icon({
    icon,
    size = 16,
    className,
    alt,
} : Props) {
    return (
        <Image src={`/_next/static/media/${icon}.svg`} alt={alt} width={size} height={size} className={className} />
    )
}