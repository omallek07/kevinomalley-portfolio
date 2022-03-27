---
title: "VSCode"
date: "2022-03-27"
shortDescription: "Sharing the snippets and key shortcuts that I use in VSCode"
imgUrl: "/static/VSCode.png"
---

#### A small and simple post but hopefully helpful to any developers :)

I am listing out my VSCode javascript user snippets that I use on a daily basis. These allow me to be extra lazy / resourceful in having to only type in a few key letters in order to create a fully typed out function or import statement, etc.

I can also tab through these snippets and fill out code in the specified spots that I want (see $1, $2, etc. This tells the snippets where to place the order of tabs)

To open / create user snippets - hit `Shift Cmd P` and type in User Snippets.
Open up 'Preferences: Configure User Snippets' and create a new snippets file. (Mine is named global_javascript_snippets;)

I am also listing out some useful key shortcuts that I use as well. These help a ton with navigating through my projects.

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

## Useful VSCode Key Shortcuts

(Up and Down, Left and Right mean the corresponding arrow keys, just a fyi)

### File Navigation

`Shift Command E`

- Open file explorer sidebar

`Shift B`

- Toggle view of sidebar

`Option Command Left` or `Option Command Right`

- Navigate between opened files in tab

`Cmd P`

- Search Files By Name.

- Hold Cmd and keep tapping P to navigate through files. Double tap P to go back to previously opened file.

`Ctrl Tab`

- Another way to tab through opened files. Also easy to quickly switch between two files.

`Ctrl -` or `Ctrl Shift -`

- Navigate between files and land right where the edit cursor was last placed.
- This is super useful for switching between files and jumping straight into your code.

`Command \`

- Split opened file into side-by-side editing

`Command W`

- Close active window

### Code Navigation

`Command Up`

- Go to top of file

`Command Down`

- Go to bottom of file

`Control G`

- Navigate to a specific line in code

`Command D`

- Select a word and then select all matching words below line (keep tapping D)

`Shift Command O`

- Navigate to a symbol within your code (symbols include variables, function names, etc)

`Option Command Up` or `Option Command Down`

- Duplicate cursor to above or below lines

`Option Up` or `Option Down`

- Move selected line up or down

`Shift Command Up` or `Shift Command Down`

- Copy existing line to above or below line

`Shift Command Enter`

- Move cursor to new line above

`Command Enter`

- Move cursor to new line below

`Shift Command \`

- Hover on opening brack and use this command to automatically navigate to closing bracket in code.

`Shift Command K`

- Delete entire line
