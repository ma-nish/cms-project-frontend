import PageRenderer from "./[...slug]/page"

type MetaDataProps = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: MetaDataProps) {
  const modifiedParams = { ...params, locale: (await params).locale, slug: ['home'] }
  return PageRenderer({ params: modifiedParams })
}

export async function generateMetadata({ params }: MetaDataProps) {
    return {
        title: `Homepage | ${(await (params)).locale} My Awesome Site`,
        description: 'Welcome to the homepage.'
    }
}
