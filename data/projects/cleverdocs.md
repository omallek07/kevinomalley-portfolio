---
title: "Gatsby.js Documentation Tool"
date: "2019-11-11"
shortDescription: "GUI that creates and stores documentation. Built by Gatsby.js and connects to the Gitlab API"
imgUrl: "/static/cleverdocs1.jpg"
---

# Documentation Tool

Our team had a pain point of lacking a proper source of documentation. To help solve this, I developed a GUI tool using Gatsby.js that allows my team to upload markdown text and to search and find existing documentation.

---

This tool uses [Gatsby](https://www.gatsbyjs.com), [Ant Design Library](https://ant.design/docs/react/introduce), and the Gitlab API for version control.

The server uses Node.js and Express, and is powered by PM2.

---

![Cleverdocs Page](/static/cleverdocs1.jpg)
![Cleverdocs Page](/static/cleverdocs2.JPG)

---

Through this tool, users could create or edit their own documentation using a built-in markdown editor. There is a form where they can name their new document, decide which folder to place it in (or create a new folder), add tags, and submit their name so the documentation can record who last made an edit to the file. Once they hit submit, the tool sends the markdown data to our server which then runs it through the GitLab API. This API will automatically branch off of master, make a commit with the new documentation, approve of the commit, and merge it back into master. Once master is updated, Gitlab then sends a webhook back to our cleverdoc's server that tells the server to rebuild the tool. In less then a minute, we have version control on our files and a rebuilt app that will show the new or updated documentation!

---

![Cleverdocs Page](/static/cleverdocs3.jpg)
![Cleverdocs Page](/static/cleverdocs4.JPG)

---

Users can also dynamically search through all of the markdown files using our search bar powered by Gatsby Elasticsearch.

They can also report any bug issues or make documentation requests on a Request page. This connects with the Gitlab Issues API and will generate the issues on the app page and also on the repository.

---

---

This project was a lot of fun to work on, although very challenging and took about a year and a half to finally have the MVP up and running. Of course, I had much help from my peers, and the project would have been useless without all of the hard work my peers did with adding documentation to it.

---
