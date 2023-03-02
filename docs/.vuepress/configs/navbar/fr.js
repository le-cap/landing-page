import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  '/fr/',
  '/fr/page/a-propos/',
  {
    text: '[[non-clickable-menu-dropdown-text_fr]]',
    children: [
      {
        text: '[[sublink-text-1_fr]]',
        link: '/',
      },
      {
        text: '[[sublink-text-2_fr]]',
        link: '/',
      },
      {
        text: '[[sublink-text-3_fr]]',
        link: '/',
      },
    ],
  },
  { text: '[[contact-page-link-text_fr]]', link: '/fr/page/contactez-nous/' },
]);
