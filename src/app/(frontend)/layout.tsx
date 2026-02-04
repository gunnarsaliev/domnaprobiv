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
          <Navbar22 />
          <main>{children}</main>
          <Footer30 />
        </ThemeProvider>
      </body>
    </html>
  )
}
