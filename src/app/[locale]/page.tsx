import PageRenderer from "./[...slug]/page"

export default function HomePage({ params }: { params: { locale: string } }) {
  const modifiedParams = { ...params, slug: ['home'] }
  return PageRenderer({ params: modifiedParams })
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    return {
        title: `Homepage | ${locale} My Awesome Site`,
        description: 'Welcome to the homepage.'
    }
}
