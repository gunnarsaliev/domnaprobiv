import React from 'react'
import './styles.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Navbar22 } from '@/components/navbar22'
import { Footer30 } from '@/components/footer30'

export const metadata = {
  title: 'Църква „Дом на пробив“ Русе',
  description: 'Да издигаме името на Исус в цялата прелест на Неговата личност и съвършенството.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="bg" suppressHydrationWarning>
      <head>
        <script src="/scripts/theme-init.js" suppressHydrationWarning />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar22 />
          <main>{children}</main>
          <Footer30 />
        </ThemeProvider>
      </body>
    </html>
  )
}
