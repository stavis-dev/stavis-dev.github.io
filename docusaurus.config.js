// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
module.exports = async function createConfigAsync() {
  return {
  title: 'Шпаргалка по знаниям',
  tagline: 'Записки о том, что я знаю.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://stavis-dev.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  baseUrl: '/',
  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stavis-dev', // Usually your GitHub org/user name.
  projectName: 'stavis-dev.github.io', // Usually your repo name.

  themes: ['@docusaurus/theme-live-codeblock'],

  // https://github.com/sgromkov/docusaurus-plugin-yandex-metrica
  // https://github.com/sgromkov/gromkov.me/blob/main/docusaurus.config.js
  plugins: [
        ['docusaurus-plugin-yandex-metrica', {
            counterID: '94461914',
        }],
        [
        'ideal-image',
        /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
        ({
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          // Use false to debug, but it incurs huge perf costs
          disableInDev: true,
        }),
      ],
    ],
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),

          // Last updated on ...
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/stavis-dev/stavis-dev.github.io/tree/main/',
        },
        // blog: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/stavis-dev/stavis-dev.github.io/tree/main/',
        },
        theme: {
          // customCss: require.resolve('./src/css/custom.css'),
          customCss: require.resolve('./src/css/custom-orig.css'),
        },
        gtag: {
          trackingID: 'G-5EZH6Q0C8W',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // Кнопка сдвигающая левый сайдбар внизу
      docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
      algolia: {
          appId: 'A4WYJ5NE7Y',
          apiKey: 'cb4b5e527ad56fad87cb1bdbd3ba2d64',
          indexName: 'stavis-devio',
        },
      navbar: {
        hideOnScroll: true,  // исчезает при прокрутке вниз
        title: 'Обо мне',
        // logo: {
        //   alt: 'Stavis logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            sidebarId: 'pythonSidebar',
            docId: 'python/readme',
            position: 'left',
            label: 'Python',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/stavis-dev',
            // label: 'GitHub',
            // label: "🐙",
            position: 'right',
            className: 'navbar-icon navbar-icon-github',
            'aria-label': 'GitHub repository',
            html: `<svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>`,

          },
          {
            href: "https://twitter.com/stavisvega",
            position: "right",
            className: 'navbar-icon navbar-icon-twitter',
            'aria-label': 'Twitter page',
            // label: "🐦",
            html: `<svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
              </path>
            </svg>`,
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/stavisvega',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      // https://docusaurus.io/docs/api/themes/configuration#codeblock-theme
      prism: {
        // theme: require('prism-react-renderer/themes/github'),
        // darkTheme: require('prism-react-renderer/themes/okaidia'),
        theme: (await import('./src/theme/prismLight.mjs')).default,
        darkTheme: (await import('./src/theme/prismDark.mjs')).default,
      },
      // prism: {
      //   additionalLanguages: ['java', 'latex'],
      //   magicComments: [
      //     {
      //       className: 'theme-code-block-highlighted-line',
      //       line: 'highlight-next-line',
      //       block: {start: 'highlight-start', end: 'highlight-end'},
      //     },
      //     {
      //       className: 'code-block-error-line',
      //       line: 'This will error',
      //     },
      //   ],
      //   theme: (await import('./src/utils/prismLight.mjs')).default,
      //   darkTheme: (await import('./src/utils/prismDark.mjs')).default,
      // },
    }),
  };
};

