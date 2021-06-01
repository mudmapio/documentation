/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mudmap Documentation',
  tagline: 'Management made easy',
  url: 'https://mudmap.io/',
  // url: 'https://mudmap-documentation.onrender.com/',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mudmapio', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mudmap',
      logo: {
        alt: 'Mudmap',
        src: 'img/mudmap.png',
        target: "_self",
        href: "https://mudmap.io"
      },
      items: [
        {
          // type: 'doc',
          // docId: 'intro',
          // position: 'left',
          // label: 'Docs',
          href: '/',
          label: "Docs",
          position: "left",
          target: "_self",
          activeBasePath: "/docs"
        },
        {
          href: 'https://github.com/mudmapio/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Study',
          items: [
            {
              label: "About Mudmap",
              to: "https://mudmap.io/about"
            },
            {
              label: 'Read the Blog',
              to: 'https://mudmap.io/blog',
            },
            {
              label: 'Read the Documentation',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mudmapio/documentation',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mudmapio',
            },
          ],
        },
        {
          title: 'Explore',
          items: [
            {
              label: "Feedback",
              to: "https://github.com/mudmapio/public-interactions/issues"
            },
            {
              label: "Found a Security Issue?",
              href: "https://github.com/mudmapio/public-interactions/blob/main/SECURITY.md"
            },
            {
              label: "Want a Demo?",
              to: "mailto:dan@mudmap.io"
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mudmap. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mudmapio/documentation/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
