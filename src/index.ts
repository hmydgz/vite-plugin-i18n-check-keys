import type { Plugin } from 'vite'
import { checkI18nKeys as check } from 'i18n-check-keys'

export default function checkI18nKeys(options: Parameters<typeof check>[0] & { checkPath?: string } = {}) {
  const { run } = check(options)
  const checkPath = options.checkPath || process.cwd()

  return <Plugin>{
    name: 'vite-plugin-i18n-check-keys',
    buildStart() {
      run(checkPath)
    },
  }
}