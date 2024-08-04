import ar from '~/locales/ar.json'
import en from '~/locales/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ar,
  },
}))