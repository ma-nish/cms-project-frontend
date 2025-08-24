import { Media } from '@/payload-types'
import Image from 'next/image'
import { Zap } from 'lucide-react'

type FeaturesProps = FeatureBlock
type FeatureBlock = {
  headline: string
  featureList: {
    title: string
    description: string
    icon?: Media | null
  }[]
}

export const Features = ({ headline, featureList }: FeaturesProps) => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {headline}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature, index) => {
            // Type assertion to access Media properties safely
            const icon = feature.icon as Media
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                      {icon?.url ? (
                        <Image src={icon.url} alt={icon.alt} width={32} height={32} />
                      ) : (
                        <Zap className="h-6 w-6" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}