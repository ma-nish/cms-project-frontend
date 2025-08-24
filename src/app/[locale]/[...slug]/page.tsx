import { getPage } from '@/lib/payload'
import { notFound } from 'next/navigation'
import { Blocks } from '@/components/Blocks'
import { Page } from '@/payload-types'

export async function generateMetadata({ params }: { params: { slug: string[], locale: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || 'home'
  const page: Page | null = await getPage(slug, resolvedParams.locale)

  if (!page) {
    return {}
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
  }
}

export default async function PageRenderer({ params }: { params: { slug: string[], locale: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || 'home'
  const page = await getPage(slug, resolvedParams.locale)

  if (!page) {
    return notFound()
  }

  return <Blocks blocks={page.layout} />
}
