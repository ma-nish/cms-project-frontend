'use client'

import { usePathname, useRouter } from 'next/navigation'

const locales = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.substring(3)}`
    router.push(newPath)
  }

  const currentLocale = pathname.split('/')[1]

  return (
    <div className="relative">
      <select
        onChange={(e) => handleLocaleChange(e.target.value)}
        value={currentLocale}
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>
    </div>
  )
}
