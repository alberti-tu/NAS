import type { Metadata } from 'next'

import '../styles/styles.scss'

export const metadata: Metadata = {
  title: 'NAS',
  description: 'Landing page of NAS services',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    }
  ]
}

type IProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
