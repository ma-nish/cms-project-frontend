import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'es']
const defaultLocale = 'en'

export default function RootPage() {
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language')

  let locale = defaultLocale
  if (acceptLanguage) {
    const negotiatorHeaders = { 'accept-language': acceptLanguage }
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    try {
      locale = match(languages, locales, defaultLocale)
    } catch (e) {
      console.warn("Could not match locale, falling back to default.");
    }
  }

  redirect(`/${locale}`)
}
