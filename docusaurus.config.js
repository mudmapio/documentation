/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mudmap Documentation',
  tagline: 'Management made easy',
  // url: 'https://mudmap.io/',
  url: 'https://docs-2sce.onrender.com/',
  // baseUrl: '/docs/', # fails
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mudmapio', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    colorMode: {disableSwitch: true},
    // scripts: [{src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'yourdomain.com'}],
    scripts: [
      {src: "https://plausible.io/js/plausible.js",
        // async: true,
        defer: true,
        'data-domain': 'docs.mudmap.io'
      }
    ],
    algolia: {
      apiKey: 'bc5db1742d629962f685dadf0bc4fde2',
      indexName: 'mudmap'
    },
    navbar: {
      title: 'Mudmap',
      logo: {
        alt: 'Mudmap',
        src: 'img/logo.png',
        target: "_self",
        href: "https://mudmap.io"
      },
      items: [
        {
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
              to: '/',
              // to: '/docs/', # fails
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
