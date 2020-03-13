```
mkdir neo.local && cd neo.local
npm init && touch .gitignore
npm i -D webpack copy-webpack-plugin html-webpack-plugin
touch src/index.tsx
npm i -D typescript ts-loader && tsc --init
npm i react react-dom && npm i -D @types/react @types/react-dom
npm i react-router && npm i -D @types/react-router @types/history
npm i redux react-redux redux-thunk && npm i -D @types/react-redux
npm i -D redux-devtools-extension
npm i -D @types/node
npm i -g tslint && npm i -D tslint tslint-loader tslint-react
npm i prettier && npm i -D tslint-config-prettier lint-staged husky
npm i -D webpack-dev-server react-hot-loader @hot-loader/react-dom
npm i -D mini-css-extract-plugin css-loader less-loader less postcss-loader autoprefixer
npm i redux-form && npm i -D @types/redux-form
npm i -D jest ts-jest @types/jest enzyme @types/enzyme enzyme-adapter-react-16 @types/ enzyme-adapter-react-16 && identity-obj-proxy && npx ts-jest config:init
```