# A template Vuepress blog using [Mr Hope very feature-rich theme](https://theme-hope.vuejs.press/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/aabaf9be-15b0-4ddc-9944-be4c7aff5057/deploy-status)](https://app.netlify.com/sites/passonslecap/deploys)

## Table of contents

[Prerequisites](#prerequisites)

[Getting started](#getting-started)

[VuePress changelogs and upgrade](#vuepress-changelogs-and-upgrade)

[VuePress theme upgrade](#vuepress-theme-changelost-and-upgrade)

[Using the demo for your need]()

## Prerequisites

- [Git bash](https://git-scm.com/downloads)
- [NodeJS 18.0.0](https://nodejs.org/en/blog/release/v16.13.1/)
- [Latest Visual Studio Code](https://code.visualstudio.com/download)

## Getting started

Using yarn makes the installation **much quicker**.

```sh
npm install --global yarn #(or use the .msi => https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
yarn
```

Then, launch the project locally:

```sh
npm run docs:dev
```

Or to build it:

```sh
npm run docs:build
```

## VuePress changelogs and upgrade

See [this link](https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md).

When upgrading and having issues with builds, use the following commands:

1. run `yarn upgrade vuepress-vite@2.0.0-beta.XX`
2. run `rm -R node_modules && rm yarn.lock && yarn install`
3. run `npm run docs:build`
4. run `npm run docs:dev` to see if the site loads and renders well :)

## VuePress theme changelost and upgrade

See [this link](https://github.com/vuepress-theme-hope/vuepress-theme-hope/releases).

Run:

```sh
yarn upgrade vuepress-theme-hope@2.0.0-beta.XX
```

## Using the demo for your need

To use this template, you will need to:

### Update the `docs/.vuepress/config.js`

Update you need the dual locales setup.
By default, you have english (_default language_) and french enabled.

If you only need one, remove from `locales` the `head` configuration you don't need.

If you want another language as default, update the `lang` value with a valid locale. See [this list](https://www.fincher.org/Utilities/CountryLanguageList.shtml).

**WARNING:** Not all locales are supported in terms of translation with the Mr Hope theme.

### Update the `docs/.vuepress/theme.ts`

- replace the _passonslecap.madebyjeremie.fr_ with the URL of your site.
- set the author.
- set the proper repository name, url, default branch and directory
- set the proper locales, depending on what you did in `config.js`
- update the `comment` plugin if you need it. See [the theme documentation](https://theme-hope.vuejs.press/guide/feature/comment.html#comment-provider)
- set the option you want from `mdEnhance` plugin. **BE CAREFUL**: activiting too many options may fail while deploying to Netlify because of memory limit. The default options actived work.
- disable the `pwa` (for Progressive Web Apps) if you don't need it. But as it is configured, it works very nicely.

### Generate the icons

You will need replace the ones under `docs/.vuepress/public/icons`

Using [this icon generator](https://favicon.io/favicon-generator/), you can generate an icon using a text value.

1. Pick 2 colors: a dark (it doesn't black or brown) and a light one.
2. First set the _Font Color_ to your light color and _Background color_ to your dark color.
3. Type whatever text you want. \*\*I usually use one or two letters so it fits in the icon.
4. Select the font you prefer and the font size
5. Click `Download`
6. Extract the files and rename `about.txt` to `about-light-over-dark.txt`
7. Copy everything **except the manifest file** to `docs/.vuepress/public/icons` to replace the template files.
8. Invert the colors on [the icon generator](https://favicon.io/favicon-generator/)
9. Click `Download` again
10. Extract the files and rename
    - `about.txt` to `about-dark-over-light.txt`
    - prefix all other images with `dark-`
11. Copy everything **except the manifest file** to `docs/.vuepress/public/icons` to replace the template files.

### Update the favicon file

From `docs/.vuepress/public/icons`, copy the `favicon.ico` to `docs/.vuepress/public`.

### PWA settings

**IMPORTANT:** if you use the plugin `pwa`, you will need to update the `webmanisfest` files under `docs/.vuepress/public/`.

If you use two locales, you will need to update all variants.

- Only the `name`, `short_name`, `description` and `start_url`, `theme_color` and `background_color` need to be updated.
- Use the same color for `theme_color` and `background_color` that you pick in [Generate the icons](#generate-the-icons)

See [the theme documentation](https://theme-hope.vuejs.press/guide/advanced/pwa.html#further-reading) for further information

### Styles

The template implements the Theme Color Palette. See [the documentation](https://theme-hope.vuejs.press/guide/interface/theme-color.html#setting-default-theme-color).

You will need to update the file `docs/.vuepress/styles/palette.scss` with the dark color picked in the icon generator.

### `head` element customization

Head to `docs/.vuepress/configs/head/` folder to update each local file. The variables you need to update are found at the top of each file.

Just update them.

### `navbar` element customization

Head to `docs/.vuepress/configs/navbar/` folder to update each local file.

The sample menu show you a few example.

Not setting the `text` property for a link will default back to the page title.

The parent of a dropdown menu is not clickable.

## Want more

Let me know [in the issues on GitHub](https://github.com/Puzzlout/TemplateVuepress/issues) or head to the [theme documentation](https://theme-hope.vuejs.press/). It is well done.

## Netlify CMS

### Create a OAuth Application on GitHub

You will a _client ID_ and a _client secret_ before setting up the Netlify site.

[Go to your `Developer settings`](https://github.com/settings/developers).
Under `OAuth Apps`, add a _new OAuth App_ or `Register a new application`, if you have no application registered yet.

You will need to input:

- a application name
- the application's homepage URL: `https://my-app.netlify.app/`
- the authorization callbacl URL: set to `https://api.netlify.com/auth/done`

Copy the `Client ID` from the OAuth application settings.

Finally, click `` and copy the value generated. **It won't be given again!**

### Enable the Auth Provider

Make sure you've configured the API credentials for Github from the Access part of your Netlify site dashboard.

You can find it under: `Site settings` > `Access control` > `OAuth`.

Then,

- Install a provider,
- Choose `GitHub` since you just created a OAuth application on GitHub.
- Input the `Client ID` in the `Key` input and `Client secret` in the `Secret` input.

### Test it

Navigate to `https://my-app.netlify.app/admin`.

You will see a `Login with GitHub`.

Click it and authorize your account.

And you are done!
