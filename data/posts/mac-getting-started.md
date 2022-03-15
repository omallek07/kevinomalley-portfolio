---
title: "New Macbook Setup"
date: "2022-01-11"
shortDescription: "Describing how I setup a new laptop enviroment"
imgUrl: "/static/kevinLaptop.jpg"
---

I recently upgraded to the 2021 Macbook Pro and wanted to share my initial steps to getting it setup for development.

1. Install iTerm2
   - [https://iterm2.com](https://iterm2.com)
   - Set up a hotkey to toggle iTerm window [View comments](https://apple.stackexchange.com/questions/48796/iterm-as-a-slide-out-terminal-from-the-top-of-the-screen)
   - I have it set up where I can hit Control twice and a terminal window will appear at the top of screen.
2. Install Homebrew
   - [https://brew.sh](https://brew.sh)
   - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
3. Set up Oh-my-zsh
   - [https://ohmyz.sh](https://ohmyz.sh)
4. Install VSCode
   - [https://code.visualstudio.com](https://code.visualstudio.com)
   - Enable shell command to open files with $ code [https://code.visualstudio.com/docs/setup/mac](https://code.visualstudio.com/docs/setup/mac)
   - My VSCode Themes:
     - [One Monokai](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai)
     - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
   - Extensions:
     - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
     - [Prettier ESLint to tie them together](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
     - [React Code Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
     - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
5. Install Git
   - [https://git-scm.com](https://git-scm.com)
6. Install Node.js
   - [https://nodejs.org/en/](https://nodejs.org/en/)
7. For my personal projects, I created a 'Code' directory
   - $ chown -R $USER <directory>
   - This will remove the sudo requirements for local npm installs for all projects within the directory

Macbook Apps

1. [Alfred](https://www.alfredapp.com)
2. [AltTab](https://alt-tab-macos.netlify.app)
3. [Magnet](https://magnet.crowdcafe.com)
