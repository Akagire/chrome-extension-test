# Chrome Extension React

### 準備

#### 1. React, Webpack, Babel, TypeScript のインストール

```sh
# dependencies
yarn add react react-dom --exact

# devDependencies
yarn add -D webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader typescript ts-loader @types/react @types/react-dom --exact
```

#### 2. Webpack と `tsconfig.json` の設定

```sh
touch webpack.config.js
# 詳細はファイルを見てください

yarn tsc --init
# 詳細はファイルを見てください
```
