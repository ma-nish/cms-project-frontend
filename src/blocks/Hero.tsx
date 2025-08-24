import Link from 'next/link'
import { Media } from '@/payload-types'

type HeroProps = HeroBlock
type HeroBlock = {
  headline: string
  subtext?: string
  backgroundImage: Media | null
  ctaButton?: {
    label: string
    url: string
  }
}

export const Hero = ({ headline, subtext, backgroundImage, ctaButton }: HeroProps) => {
  const imageUrl = (backgroundImage as Media)?.url

  return (
    <div
      className="relative bg-cover bg-center text-white py-32 px-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">{headline}</h1>
        {subtext && <p className="text-xl mb-8">{subtext}</p>}
        {ctaButton && (
          <Link
            href={ctaButton.url}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            {ctaButton.label}
          </Link>
        )}
      </div>
    </div>
  )
}