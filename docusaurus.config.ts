import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Joomdle',
  tagline: 'Joomla and Moodle integration',
  favicon: 'img/joomdle_small.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'http://192.168.1.47',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'joomdle', // Usually your GitHub org/user name.
  projectName: 'joomdle', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/aduranterres/joomdle-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Joomdle Logo',
        src: 'img/joomdle_small.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Joomdle Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Joomdle Documentation',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Forum',
              href: 'https://www.joomdle.com/support/forum',
            },
            {
              label: 'Professional Services',
              href: 'https://www.joomdle.com/support/services',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Joomdle for Joomla',
              href: 'https://github.com/aduranterres/pkg_joomdle',
            },
            {
              label: 'Joomdle for Moodle',
              href: 'https://github.com/aduranterres/auth_joomdle',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Joomdle. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
