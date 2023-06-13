import type { Plugin } from 'vite'
import type { I18nCheckKeysOptions } from 'i18n-check-keys'
import { checkI18nKeys as check } from 'i18n-check-keys'

export function checkI18nKeys(options: I18nCheckKeysOptions & { checkPath?: string } = {}) {
  const { run } = check(options)
  const checkPath = options.checkPath || process.cwd()

  return <Plugin>{
    name: 'vite-plugin-i18n-check-keys',
    buildStart() {
      run(checkPath)
    },
  }
}