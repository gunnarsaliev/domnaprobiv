import React from 'react'
import './styles.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Navbar1 } from '@/components/shadcn-blocks/navbar1'
import { Footer7 } from '@/components/shadcn-blocks/footer7'

export const metadata = {
  title: 'Църква „Дом на пробив“ Русе',
  description: 'Да издигаме името на Исус в цялата прелест на Неговата личност и съвършенството.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="bg" suppressHydrationWarning className="dark">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar1 />
          <main>{children}</main>

          <Footer7 />
        </ThemeProvider>
      </body>
    </html>
  )
}
