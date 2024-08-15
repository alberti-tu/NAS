'use client'

import * as React from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { selectSettingsLanguage, setLanguage } from '@/data/settings'
import { persistor, store, useAppDispatch, useAppSelector } from '@/services/store'
import { getLanguages } from '@/services/translation'

import '../services/translation'
import '../styles/styles.scss'

type IProps = Readonly<{ children: React.ReactNode }>

function Main({ children }: IProps) {
  const dispatch = useAppDispatch()

  const userLanguage = useAppSelector(selectSettingsLanguage)

  React.useEffect(() => {
    const language = userLanguage || navigator.languages
      .map(item => item.split('-')[0])
      .find(item => getLanguages().includes(item))
    dispatch(setLanguage(language))
  },[dispatch, userLanguage])

  return children
}

const RootLayout = ({ children }: IProps) => (
  <html lang="en">
    <head>
      <title>NAS</title>
    </head>
    <body>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Main>{children}</Main>
        </Provider>
      </PersistGate>
    </body>
  </html>
)

export default RootLayout
