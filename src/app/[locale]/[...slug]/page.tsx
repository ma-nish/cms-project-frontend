import { getPage } from '../../../lib/payload'
import { notFound } from 'next/navigation'
import { Page } from '@/payload-types'
import { Blocks } from '../../../components/Blocks'

export async function generateMetadata({ params }: { params: { slug: string[], locale: string } }) {
  const slug = params.slug?.join('/') || 'home'
  const page: Page | null = await getPage(slug, params.locale)

  if (!page) {
    return {}
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
  }
}

export default async function PageRenderer({ params }: { params: { slug: string[], locale: string } }) {
  const slug = params.slug?.join('/') || 'home'
  const page = await getPage(slug, params.locale)

  if (!page) {
    return notFound()
  }

  return <Blocks blocks={page.layout} />
}
