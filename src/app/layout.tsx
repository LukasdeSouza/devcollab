import { NavigationMenuDemo } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projetos Reais para Devs Reais',
  description: 'Projetos Reais para Devs Reais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NavigationMenuDemo />
        {children}
      </body>
    </html>
  )
}
