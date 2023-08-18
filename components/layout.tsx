import { Inter } from 'next/font/google'
import { Providers } from "../app/providers";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en" className={inter.className}>
      <div>
        <Providers>
          {children}
        </Providers>
      </div>
    </div>
  )
}
