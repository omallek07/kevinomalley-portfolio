---
title: "VSCode User Snippets"
date: "2022-03-26"
shortDescription: "Sharing user code snippets I use regularly in VSCode."
imgUrl: "/static/VSCode.png"
---

#### A small and simple post but hopefully helpful to any developers :)

I am listing out my VSCode javascript user snippets that I use on a daily basis. These allow me to be extra lazy / resourceful in having to only type in a few key letters in order to create a fully typed out function or import statement, etc.

I can also tab through these snippets and fill out code in the specified spots that I want (see $1, $2, etc. This tells the snippets where to place the order of tabs)

To open / create user snippets - hit `Shift + Cmd + P` and type in User Snippets.
Open up 'Preferences: Configure User Snippets' and create a new snippets file. (Mine is named global_javascript_snippets)

## User Snippets

```
{
 "Print to console": {
    "scope": "javascript,typescript",
    "prefix": "log",
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
    "description": "ES6 Default Import"
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
    "body": ["const $1 = { $2 : $3, };"],
    "description": "Object Literal"
  },
  "JS Declaration Function": {
    "scope": "javascript,typescript",
    "prefix": "fc",
    "body": ["function $1($2) { $3 }"],
    "description": "Function declaration"
  },
  "Async JS Declaration Function": {
    "scope": "javascript,typescript",
    "prefix": "afc",
    "body": ["async function $1($2) { const $3 = await $4; }"],
    "description": "Async function declaration"
  },
  "JS Arrow Function": {
    "scope": "javascript,typescript",
    "prefix": "fca",
    "body": ["const $1 = (($2) => { $3 };"],
    "description": "Arrow function"
  },
  "Async JS Arrow Function": {
    "scope": "javascript,typescript",
    "prefix": "afca",
    "body": ["const $1 = (async($2) => { const $3 = await $4; };"],
    "description": "Async arrow function"
  }
}
```