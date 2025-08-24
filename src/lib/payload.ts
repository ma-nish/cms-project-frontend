import { Page, Product } from '@/payload-types'

const API_URL = process.env.PAYLOAD_API_URL

async function fetchAPI<T>(query: string): Promise<T> {
  const res = await fetch(`${API_URL}/api${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store', // Disable cache for development, consider revalidating for production
  })

  if (!res.ok) {
    console.error(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  return json
}

export async function getPage(slug: string, locale: string): Promise<Page | null> {
  const data = await fetchAPI<{ docs: Page[] }>(
    `/pages?where[slug][equals]=${slug}&locale=${locale}&depth=2`
  )
  return data.docs[0] || null
}

export async function getProduct(slug: string, locale: string): Promise<Product | null> {
    const data = await fetchAPI<{ docs: Product[] }>(
      `/products?where[slug][equals]=${slug}&locale=${locale}&depth=1`
    )
    return data.docs[0] || null
}

export async function getGlobals(locale: string) {
    const header = await fetchAPI(`/globals/header?locale=${locale}&depth=1`);
    const footer = await fetchAPI(`/globals/footer?locale=${locale}&depth=1`);
    return { header, footer };
}