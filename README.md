# vite-plugin-i18n-check-keys

English | [简体中文](./README.zh_CN.md)

[![npm](https://img.shields.io/npm/v/vite-plugin-i18n-check-keys.svg)](https://github.com/hmydgz/vite-plugin-i18n-check-keys) [![npm](https://img.shields.io/npm/dt/vite-plugin-i18n-check-keys.svg)](https://github.com/hmydgz/vite-plugin-i18n-check-keys) [![build status](https://github.com/hmydgz/vite-plugin-i18n-check-keys/actions/workflows/build.action.yml/badge.svg?branch=main)](https://github.com/hmydgz/vite-plugin-i18n-check-keys/actions)

Vite plugin for internationalization key checking

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
import checkI18nKeys from 'vite-plugin-i18n-check-keys'

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
[Document](https://github.com/hmydgz/i18n-check-keys#options)