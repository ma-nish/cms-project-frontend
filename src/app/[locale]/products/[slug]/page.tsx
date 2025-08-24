import { getProduct } from '@/lib/payload'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Media } from '@/payload-types'

export default async function ProductPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug, resolvedParams.locale)

  if (!product) {
    return notFound()
  }

  const { name, description, productImage } = product
  const imageUrl = (productImage as Media)?.url
  const imageAlt = (productImage as Media)?.alt

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          {imageUrl && <Image src={imageUrl} alt={imageAlt} width={600} height={600} className="rounded-lg shadow-lg"/>}
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: description as unknown as string }} />
        </div>
      </div>
    </div>
  )
}
