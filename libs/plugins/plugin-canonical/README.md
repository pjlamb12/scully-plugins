<p align="center">
 <img width="20%" height="20%" src="https://raw.githubusercontent.com/pjlamb12/scully-plugin-canonical/main/logo.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

# Scully Canonical Plugin

The purpose of the Scully canonical plugin is to take a canonical link attribute from a route and replace the value of the canonical link in the head of a page, or add the link tag if it doesn't exist. This is needed for SEO purposes, if a given article was first published on another site, for example.

## Features

- ✅ Replaces the canonical link with the provided URL for the link tag
- ✅ Adds a canonical link tag if one doesn't exist for a page

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

## Installation

### NPM

`npm install scully-plugin-canonical --save-dev`

### Yarn

`yarn add scully-plugin-canonical --dev`

## Usage

Render plugins get access to information about the route, and the plugin looks for the title in the following locations in order:

- `route.canonical`
- `route.data.canonical`
- `route.canonicalUrl`
- `route.data.canonicalUrl`
- `route.canonical_url`
- `route.data.canonical_url`

> If the canonical url is set in the frontmatter of a markdown file, the attribute shows up on `route.data`.

To use this plugin, you need to just require the package inside the Scully `config.ts` for your project, i.e. `scully.your-project-name.config.ts`. After requiring the plugin, add it to the `defaultPostRenderers` array for the site:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-canonical');

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'your-project-name',
	outDir: './dist/static',
	routes: {},
	defaultPostRenderers: ['setCanonicalLinkPlugin'],
};
```

If you only want it to be added to some routes, add it like this:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-canonical');

export const config: ScullyConfig = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      },
      postRenderers: ['setCanonicalLinkPlugin']
    }
  }
  ...
};
```

That's all it takes for the plugin to be included and run on the pages in your app.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Logo Attribution

<div>Logo made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>