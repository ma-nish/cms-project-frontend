import PageRenderer from './[...slug]/page'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const modifiedParams = { ...resolvedParams, slug: ['home'] }
  return PageRenderer({ params: modifiedParams })
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const resolvedParams = await params;

    return {
        title: `Homepage | ${resolvedParams.locale} My Awesome Site`,
        description: 'Welcome to the homepage.'
    }
}
