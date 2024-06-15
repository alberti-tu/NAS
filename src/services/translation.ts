import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import de from '../../public/i18n/de.json'
import en from '../../public/i18n/en.json'
import es from '../../public/i18n/es.json'
import fr from '../../public/i18n/fr.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
}

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources,
  })

export function getLanguages() {
  return Object.keys(resources)
}

export function getCurrentLanguage() {
  return i18n.language
}

export function setCurrentLanguage(language: string) {
  language = language.split('-')[0]

  if (!getLanguages().includes(language)) {
    return false
  }

  i18n.changeLanguage(language)
  return true
}

export default i18n