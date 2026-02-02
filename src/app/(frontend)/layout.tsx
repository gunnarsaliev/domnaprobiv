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
    <html lang="bg" suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  const stored = localStorage.getItem('theme');
                  if (stored) {
                    return stored;
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                
                const theme = getThemePreference();
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
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
