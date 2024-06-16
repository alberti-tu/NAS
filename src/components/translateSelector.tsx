'use client'

import * as React from 'react'

import { useTranslation } from 'react-i18next'

import { setLanguage } from '@/data/settings'
import { getCurrentLanguage, getLanguages } from '@/services/translation'
import { useAppDispatch } from '@/services/store'

const TranslateSelector = (): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  return (
    <div className="translate_container">
      {getLanguages().map((item, index) => (
        <div
          key={index}
          className={`translate_item ${item === getCurrentLanguage() && 'selected'}`}
          onClick={() => dispatch(setLanguage(item))}
        >
          {t(`languages.${item}`, item)}
        </div>
      ))}
    </div>
  )
}

export default TranslateSelector
