```
mkdir neo.local && cd neo.local
npm init && touch .gitignore
npm i webpack -D && touch webpack.config.js
// add entry to webpack config
touch src/index.tsx
npm i typescript -D && npm i ts-loader -D && tsc --init
// add ts-loader to webpack config
```