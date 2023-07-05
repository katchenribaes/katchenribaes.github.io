// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Online Shop',
  tagline: 'Online Shop',
  favicon: 'img/leaf.png',

  // Set the production url of your site here
  url: 'https://katchenribaes.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  projectName: 'katchenribaes.github.io',
  organizationName: 'onlineshop',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  trailingSlash: false,
  deploymentBranch: "main",
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'redocusaurus',
      {
        specs: [{
          route: '/api/swagger',
          spec: 'static/swagger.json',
        }],
      }
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      }),
    ],
  ],
  staticDirectories: ['static', 'build'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/leaf.png',
      navbar: {
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: 'docs/about/overview',
            label: 'Introduction',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Online Shop`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
