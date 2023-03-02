import { navbar } from 'vuepress-theme-hope';

export const enNavBarConfig = navbar([
  '/',
  '/page/about/',
  {
    text: '[[non-clickable-menu-dropdown-text]]',
    children: [
      {
        text: '[[sublink-text-1]]',
        link: '/',
      },
      {
        text: '[[sublink-text-2]]',
        link: '/',
      },
      {
        text: '[[sublink-text-3]]',
        link: '/',
      },
    ],
  },
  { text: '[[contact-page-link-text]]', link: '/page/contact-us/' },
]);
