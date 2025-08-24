import Link from 'next/link'

type CtaProps = CtaBlock
type CtaBlock = {
  headline: string
  subtext?: string
  buttonLabel: string
  buttonUrl: string
}

export const Cta = ({ headline, subtext, buttonLabel, buttonUrl }: CtaProps) => {
  return (
    <section className="bg-blue-600">
      <div className="container mx-auto px-4 py-16 text-center sm:py-20">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          {headline}
        </h2>
        {subtext && <p className="mt-4 text-lg leading-6 text-blue-100">{subtext}</p>}
        <Link
          href={buttonUrl}
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-blue-700 shadow-md hover:bg-blue-50 sm:w-auto"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}