# vite-plugin-i18n-check-keys

[English](./README.md) | 简体中文

[![npm](https://img.shields.io/npm/v/vite-plugin-i18n-check-keys.svg)](https://github.com/hmydgz/vite-plugin-i18n-check-keys) [![npm](https://img.shields.io/npm/dt/vite-plugin-i18n-check-keys.svg)](https://github.com/hmydgz/vite-plugin-i18n-check-keys) [![build status](https://github.com/hmydgz/vite-plugin-i18n-check-keys/actions/workflows/build.action.yml/badge.svg?branch=main)](https://github.com/hmydgz/vite-plugin-i18n-check-keys/actions)

用于国际化键检查的 Vite 插件

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
该插件为 `i18n-check-keys` 的封装，具体配置请查看原文档

[Document](https://github.com/heimeiyaodagongzai/i18n-check-keys#options)