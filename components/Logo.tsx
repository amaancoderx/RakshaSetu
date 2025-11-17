import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = "w-14 h-14" }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/images/RakshaSetu_Logo.png"
        alt="RakshaSetu Logo"
        width={800}
        height={800}
        className="w-full h-full object-contain"
        quality={100}
        priority
      />
    </div>
  )
}
