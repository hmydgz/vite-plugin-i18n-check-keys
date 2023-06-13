import type { Plugin } from 'vite';
import type { I18nCheckKeysOptions } from 'i18n-check-keys';
export declare function checkI18nKeys(options?: I18nCheckKeysOptions & {
    checkPath?: string;
}): Plugin;
