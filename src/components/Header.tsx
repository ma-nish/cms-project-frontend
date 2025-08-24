'use client'
import Link from 'next/link'
import { Header as HeaderType } from '@/payload-types'
import { LanguageSwitcher } from './LanguageSwitcher'

type HeaderProps = Pick<HeaderType, 'navItems'>

export const Header = ({ navItems }: HeaderProps) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Logo
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems?.map((item: { label: string; url: string; id?: string | null | undefined }, index: number) => (
            <Link key={index} href={item.url} className="text-gray-600 hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
            <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
