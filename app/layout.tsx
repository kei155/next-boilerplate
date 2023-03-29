import ReactQueryProvider from '@/providers/ReactQuery'
import ToastProvider from '@/providers/Toaster'
import { Nanum_Gothic } from 'next/font/google'
import './globals.scss'

const nanumGothic = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700', '800'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nanumGothic.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <ToastProvider></ToastProvider>
      </body>
    </html>
  )
}
