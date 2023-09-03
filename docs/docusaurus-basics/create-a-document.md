---
sidebar_position: 1
---

# Create a Document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```

## Настройки

### Примеры файлов настроек

- Сайт [hydra.cc](https://hydra.cc/)
  - файл [docusaurus.config.js](https://github.com/facebookresearch/hydra/blob/main/website/docusaurus.config.js)

- Проект [docusaurus](https://docusaurus.io/)
  - файл [docusaurus.config.js](https://github.com/facebook/docusaurus/blob/main/website/docusaurus.config.js)

- Проект [venom](https://docs.venom.foundation/) 
  - файл [docusaurus.config.js](https://github.com/venom-blockchain/venom-blockchain.github.io/blob/main/docusaurus.config.js)
  
- Проект [lazyvim](https://www.lazyvim.org/) 
  - файл - [docusaurus.config.js](https://github.com/LazyVim/lazyvim.github.io/blob/main/docusaurus.config.js)
  

- [Блоки кода](https://docusaurus.io/docs/markdown-features/code-blocks)


## Ссылки

- Настройки [документа](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs) официальная инструкция.
