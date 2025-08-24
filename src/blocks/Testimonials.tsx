type TestimonialsProps = TestimonialBlock
type TestimonialBlock = {
  headline: string
  quotes: {
    quote: string,
    author: string,
    company?: string
  }[]
}

export const Testimonials = ({ headline, quotes }: TestimonialsProps) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {headline}
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((item, index) => (
            <figure key={index} className="rounded-lg bg-gray-50 p-8 shadow-sm">
              <blockquote className="text-lg leading-7 text-gray-700">
                <p>“{item.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold text-gray-900">{item.author}</div>
                  {item.company && <div className="text-gray-600">{item.company}</div>}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}