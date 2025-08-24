import { getPage } from '../../../lib/payload'
import { notFound } from 'next/navigation'
import { Page } from '@/payload-types'
import { Blocks } from '../../../components/Blocks'

type MetaDataProps = {
  params: Promise<{ locale: string, slug: string[] }>
}

export async function generateMetadata({ params }: MetaDataProps) {
  const slug = (await params).slug?.join('/') || 'home'
  const page: Page | null = await getPage(slug, (await params).locale)

  if (!page) {
    return {}
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription,
  }
}

export default async function PageRenderer({ params }: MetaDataProps) {
  const slug = (await params).slug?.join('/') || 'home'
  const page = await getPage(slug, (await params).locale)

  if (!page) {
    return notFound()
  }

  return <Blocks blocks={page.layout} />
}
