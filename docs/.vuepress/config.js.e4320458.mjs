// docs/.vuepress/config.js
import { defineUserConfig } from "@vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

// docs/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// docs/.vuepress/configs/navbar/en.js
import { navbar } from "vuepress-theme-hope";
var enNavBarConfig = navbar([
  "/",
  "/page/about/",
  {
    text: "[[non-clickable-menu-dropdown-text]]",
    children: [
      {
        text: "[[sublink-text-1]]",
        link: "/"
      },
      {
        text: "[[sublink-text-2]]",
        link: "/"
      },
      {
        text: "[[sublink-text-3]]",
        link: "/"
      }
    ]
  },
  { text: "[[contact-page-link-text]]", link: "/page/contact-us/" }
]);

// docs/.vuepress/configs/navbar/fr.js
import { navbar as navbar2 } from "vuepress-theme-hope";
var frNavBarConfig = navbar2([
  // '/page/accueil/',
  "/",
  "/page/contactez-moi/"
  // '/page/a-propos/',
]);

// docs/.vuepress/theme.ts
var theme_default = hopeTheme({
  //path.resolve(__dirname, './theme'),
  hostname: "https://passonslecap.fr",
  author: {
    name: "Jeremie Litzler",
    url: "https://passonslecap.fr"
  },
  // repo: 'le-cap/landing-page',
  // docsRepo: 'https://github.com/le-cap/landing-page',
  // docsBranch: 'main',
  docsDir: "docs",
  // editLinkPattern: ':repo/edit/:branch/:path',
  logo: "/icons/favicon-32x32.png",
  logoDark: "/icons/dark-favicon-32x32.png",
  locales: {
    // '/en': {
    //   navbar: enNavBarConfig,
    //   sidebar: false,
    // },
    "/": {
      navbar: frNavBarConfig,
      sidebar: false
    }
  },
  displayFooter: true,
  footer: 'GPLv3 Licensed | <a href="/page/mentions-legales" title="Lire les mentions l\xE9gales du site web">Mentions l\xE9gales</a>',
  plugins: {
    blog: true,
    // comment: {
    //   provider: 'Giscus',
    //   repo: 'JeremieLitzler/journal',
    //   repoId: 'MDEwOlJlcG9zaXRvcnkzOTQ1MzE2NTg=',
    //   category: 'Comments',
    //   categoryId: 'DIC_kwDOF4QTSs4CTng3',
    //   mapping: 'title',
    // },
    mdEnhance: {
      linkCheck: "always",
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html
      align: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html
      attrs: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html
      //chart: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html
      container: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html
      // echarts: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html
      //See also https://echarts.apache.org/en/index.html
      footnote: true,
      //use the figure, figureCaption to wrap an image
      figure: true,
      //load image lazily with native method
      imgLazyload: true,
      //Syntax: ==this text is marked==
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html
      mark: true
      //Supports RevealJS
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html
      //presentation: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.html
      //I'm not sure I need it for now
      //stylize: []
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html
      // tabs: true,
    },
    pwa: {
      cacheHTML: true
      //caching pictures is too heavy...
      //cachePic: true
    }
  }
});

// docs/.vuepress/configs/head/en.js
var websiteDomain = "passonslecap.fr";
var titleDefault = "Learn, Act, Produce: 3 steps to reduce your energy bills.";
var descriptionDefault = "Reducing your energy bills doesn't require a big investment, as some companies market it. With little investment and the proper knowledge, you can save today. Join us on this journey";
var themeColor = "#FFD500";
var enHeadConfig = {
  title: titleDefault,
  description: descriptionDefault,
  // repo: repoLink,
  //https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    ["meta", { property: "og:title", content: titleDefault }],
    ["meta", { property: "og:url", content: `https://${websiteDomain}/en/` }],
    [
      "meta",
      {
        property: "og:description",
        content: descriptionDefault
      }
    ],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      { property: "og:image", content: "/icons/android-chrome-512x512.png" }
    ],
    ["meta", { name: "msapplication-TileColor", content: themeColor }],
    ["meta", { name: "theme-color", content: themeColor }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png"
      }
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: themeColor
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-touch-icon.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }]
  ]
};

