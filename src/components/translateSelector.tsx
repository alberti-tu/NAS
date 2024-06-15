'use client'

import * as React from 'react'

import { getCurrentLanguage, getLanguages, setCurrentLanguage } from '@/services/translation'
import { useTranslation } from 'react-i18next'

const TranslateSelector = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="translate_container">
      {getLanguages().map((item, index) => (
        <div
          key={index}
          className={`translate_item ${item === getCurrentLanguage() && 'selected'}`}
          onClick={() => setCurrentLanguage(item)}
        >
          {t(`languages.${item}`, item)}
        </div>
      ))}
    </div>
  )
}

export default TranslateSelector
