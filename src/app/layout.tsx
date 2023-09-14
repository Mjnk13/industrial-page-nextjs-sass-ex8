import type { Metadata } from 'next'

import { ThemeProvider} from '@mui/material'
import theme from '@/mui_theme/theme'
import NavBar from './_component/navbar/NavBar'
import Footer from './_component/footer/Footer'

export const metadata: Metadata = {
  title: 'Industrial',
  description: 'Nextjs + MUI + SASS + CSS BEM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{margin: 0}}>
        <ThemeProvider theme={theme}>
          <header>
            <NavBar/>
          </header>
          {children}
          <footer>
            <Footer/>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}