// docs/.vuepress/configs/head/fr.js
var localeFull = "fr-FR";
var websiteDomain2 = "passonslecap.fr";
var titleDefault2 = "Passons le C.A.P";
var descriptionDefault2 = "Diminuer vos factures d'\xE9nergie ne demande pas un gros investissement, contrairement \xE0 ce que certaines entreprises vous vendent r\xE9ellement. Avec un petit investissement progressif et la bonne connaissance du sujet, vous \xE9conomiserez d\xE8s aujourd'hui. Rejoignez-nous dans cette aventure";
var themeColor2 = "#FFD500";
var frHeadConfig = {
  lang: localeFull,
  title: titleDefault2,
  description: descriptionDefault2,
  // repo: repoLink,
  //https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    ["meta", { property: "og:title", content: titleDefault2 }],
    [
      "meta",
      {
        property: "og:url",
        content: `https://${websiteDomain2}/`
      }
    ],
    [
      "meta",
      {
        property: "og:description",
        content: descriptionDefault2
      }
    ],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      { property: "og:image", content: "/icons/android-chrome-512x512.png" }
    ],
    ["meta", { name: "msapplication-TileColor", content: themeColor2 }],
    ["meta", { name: "theme-color", content: themeColor2 }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png"
      }
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: themeColor2
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-touch-icon.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }]
  ]
};

