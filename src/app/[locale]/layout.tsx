import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { getGlobals } from '../../lib/payload'
import { Header as HeaderType, Footer as FooterType } from '@/payload-types'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { header, footer } = (await getGlobals((await params).locale)) as {
    header: HeaderType
    footer: FooterType
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={header.navItems} />
      <main className="flex-grow">{children}</main>
      <Footer copyright={footer.copyright} navItems={footer.navItems} />
    </div>
  )
}
