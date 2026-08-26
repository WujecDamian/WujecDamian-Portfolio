import { createContext } from 'react'
import type { Translation } from './en'
import type { Locale } from './types'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
