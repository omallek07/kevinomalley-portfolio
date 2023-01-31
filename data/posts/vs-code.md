---
title: 'VSCode User Snippets'
date: '2022-03-26'
shortDescription: 'Sharing user code snippets I use regularly in VSCode.'
imgUrl: '/static/VSCode.png'
---

#### A small and simple post but hopefully helpful to any developers :)

I am listing out my VSCode javascript user snippets that I use on a daily basis. These allow me to be extra lazy / resourceful in having to only type in a few key letters in order to create a fully typed out function or import statement, etc.

I can also tab through these snippets and fill out code in the specified spots that I want (see $1, $2, etc. This tells the snippets where to place the order of tabs)

To open / create user snippets - hit `Shift + Cmd + P` and type in User Snippets.
Open up 'Preferences: Configure User Snippets' and create a new snippets file. (Mine is named global_javascript_snippets)

## User Snippets

```
  "Console.log Basic": {
    "scope": "javascript,typescript",
    "prefix": "lg",
    "body": ["console.log('$1');"],
    "description": "Basic console log"
  },
  "Console.log with string and variable": {
    "scope": "javascript,typescript",
    "prefix": "log",
    "body": ["console.log('$1', $2);", "$3"],
    "description": "Console.log item with a unique string and unique variable."
  },
  "Console.log with matching string and variable": {
    "scope": "javascript,typescript",
    "prefix": "rlog",
    "body": ["console.log('$1', $1);", "$2"],
    "description": "Console.log item with string of exact name in front."
  },
  "ES6 Module Import": {
    "scope": "javascript,typescript",
    "prefix": "imf",
    "body": ["import { $1 } from './$2';"],
    "description": "ES6 Import"
  },
  "ES6 Default Module Import": {
    "scope": "javascript,typescript",
    "prefix": "ifmd",
    "body": ["import $1 from './$2';"],
    "description": "ES6 Deafulat Import"
  },
  "CommonJS Module Require": {
    "scope": "javascript,typescript",
    "prefix": "mr",
    "body": ["const $1 = require('./$2');"],
    "description": "CommonJS Require"
  },
  "CommonJS Module Export": {
    "scope": "javascript,typescript",
    "prefix": "me",
    "body": ["module.exports = { $1 : $2 };"],
    "description": "CommonJS Export"
  },
  "CommonJS Default Module Export": {
    "scope": "javascript,typescript",
    "prefix": "med",
    "body": ["module.exports = $1;"],
    "description": "Default CommonJS Export"
  },
  "New Object Literal": {
    "scope": "javascript,typescript",
    "prefix": "ol",
    "body": ["const $1 = {\n\t$2 : $3, \n};"],
    "description": "Object Literal"
  },
  "Callback Function": {
    "scope": "javascript,typescript",
    "prefix": "cb",
    "body": ["$1($2, ($3) => {\n\t$4 \n});"],
    "description": "Object Literal"
  },
  "JS Declaration Function": {
    "scope": "javascript,typescript",
    "prefix": "fc",
    "body": ["function $1($2) {\n\t$3 \n}"],
    "description": "Function declaration"
  },
  "Export Default JS Declaration Function": {
    "scope": "javascript,typescript",
    "prefix": "edf",
    "body": ["export default function $1($2) {\n\t$3 \n}"],
    "description": "Export Defauly Function declaration"
  },
  "Async JS Declaration Function": {
    "scope": "javascript,typescript",
    "prefix": "afc",
    "body": ["async function $1($2) {\n\t$3 \n}"],
    "description": "Async function declaration"
  },
  "JS Arrow Function": {
    "scope": "javascript,typescript",
    "prefix": "fca",
    "body": ["const $1 = ($2) => {\n\t$3 \n};"],
    "description": "Arrow function"
  },
  "Async JS Arrow Function": {
    "scope": "javascript,typescript",
    "prefix": "afca",
    "body": ["const $1 = async ($2) => {\n\t$3 \n};"],
    "description": "Async arrow function"
  },
  "Styles Container": {
    "scope": "javascript,typescript",
    "prefix": "cs",
    "body": ["className={styles.$1}$2"],
    "description": "Automatically add styles object for classNames for Next.js"
  }
}
```
