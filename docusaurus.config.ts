import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PahkaSoft',
  tagline: 'PahkaSoft Software Projects',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://pahkasoft.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pahkasoft', // Usually your GitHub org/user name.
  projectName: 'pahkasoft.github.io', // Usually your repo name.
  deploymentBranch: 'main',

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
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-live-codeblock',
  ],

  themeConfig: {
    // TODO: Replace with your project's social card
    image: 'img/pahkasoft-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PahkaSoft',
      logo: {
        alt: 'PahkaSoft Logo',
        src: 'img/logo.png',
      },
      items: [
        { label: 'WebMusicScore', to: '/web-music-score/', position: 'left' },
        { label: 'TsUtilsLib', to: '/ts-utils-lib/', position: 'left' },
        { label: 'StdFormat', to: '/std-format/', position: 'left' },
        { label: 'TsupPluginInlineAssets', to: '/tsup-plugin-inline-assets/', position: 'left' },
        { label: 'MathApp', to: '/math-app/embedded', position: 'left' },
        { label: 'Blog', to: '/blog', position: 'left' },
        { label: 'GitHub', href: 'https://github.com/pahkasoft', position: 'right', },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            { label: 'Email', href: 'mailto:pahkasoft@outlook.com', },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog', },
            { label: 'GitHub', href: 'https://github.com/pahkasoft', },
          ],
        },
      ],
      copyright: `Copyright © 2025-${new Date().getFullYear()} Stefan B.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
