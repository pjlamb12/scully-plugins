<p align="center">
 <img width="20%" height="20%" src="https://raw.githubusercontent.com/pjlamb12/scully-plugin-amp-css/main/logo.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

# Scully AMP CSS Plugin

The purpose of the Scully AMP CSS plugin is to take all `style` tags from rendered pages and combine them into a single style tag located in the `head` tag of a given page. This is a requirement for AMP pages given by Google. [This talk here](https://www.loom.com/share/35330a858cd741ba92e8be0c0496ffbb) talks in some part about this requirement. Scully makes this relatively easy because after each page is rendered, a plugin can be run to do something to that page; in this case to combine all the styles into a single `style` tag.

## Features

- ✅ Combines the contents of all `style` tags into a single `style` tag
- ✅ Puts the combined styles into the document's `head` tag
- ✅ Removes all the extra `style` tags

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

## Installation

### NPM

`npm install scully-plugin-amp-css --save-dev`

### Yarn

`yarn add scully-plugin-amp-css --dev`

## Usage

To use this plugin, you need to just require the package inside the Scully `config.ts` for your project, i.e. `scully.your-project-name.config.ts`. After requiring the plugin, add it to the `defaultPostRenderers` array for the desired routes that the plugin should be run on. In most (if not all cases), this would be on all routes, but you need to add it to those routes for it to work.

```ts
// scully.your-project-name.config.ts
require('scully-plugin-amp-css');

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'your-project-name',
	outDir: './dist/static',
	routes: {},
	defaultPostRenderers: ['combineStylesAmpPlugin'],
};
```

That's all it takes for the plugin to be included and run on the pages in your app.

**_Make sure to run include this plugin before other CSS plugins, like the [critical CSS plugin](https://www.npmjs.com/package/@scullyio/scully-plugin-critical-css)._**

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.prestonlamb.com"><img src="https://avatars3.githubusercontent.com/u/2006222?v=4" width="100px;" alt=""/><br /><sub><b>Preston Lamb</b></sub></a><br /><a href="https://github.com/pjlamb12/scully-plugin-amp-css/commits?author=pjlamb12" title="Documentation">📖</a> <a href="https://github.com/pjlamb12/scully-plugin-amp-css/commits?author=pjlamb12" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
