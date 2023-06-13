# vite-plugin-i18n-check-keys

[English](./README.md) | 简体中文

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