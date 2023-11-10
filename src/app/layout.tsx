import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const font = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Cass.sh',
  description: 'João Pedro Arruda portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} h-full w-full bg-black-pallete antialiased text-red-pallete`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
