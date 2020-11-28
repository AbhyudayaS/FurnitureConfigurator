# Car Configurator

A 3D model viewing website created using [ThreeJs](https://threejs.org/) library combined with [Babel 7](https://babeljs.io/), [Webpack 4](https://webpack.js.org/), [PostCSS](https://postcss.org/), [Jest](https://jestjs.io/), [ESLint](https://eslint.org/), and [Stylelint](https://stylelint.io/).

# Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)

# Folder structure

Below is the folder structure.

```
src
└── css
│    ├── all
│    └── styles.css
└── helpers
├── index.js
└── index.spec.js
public
├── assets
├── favicon.ico
└── index.html
```

Add your styles to the `all` folder and use the `@import` to add to the [styles.css](src/css/styles.css) file.

Add your assets, such as images to the [assets](public/assets) folder.

The [index.js](src/index.js) is the main JavaScript file, import all libraries there.

The [helpers/set-message/index.spec.js](src/helpers/set-message/index.spec.js) is a sample of how to test using Jest.

Import files using the `'@'` alias, example of this in this app is via the [helpers](src/helpers) functions inside the [index.js](src/index.js) file.

Edit the [index.html](public/index.html) in the public folder to suite your needs.

Replace the [favicon.ico](public/favicon.ico) with your own icon.

# Configuration

You may change a few configuration for Webpack within the [config.js](config.js) file within the root folder (default settings below).

```
  const hostName = 'localhost';
  const portNumber = 9000;
  const jsOutput = './assets/js/bundle.js';
  const cssOutput = './assets/css/styles.css';
```

Changes to Webpack configurations may be made within the [config](config) folder.

# To Use

## Install dependencies

```sh
  npm install
```

## Server

```sh
  npm run serve
```

This will create a server at `http://localhost:9000/` or at the port number specified in the [config.js](config.js) file.

## Build

```sh
  npm run build
```