// docs/.vuepress/config.js
var config_default = defineUserConfig({
  lang: "fr-Fr",
  locales: {
    "/": frHeadConfig
    // '/en/': enHeadConfig,
  },
  theme: theme_default,
  shouldPrefetch: false,
  bundler: viteBundler(),
  plugins: [
    /*docsearchPlugin({
      appId: 'OEWJGZ6584',
      apiKey: '9da6989deaa25628c61dce09c61710b5',
      indexName: '[[docssearch-index]]',
      locales: {
        '/': {
          placeholder: 'Search',
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Clear',
                resetButtonAriaLabel: 'Clear',
                cancelButtonText: 'Cancel',
                cancelButtonAriaLabel: 'Cancel',
              },
              startScreen: {
                recentSearchesTitle: 'Search history',
                noRecentSearchesText: 'No recent search',
                saveRecentSearchButtonTitle: 'Save recent searches',
                removeRecentSearchButtonTitle: 'Remove recent searches',
                favoriteSearchesTitle: 'Collect',
                removeFavoriteSearchButtonTitle: 'Remove',
              },
              errorScreen: {
                titleText: 'Unable to get results',
                helpText: 'You may need to check your internet connection',
              },
              footer: {
                selectText: 'Choose',
                navigateText: 'Switch',
                closeText: 'Close',
                searchByText: 'Search by',
              },
              noResultsScreen: {
                noResultsText: 'No relevant results found',
                suggestedQueryText: 'You can try...',
                reportMissingResultsText:
                  'Do you think this query should have results?',
                reportMissingResultsLinkText: 'Report missing result',
              },
            },
          },
        },
        '/fr/': {
          placeholder: 'Rechercher',
          translations: {
            button: {
              buttonText: 'Rechercher',
              buttonAriaLabel: 'Rechercher',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Effacer',
                resetButtonAriaLabel: 'Effacer',
                cancelButtonText: 'Annuler',
                cancelButtonAriaLabel: 'Annuler',
              },
              startScreen: {
                recentSearchesTitle: "Rechercher l'historique",
                noRecentSearchesText: 'Aucun recherche récente',
                saveRecentSearchButtonTitle:
                  'Sauvegarder les recherches récentes',
                removeRecentSearchButtonTitle:
                  'Supprimer les recherches récentes',
                favoriteSearchesTitle: 'Mettre en favori',
                removeFavoriteSearchButtonTitle: 'Supprimer des favoris',
              },
              errorScreen: {
                titleText: 'Aucun résultat',
                helpText: 'Vérifiez peut-être votre connexion Internet.',
              },
              footer: {
                selectText: 'Sélectionner',
                navigateText: 'Changer',
                closeText: 'Fermer',
                searchByText: 'Rechercher par',
              },
              noResultsScreen: {
                noResultsText: 'Aucun résultat trouvé par votre recherche.',
                suggestedQueryText: 'Essayez peut-être...',
                reportMissingResultsText:
                  'Pensez-vous que cette recherche devrait retourner des résultats ?',
                reportMissingResultsLinkText: 'Rapporter un résultat manquant',
              },
            },
          },
        },
      },
    }),*/
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyL2VuLmpzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyL2ZyLmpzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvaGVhZC9lbi5qcyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL2hlYWQvZnIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9HaXQvR2l0SHViL2xhbmRpbmctcGFnZS9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0XFxcXEdpdEh1YlxcXFxsYW5kaW5nLXBhZ2VcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9HaXQvR2l0SHViL2xhbmRpbmctcGFnZS9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtjb25zdCB2ZXJzaW9uID0gJzEuMC4wJztcblxuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ0B2dWVwcmVzcy9jbGknO1xuaW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJztcblxuLy8gaW1wb3J0IGRvY3NlYXJjaFBsdWdpbiBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLWRvY3NlYXJjaCc7XG5cbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IGVuSGVhZENvbmZpZywgZnJIZWFkQ29uZmlnIH0gZnJvbSAnLi9jb25maWdzL2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgbGFuZzogJ2ZyLUZyJyxcbiAgbG9jYWxlczoge1xuICAgICcvJzogZnJIZWFkQ29uZmlnLFxuICAgIC8vICcvZW4vJzogZW5IZWFkQ29uZmlnLFxuICB9LFxuICB0aGVtZSxcbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxuICBwbHVnaW5zOiBbXG4gICAgLypkb2NzZWFyY2hQbHVnaW4oe1xuICAgICAgYXBwSWQ6ICdPRVdKR1o2NTg0JyxcbiAgICAgIGFwaUtleTogJzlkYTY5ODlkZWFhMjU2MjhjNjFkY2UwOWM2MTcxMGI1JyxcbiAgICAgIGluZGV4TmFtZTogJ1tbZG9jc3NlYXJjaC1pbmRleF1dJyxcbiAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgJy8nOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdTZWFyY2gnLFxuICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6ICdTZWFyY2gnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGFsOiB7XG4gICAgICAgICAgICAgIHNlYXJjaEJveDoge1xuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6ICdDbGVhcicsXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25BcmlhTGFiZWw6ICdDbGVhcicsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhcnRTY3JlZW46IHtcbiAgICAgICAgICAgICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiAnU2VhcmNoIGhpc3RvcnknLFxuICAgICAgICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnTm8gcmVjZW50IHNlYXJjaCcsXG4gICAgICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnU2F2ZSByZWNlbnQgc2VhcmNoZXMnLFxuICAgICAgICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnUmVtb3ZlIHJlY2VudCBzZWFyY2hlcycsXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVTZWFyY2hlc1RpdGxlOiAnQ29sbGVjdCcsXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZTogJ1JlbW92ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yU2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgdGl0bGVUZXh0OiAnVW5hYmxlIHRvIGdldCByZXN1bHRzJyxcbiAgICAgICAgICAgICAgICBoZWxwVGV4dDogJ1lvdSBtYXkgbmVlZCB0byBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiAnQ2hvb3NlJyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6ICdTd2l0Y2gnLFxuICAgICAgICAgICAgICAgIGNsb3NlVGV4dDogJ0Nsb3NlJyxcbiAgICAgICAgICAgICAgICBzZWFyY2hCeVRleHQ6ICdTZWFyY2ggYnknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBub1Jlc3VsdHNTY3JlZW46IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnTm8gcmVsZXZhbnQgcmVzdWx0cyBmb3VuZCcsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiAnWW91IGNhbiB0cnkuLi4nLFxuICAgICAgICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dDpcbiAgICAgICAgICAgICAgICAgICdEbyB5b3UgdGhpbmsgdGhpcyBxdWVyeSBzaG91bGQgaGF2ZSByZXN1bHRzPycsXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1JlcG9ydCBtaXNzaW5nIHJlc3VsdCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICcvZnIvJzoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUmVjaGVyY2hlcicsXG4gICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1JlY2hlcmNoZXInLFxuICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6ICdSZWNoZXJjaGVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnRWZmYWNlcicsXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25BcmlhTGFiZWw6ICdFZmZhY2VyJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQW5udWxlcicsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnQW5udWxlcicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXJ0U2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogXCJSZWNoZXJjaGVyIGwnaGlzdG9yaXF1ZVwiLFxuICAgICAgICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnQXVjdW4gcmVjaGVyY2hlIHJcdTAwRTljZW50ZScsXG4gICAgICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOlxuICAgICAgICAgICAgICAgICAgJ1NhdXZlZ2FyZGVyIGxlcyByZWNoZXJjaGVzIHJcdTAwRTljZW50ZXMnLFxuICAgICAgICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOlxuICAgICAgICAgICAgICAgICAgJ1N1cHByaW1lciBsZXMgcmVjaGVyY2hlcyByXHUwMEU5Y2VudGVzJyxcbiAgICAgICAgICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6ICdNZXR0cmUgZW4gZmF2b3JpJyxcbiAgICAgICAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiAnU3VwcHJpbWVyIGRlcyBmYXZvcmlzJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3JTY3JlZW46IHtcbiAgICAgICAgICAgICAgICB0aXRsZVRleHQ6ICdBdWN1biByXHUwMEU5c3VsdGF0JyxcbiAgICAgICAgICAgICAgICBoZWxwVGV4dDogJ1ZcdTAwRTlyaWZpZXogcGV1dC1cdTAwRUF0cmUgdm90cmUgY29ubmV4aW9uIEludGVybmV0LicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdTXHUwMEU5bGVjdGlvbm5lcicsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiAnQ2hhbmdlcicsXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiAnRmVybWVyJyxcbiAgICAgICAgICAgICAgICBzZWFyY2hCeVRleHQ6ICdSZWNoZXJjaGVyIHBhcicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG5vUmVzdWx0c1NjcmVlbjoge1xuICAgICAgICAgICAgICAgIG5vUmVzdWx0c1RleHQ6ICdBdWN1biByXHUwMEU5c3VsdGF0IHRyb3V2XHUwMEU5IHBhciB2b3RyZSByZWNoZXJjaGUuJyxcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6ICdFc3NheWV6IHBldXQtXHUwMEVBdHJlLi4uJyxcbiAgICAgICAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c1RleHQ6XG4gICAgICAgICAgICAgICAgICAnUGVuc2V6LXZvdXMgcXVlIGNldHRlIHJlY2hlcmNoZSBkZXZyYWl0IHJldG91cm5lciBkZXMgclx1MDBFOXN1bHRhdHMgPycsXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1JhcHBvcnRlciB1biByXHUwMEU5c3VsdGF0IG1hbnF1YW50JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksKi9cbiAgXSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9HaXQvR2l0SHViL2xhbmRpbmctcGFnZS9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0XFxcXEdpdEh1YlxcXFxsYW5kaW5nLXBhZ2VcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdC9HaXRIdWIvbGFuZGluZy1wYWdlL2RvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7Ly9odHRwczovL3YyLnZ1ZXByZXNzLnZ1ZWpzLm9yZy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9leHRlbmRpbmcuaHRtbFxuXG5pbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1ob3BlJztcblxuaW1wb3J0IHsgLyplbk5hdkJhckNvbmZpZywqLyBmck5hdkJhckNvbmZpZyB9IGZyb20gJy4vY29uZmlncy9uYXZiYXInO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICAvL3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3RoZW1lJyksXG4gIGhvc3RuYW1lOiAnaHR0cHM6Ly9wYXNzb25zbGVjYXAuZnInLFxuICBhdXRob3I6IHtcbiAgICBuYW1lOiAnSmVyZW1pZSBMaXR6bGVyJyxcbiAgICB1cmw6ICdodHRwczovL3Bhc3NvbnNsZWNhcC5mcicsXG4gIH0sXG4gIC8vIHJlcG86ICdsZS1jYXAvbGFuZGluZy1wYWdlJyxcbiAgLy8gZG9jc1JlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGUtY2FwL2xhbmRpbmctcGFnZScsXG4gIC8vIGRvY3NCcmFuY2g6ICdtYWluJyxcbiAgZG9jc0RpcjogJ2RvY3MnLFxuICAvLyBlZGl0TGlua1BhdHRlcm46ICc6cmVwby9lZGl0LzpicmFuY2gvOnBhdGgnLFxuICBsb2dvOiAnL2ljb25zL2Zhdmljb24tMzJ4MzIucG5nJyxcbiAgbG9nb0Rhcms6ICcvaWNvbnMvZGFyay1mYXZpY29uLTMyeDMyLnBuZycsXG4gIGxvY2FsZXM6IHtcbiAgICAvLyAnL2VuJzoge1xuICAgIC8vICAgbmF2YmFyOiBlbk5hdkJhckNvbmZpZyxcbiAgICAvLyAgIHNpZGViYXI6IGZhbHNlLFxuICAgIC8vIH0sXG4gICAgJy8nOiB7XG4gICAgICBuYXZiYXI6IGZyTmF2QmFyQ29uZmlnLFxuICAgICAgc2lkZWJhcjogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcbiAgZm9vdGVyOlxuICAgICdHUEx2MyBMaWNlbnNlZCB8IDxhIGhyZWY9XCIvcGFnZS9tZW50aW9ucy1sZWdhbGVzXCIgdGl0bGU9XCJMaXJlIGxlcyBtZW50aW9ucyBsXHUwMEU5Z2FsZXMgZHUgc2l0ZSB3ZWJcIj5NZW50aW9ucyBsXHUwMEU5Z2FsZXM8L2E+JyxcbiAgcGx1Z2luczoge1xuICAgIGJsb2c6IHRydWUsXG4gICAgLy8gY29tbWVudDoge1xuICAgIC8vICAgcHJvdmlkZXI6ICdHaXNjdXMnLFxuICAgIC8vICAgcmVwbzogJ0plcmVtaWVMaXR6bGVyL2pvdXJuYWwnLFxuICAgIC8vICAgcmVwb0lkOiAnTURFd09sSmxjRzl6YVhSdmNua3pPVFExTXpFMk5UZz0nLFxuICAgIC8vICAgY2F0ZWdvcnk6ICdDb21tZW50cycsXG4gICAgLy8gICBjYXRlZ29yeUlkOiAnRElDX2t3RE9GNFFUU3M0Q1RuZzMnLFxuICAgIC8vICAgbWFwcGluZzogJ3RpdGxlJyxcbiAgICAvLyB9LFxuICAgIG1kRW5oYW5jZToge1xuICAgICAgbGlua0NoZWNrOiAnYWx3YXlzJyxcbiAgICAgIC8vU2VlIGh0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS5naXRodWIuaW8vdjIvZ3VpZGUvbWFya2Rvd24vYWxpZ24uaHRtbFxuICAgICAgYWxpZ246IHRydWUsXG4gICAgICAvL1NlZSBodHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUuZ2l0aHViLmlvL3YyL2d1aWRlL21hcmtkb3duL2F0dHJzLmh0bWxcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgLy9TZWUgaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi9ndWlkZS9tYXJrZG93bi9jaGFydC5odG1sXG4gICAgICAvL2NoYXJ0OiB0cnVlLFxuICAgICAgLy9TZWUgaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi9ndWlkZS9tYXJrZG93bi9jb250YWluZXIuaHRtbFxuICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgLy9TZWUgaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi9ndWlkZS9tYXJrZG93bi9lY2hhcnRzLmh0bWxcbiAgICAgIC8vIGVjaGFydHM6IHRydWUsXG4gICAgICAvL1NlZSBodHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUuZ2l0aHViLmlvL3YyL2d1aWRlL21hcmtkb3duL2Zvb3Rub3RlLmh0bWxcbiAgICAgIC8vU2VlIGFsc28gaHR0cHM6Ly9lY2hhcnRzLmFwYWNoZS5vcmcvZW4vaW5kZXguaHRtbFxuICAgICAgZm9vdG5vdGU6IHRydWUsXG4gICAgICAvL3VzZSB0aGUgZmlndXJlLCBmaWd1cmVDYXB0aW9uIHRvIHdyYXAgYW4gaW1hZ2VcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIC8vbG9hZCBpbWFnZSBsYXppbHkgd2l0aCBuYXRpdmUgbWV0aG9kXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIC8vU3ludGF4OiA9PXRoaXMgdGV4dCBpcyBtYXJrZWQ9PVxuICAgICAgLy9TZWUgaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi9ndWlkZS9tYXJrZG93bi9tYXJrLmh0bWxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICAvL1N1cHBvcnRzIFJldmVhbEpTXG4gICAgICAvL1NlZSBodHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUuZ2l0aHViLmlvL3YyL2d1aWRlL21hcmtkb3duL3ByZXNlbnRhdGlvbi5odG1sXG4gICAgICAvL3ByZXNlbnRhdGlvbjogdHJ1ZSxcbiAgICAgIC8vU2VlIGh0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS5naXRodWIuaW8vdjIvZ3VpZGUvbWFya2Rvd24vc3R5bGl6ZS5odG1sXG4gICAgICAvL0knbSBub3Qgc3VyZSBJIG5lZWQgaXQgZm9yIG5vd1xuICAgICAgLy9zdHlsaXplOiBbXVxuICAgICAgLy9TZWUgaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi9ndWlkZS9tYXJrZG93bi90YWJzLmh0bWxcbiAgICAgIC8vIHRhYnM6IHRydWUsXG4gICAgfSxcbiAgICBwd2E6IHtcbiAgICAgIGNhY2hlSFRNTDogdHJ1ZSxcbiAgICAgIC8vY2FjaGluZyBwaWN0dXJlcyBpcyB0b28gaGVhdnkuLi5cbiAgICAgIC8vY2FjaGVQaWM6IHRydWVcbiAgICB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0dpdC9HaXRIdWIvbGFuZGluZy1wYWdlL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRcXFxcR2l0SHViXFxcXGxhbmRpbmctcGFnZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXG5hdmJhclxcXFxlbi5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0L0dpdEh1Yi9sYW5kaW5nLXBhZ2UvZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvZW4uanNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1ob3BlJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbk5hdkJhckNvbmZpZyA9IG5hdmJhcihbXHJcbiAgJy8nLFxyXG4gICcvcGFnZS9hYm91dC8nLFxyXG4gIHtcclxuICAgIHRleHQ6ICdbW25vbi1jbGlja2FibGUtbWVudS1kcm9wZG93bi10ZXh0XV0nLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdbW3N1YmxpbmstdGV4dC0xXV0nLFxyXG4gICAgICAgIGxpbms6ICcvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdbW3N1YmxpbmstdGV4dC0yXV0nLFxyXG4gICAgICAgIGxpbms6ICcvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdbW3N1YmxpbmstdGV4dC0zXV0nLFxyXG4gICAgICAgIGxpbms6ICcvJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7IHRleHQ6ICdbW2NvbnRhY3QtcGFnZS1saW5rLXRleHRdXScsIGxpbms6ICcvcGFnZS9jb250YWN0LXVzLycgfSxcclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovR2l0L0dpdEh1Yi9sYW5kaW5nLXBhZ2UvZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEdpdFxcXFxHaXRIdWJcXFxcbGFuZGluZy1wYWdlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcbmF2YmFyXFxcXGZyLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9HaXQvR2l0SHViL2xhbmRpbmctcGFnZS9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhci9mci5qc1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLWhvcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyTmF2QmFyQ29uZmlnID0gbmF2YmFyKFtcclxuICAvLyAnL3BhZ2UvYWNjdWVpbC8nLFxyXG4gICcvJyxcclxuICAnL3BhZ2UvY29udGFjdGV6LW1vaS8nLFxyXG4gIC8vICcvcGFnZS9hLXByb3Bvcy8nLFxyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9HaXQvR2l0SHViL2xhbmRpbmctcGFnZS9kb2NzLy52dWVwcmVzcy9jb25maWdzL2hlYWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEdpdFxcXFxHaXRIdWJcXFxcbGFuZGluZy1wYWdlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcaGVhZFxcXFxlbi5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0L0dpdEh1Yi9sYW5kaW5nLXBhZ2UvZG9jcy8udnVlcHJlc3MvY29uZmlncy9oZWFkL2VuLmpzXCI7Y29uc3Qgd2Vic2l0ZURvbWFpbiA9ICdwYXNzb25zbGVjYXAuZnInO1xuY29uc3QgdGl0bGVEZWZhdWx0ID1cbiAgJ0xlYXJuLCBBY3QsIFByb2R1Y2U6IDMgc3RlcHMgdG8gcmVkdWNlIHlvdXIgZW5lcmd5IGJpbGxzLic7XG5jb25zdCBkZXNjcmlwdGlvbkRlZmF1bHQgPVxuICBcIlJlZHVjaW5nIHlvdXIgZW5lcmd5IGJpbGxzIGRvZXNuJ3QgcmVxdWlyZSBhIGJpZyBpbnZlc3RtZW50LCBhcyBzb21lIGNvbXBhbmllcyBtYXJrZXQgaXQuIFdpdGggbGl0dGxlIGludmVzdG1lbnQgYW5kIHRoZSBwcm9wZXIga25vd2xlZGdlLCB5b3UgY2FuIHNhdmUgdG9kYXkuIEpvaW4gdXMgb24gdGhpcyBqb3VybmV5XCI7XG5jb25zdCB0aGVtZUNvbG9yID0gJyNGRkQ1MDAnO1xuY29uc3QgcmVwb0xpbmsgPSAnaHR0cHM6Ly9naXRodWIuY29tL2xlLWNhcC9sYW5kaW5nLXBhZ2UnO1xuZXhwb3J0IGNvbnN0IGVuSGVhZENvbmZpZyA9IHtcbiAgdGl0bGU6IHRpdGxlRGVmYXVsdCxcbiAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uRGVmYXVsdCxcbiAgLy8gcmVwbzogcmVwb0xpbmssXG4gIC8vaHR0cHM6Ly92Mi52dWVwcmVzcy52dWVqcy5vcmcvcmVmZXJlbmNlL2NvbmZpZy5odG1sI2hlYWRcbiAgaGVhZDogW1xuICAgIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHRpdGxlRGVmYXVsdCB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogYGh0dHBzOi8vJHt3ZWJzaXRlRG9tYWlufS9lbi9gIH1dLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsXG4gICAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uRGVmYXVsdCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6ICd3ZWJzaXRlJyB9XSxcbiAgICBbXG4gICAgICAnbWV0YScsXG4gICAgICB7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiAnL2ljb25zL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyB9LFxuICAgIF0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAnbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InLCBjb250ZW50OiB0aGVtZUNvbG9yIH1dLFxuICAgIFsnbWV0YScsIHsgbmFtZTogJ3RoZW1lLWNvbG9yJywgY29udGVudDogdGhlbWVDb2xvciB9XSxcbiAgICBbXG4gICAgICAnbGluaycsXG4gICAgICB7XG4gICAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgc2l6ZXM6ICczMngzMicsXG4gICAgICAgIGhyZWY6ICcvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmcnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHtcbiAgICAgICAgcmVsOiAnaWNvbicsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICBzaXplczogJzE2eDE2JyxcbiAgICAgICAgaHJlZjogJy9pY29ucy9mYXZpY29uLTE2eDE2LnBuZycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdtYXNrLWljb24nLFxuICAgICAgICBocmVmOiAnL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2ZycsXG4gICAgICAgIGNvbG9yOiB0aGVtZUNvbG9yLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHtcbiAgICAgICAgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsXG4gICAgICAgIHNpemVzOiAnMTgweDE4MCcsXG4gICAgICAgIGhyZWY6ICcvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmcnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFsnbGluaycsIHsgcmVsOiAnbWFuaWZlc3QnLCBocmVmOiAnL3NpdGUud2VibWFuaWZlc3QnIH1dLFxuICBdLFxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovR2l0L0dpdEh1Yi9sYW5kaW5nLXBhZ2UvZG9jcy8udnVlcHJlc3MvY29uZmlncy9oZWFkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRcXFxcR2l0SHViXFxcXGxhbmRpbmctcGFnZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXGhlYWRcXFxcZnIuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdC9HaXRIdWIvbGFuZGluZy1wYWdlL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvaGVhZC9mci5qc1wiO2NvbnN0IGxvY2FsZVNob3J0ID0gJ2ZyJztcbmNvbnN0IGxvY2FsZUZ1bGwgPSAnZnItRlInO1xuY29uc3Qgd2Vic2l0ZURvbWFpbiA9ICdwYXNzb25zbGVjYXAuZnInO1xuY29uc3QgdGl0bGVEZWZhdWx0ID0gJ1Bhc3NvbnMgbGUgQy5BLlAnO1xuY29uc3QgZGVzY3JpcHRpb25EZWZhdWx0ID1cbiAgXCJEaW1pbnVlciB2b3MgZmFjdHVyZXMgZCdcdTAwRTluZXJnaWUgbmUgZGVtYW5kZSBwYXMgdW4gZ3JvcyBpbnZlc3Rpc3NlbWVudCwgY29udHJhaXJlbWVudCBcdTAwRTAgY2UgcXVlIGNlcnRhaW5lcyBlbnRyZXByaXNlcyB2b3VzIHZlbmRlbnQgclx1MDBFOWVsbGVtZW50LiBBdmVjIHVuIHBldGl0IGludmVzdGlzc2VtZW50IHByb2dyZXNzaWYgZXQgbGEgYm9ubmUgY29ubmFpc3NhbmNlIGR1IHN1amV0LCB2b3VzIFx1MDBFOWNvbm9taXNlcmV6IGRcdTAwRThzIGF1am91cmQnaHVpLiBSZWpvaWduZXotbm91cyBkYW5zIGNldHRlIGF2ZW50dXJlXCI7XG5jb25zdCB0aGVtZUNvbG9yID0gJyNGRkQ1MDAnO1xuY29uc3QgcmVwb0xpbmsgPSAnaHR0cHM6Ly9naXRodWIuY29tL2xlLWNhcC9sYW5kaW5nLXBhZ2UnO1xuXG5leHBvcnQgY29uc3QgZnJIZWFkQ29uZmlnID0ge1xuICBsYW5nOiBsb2NhbGVGdWxsLFxuICB0aXRsZTogdGl0bGVEZWZhdWx0LFxuICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25EZWZhdWx0LFxuICAvLyByZXBvOiByZXBvTGluayxcbiAgLy9odHRwczovL3YyLnZ1ZXByZXNzLnZ1ZWpzLm9yZy9yZWZlcmVuY2UvY29uZmlnLmh0bWwjaGVhZFxuICBoZWFkOiBbXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogdGl0bGVEZWZhdWx0IH1dLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgcHJvcGVydHk6ICdvZzp1cmwnLFxuICAgICAgICBjb250ZW50OiBgaHR0cHM6Ly8ke3dlYnNpdGVEb21haW59L2AsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgJ21ldGEnLFxuICAgICAge1xuICAgICAgICBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJyxcbiAgICAgICAgY29udGVudDogZGVzY3JpcHRpb25EZWZhdWx0LFxuICAgICAgfSxcbiAgICBdLFxuICAgIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogJ3dlYnNpdGUnIH1dLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6ICcvaWNvbnMvYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmcnIH0sXG4gICAgXSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicsIGNvbnRlbnQ6IHRoZW1lQ29sb3IgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiB0aGVtZUNvbG9yIH1dLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHtcbiAgICAgICAgcmVsOiAnaWNvbicsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICBzaXplczogJzMyeDMyJyxcbiAgICAgICAgaHJlZjogJy9pY29ucy9mYXZpY29uLTMyeDMyLnBuZycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdpY29uJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgICAgICBocmVmOiAnL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24uaWNvJyB9XSxcbiAgICBbXG4gICAgICAnbGluaycsXG4gICAgICB7XG4gICAgICAgIHJlbDogJ21hc2staWNvbicsXG4gICAgICAgIGhyZWY6ICcvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJyxcbiAgICAgICAgY29sb3I6IHRoZW1lQ29sb3IsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdhcHBsZS10b3VjaC1pY29uJyxcbiAgICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgICAgaHJlZjogJy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgeyByZWw6ICdtYW5pZmVzdCcsIGhyZWY6ICcvc2l0ZS53ZWJtYW5pZmVzdCcgfV0sXG4gIF0sXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsbUJBQW1COzs7QUNENUIsU0FBUyxpQkFBaUI7OztBQ0Z1VCxTQUFTLGNBQWM7QUFFalcsSUFBTSxpQkFBaUIsT0FBTztBQUFBLEVBQ25DO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsRUFBRSxNQUFNLDhCQUE4QixNQUFNLG9CQUFvQjtBQUNsRSxDQUFDOzs7QUN2QmdWLFNBQVMsVUFBQUEsZUFBYztBQUVqVyxJQUFNLGlCQUFpQkMsUUFBTztBQUFBO0FBQUEsRUFFbkM7QUFBQSxFQUNBO0FBQUE7QUFFRixDQUFDOzs7QUZERCxJQUFPLGdCQUFRLFVBQVU7QUFBQTtBQUFBLEVBRXZCLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxTQUFTO0FBQUE7QUFBQSxFQUVULE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS1AsS0FBSztBQUFBLE1BQ0gsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlO0FBQUEsRUFDZixRQUNFO0FBQUEsRUFDRixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBU04sV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBO0FBQUEsTUFFWCxPQUFPO0FBQUE7QUFBQSxNQUVQLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlQLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS1gsVUFBVTtBQUFBO0FBQUEsTUFFVixRQUFRO0FBQUE7QUFBQSxNQUVSLGFBQWE7QUFBQTtBQUFBO0FBQUEsTUFHYixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBU1I7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFHYjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUdoRjBVLElBQU0sZ0JBQWdCO0FBQ2pXLElBQU0sZUFDSjtBQUNGLElBQU0scUJBQ0o7QUFDRixJQUFNLGFBQWE7QUFFWixJQUFNLGVBQWU7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBR2IsTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRLEVBQUUsVUFBVSxZQUFZLFNBQVMsYUFBYSxDQUFDO0FBQUEsSUFDeEQsQ0FBQyxRQUFRLEVBQUUsVUFBVSxVQUFVLFNBQVMsV0FBVyxvQkFBb0IsQ0FBQztBQUFBLElBQ3hFO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRLEVBQUUsVUFBVSxXQUFXLFNBQVMsVUFBVSxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxNQUNFO0FBQUEsTUFDQSxFQUFFLFVBQVUsWUFBWSxTQUFTLG9DQUFvQztBQUFBLElBQ3ZFO0FBQUEsSUFDQSxDQUFDLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixTQUFTLFdBQVcsQ0FBQztBQUFBLElBQ2pFLENBQUMsUUFBUSxFQUFFLE1BQU0sZUFBZSxTQUFTLFdBQVcsQ0FBQztBQUFBLElBQ3JEO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFDQSxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFBQSxJQUM5QztBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRLEVBQUUsS0FBSyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFBQSxFQUN6RDtBQUNGOzs7QUNqRUEsSUFBTSxhQUFhO0FBQ25CLElBQU1DLGlCQUFnQjtBQUN0QixJQUFNQyxnQkFBZTtBQUNyQixJQUFNQyxzQkFDSjtBQUNGLElBQU1DLGNBQWE7QUFHWixJQUFNLGVBQWU7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixPQUFPQztBQUFBLEVBQ1AsYUFBYUM7QUFBQTtBQUFBO0FBQUEsRUFHYixNQUFNO0FBQUEsSUFDSixDQUFDLFFBQVEsRUFBRSxVQUFVLFlBQVksU0FBU0QsY0FBYSxDQUFDO0FBQUEsSUFDeEQ7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsU0FBUyxXQUFXRTtBQUFBLE1BQ3RCO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsU0FBU0Q7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRLEVBQUUsVUFBVSxXQUFXLFNBQVMsVUFBVSxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxNQUNFO0FBQUEsTUFDQSxFQUFFLFVBQVUsWUFBWSxTQUFTLG9DQUFvQztBQUFBLElBQ3ZFO0FBQUEsSUFDQSxDQUFDLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixTQUFTRSxZQUFXLENBQUM7QUFBQSxJQUNqRSxDQUFDLFFBQVEsRUFBRSxNQUFNLGVBQWUsU0FBU0EsWUFBVyxDQUFDO0FBQUEsSUFDckQ7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxJQUNBLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUFBLElBQzlDO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE9BQU9BO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRLEVBQUUsS0FBSyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFBQSxFQUN6RDtBQUNGOzs7QUxqRUEsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUE7QUFBQSxFQUVQO0FBQUEsRUFDQTtBQUFBLEVBQ0EsZ0JBQWdCO0FBQUEsRUFDaEIsU0FBUyxZQUFZO0FBQUEsRUFDckIsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBOEZUO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsibmF2YmFyIiwgIm5hdmJhciIsICJ3ZWJzaXRlRG9tYWluIiwgInRpdGxlRGVmYXVsdCIsICJkZXNjcmlwdGlvbkRlZmF1bHQiLCAidGhlbWVDb2xvciIsICJ0aXRsZURlZmF1bHQiLCAiZGVzY3JpcHRpb25EZWZhdWx0IiwgIndlYnNpdGVEb21haW4iLCAidGhlbWVDb2xvciJdCn0K
