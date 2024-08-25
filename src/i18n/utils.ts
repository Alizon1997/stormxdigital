import en from './en.json';
import it from './it.json';

const languages = {
  en,
  it
} as const;

type Languages = typeof languages;
type LanguageKey = keyof Languages;

type NestedKeys<T> = T extends object
  ? { [K in keyof T]: K extends string ? `${K}` | `${K}.${NestedKeys<T[K]>}` : never }[keyof T]
  : never;

type TranslationKey = NestedKeys<(typeof languages)['en']>;

export function useTranslations(lang: LanguageKey) {
  return function t(key: TranslationKey): string {
    return key.split('.').reduce((o, i) => {
      if (o && typeof o === 'object' && i in o) {
        return (o as any)[i];
      }
      return key; // Return the key if the translation is missing
    }, languages[lang] as any);
  }
}