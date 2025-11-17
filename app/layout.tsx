import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'RakshaSetu - Smart Tourist Safety System',
  description: 'Powered by GISP (Geo-Intelligent Shield Protocol)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#001F3F',
              color: '#F1FAEE',
            },
            success: {
              iconTheme: {
                primary: '#14B8A6',
                secondary: '#F1FAEE',
              },
            },
            error: {
              iconTheme: {
                primary: '#E63946',
                secondary: '#F1FAEE',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
