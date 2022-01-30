<p align="center">
 <img width="20%" height="20%" src="https://raw.githubusercontent.com/pjlamb12/scully-plugin-page-title/main/logo.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

# Scully Page Title Plugin

The purpose of the Scully Page Title plugin is to replace a page's title with whatever is provided on the route data. For blog posts, this could be the title of the blog post. This will help with SEO on blog posts and pages in your application.

## Features

- ✅ Replaces page title with the title from the route data
- ✅ Improves site SEO

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

## Installation

### NPM

`npm install scully-plugin-page-title --save-dev`

### Yarn

`yarn add scully-plugin-page-title --dev`

## Usage

Render plugins get access to information about the route, and the plugin looks for the title in the following locations in order:

- `route.title`
- `route.data.title`
- `route.pageTitle`
- `route.data.pageTitle`
- `route.page_title`
- `route.data.page_title`

> If the title is set in the frontmatter of a markdown file, the attribute shows up on `route.data`.

To use this plugin, you need to just require the package inside the Scully `config.ts` for your project, i.e. `scully.your-project-name.config.ts`. After requiring the plugin, add it to the `defaultPostRenderers` array for the site:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-page-title');

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'your-project-name',
	outDir: './dist/static',
	routes: {},
	defaultPostRenderers: ['changeTitlePlugin'],
};
```

If you only want it to be added to some routes, add it like this:

```ts
// scully.your-project-name.config.ts
require('scully-plugin-page-title');

export const config: ScullyConfig = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      },
      postRenderers: ['changeTitlePlugin']
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
<table>
  <tr>
    <td align="center"><a href="https://github.com/pjlamb12"><img src="https://avatars3.githubusercontent.com/u/2006222?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Preston Lamb</b></sub></a><br /><a href="https://github.com/pjlamb12/scully-plugin-page-title/commits?author=pjlamb12" title="Code">💻</a> <a href="https://github.com/pjlamb12/scully-plugin-page-title/commits?author=pjlamb12" title="Documentation">📖</a> <a href="https://github.com/pjlamb12/scully-plugin-page-title/commits?author=pjlamb12" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
