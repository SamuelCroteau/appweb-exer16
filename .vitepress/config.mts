import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Marc-Antoine Jobin', link: '/marc-antoine-jobin' },
      { text: 'Samuel Croteau', link: '/samuel-croteau' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Marc-Antoine Jobin', link: '/marc-antoine-jobin' },
          { text: 'Samuel Croteau', link: '/samuel-croteau' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
