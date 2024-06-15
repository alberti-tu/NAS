'use client'

import * as React from 'react'

import { setCurrentLanguage } from '../services/translation'

import '../services/translation'
import '../styles/styles.scss'

type IProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: IProps) {
  React.useEffect(() => {
    let result = false
    navigator.languages.forEach(item => {
      if (!result) {
        result = setCurrentLanguage(item)
      }
    })
  },[])

  return (
    <html lang="en">
      <head>
        <title>NAS</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
