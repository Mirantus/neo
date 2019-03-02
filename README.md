```
mkdir neo.local && cd neo.local
npm init && touch .gitignore
npm i -D webpack && touch webpack.config.js
// add entry to webpack config
touch src/index.tsx
npm i -D typescript ts-loader && tsc --init
// add ts-loader to webpack config
npm i react react-dom 
npm i -D @types/react @types/react-dom 
```