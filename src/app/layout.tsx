import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata & any = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  other: {
    'apple-itunes-app': 'app-id=1529224299, app-argument=https://apps.apple.com/ru/app/spectrumdata/id1529224299',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_URL} />
        {/* <link rel="manifest" href="./manifest.webmanifest" /> */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
