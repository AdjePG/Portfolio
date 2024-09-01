import es from '@/i18n/es.json'
import ca from '@/i18n/ca.json'
import en from '@/i18n/en.json'
import type { Translations } from '@/others/types'

const LANGUAGES = {
    SPANISH: 'es',
    CATALAN: 'ca',
    ENGLISH: 'en'
}

export const getTranslations = (language : string) : Translations => {
    if (language === LANGUAGES.SPANISH) return es
    if (language === LANGUAGES.CATALAN) return ca
    if (language === LANGUAGES.ENGLISH) return en

    return es
}