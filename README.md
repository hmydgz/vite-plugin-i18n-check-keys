# vite-plugin-i18n-check-keys

English | [简体中文](./README.zh_CN.md)

用于检查项目中的国际化 key 是否存在遗漏的工具

![](http://qiniuyun.hmydgz.top/doc/img/i18n-check-keys-img1.png)

# Install
```bash
npm i vite-plugin-i18n-check-keys -D
# or
yarn add vite-plugin-i18n-check-keys -D
# or
pnpm add vite-plugin-i18n-check-keys -D
```

# Usage
```js
import { defineConfig } from 'vite'
import { checkI18nKeys } from 'vite-plugin-i18n-check-keys'

export default defineConfig({
  plugins: [
    checkI18nKeys({
      fileType: 'ts',
      needStopRun: process.env.NODE_ENV === 'production',
    }),
  ],
})
```

# Options

This plugin is a package of `i18n-check-keys`, please refer to the original document for specific configuration
[Document](https://github.com/heimeiyaodagongzai/i18n-check-keys#options)