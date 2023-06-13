import { checkI18nKeys as checkI18nKeys$1 } from 'i18n-check-keys';

function checkI18nKeys(options = {}) {
    const { run } = checkI18nKeys$1(options);
    const checkPath = options.checkPath || process.cwd();
    return {
        name: 'vite-plugin-i18n-check-keys',
        buildStart() {
            run(checkPath);
        },
    };
}

export { checkI18nKeys };
