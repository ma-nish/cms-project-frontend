import Link from 'next/link'
import { Footer as FooterType } from '@/payload-types'

type FooterProps = Pick<FooterType, 'copyright' | 'navItems'>

export const Footer = ({ copyright, navItems }: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">{copyright}</p>
          <div className="flex space-x-6">
            {navItems?.map((item: { label: string; url: string }, index: number) => (
              <Link key={index} href={item.url} className="hover:text-blue-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
