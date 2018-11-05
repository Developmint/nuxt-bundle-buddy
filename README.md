# Nuxt Bundle Buddy - Don't fight your webpack bundle, become friends!
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-bundle-buddy/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-bundle-buddy)
[![npm](https://img.shields.io/npm/dt/nuxt-bundle-buddy.svg?style=flat-square)](https://npmjs.com/package/nuxt-bundle-buddy)
[![Build Status](https://travis-ci.com/Developmint/nuxt-bundle-buddy.svg?branch=master)](https://travis-ci.com/Developmint/nuxt-bundle-buddy)
[![codecov](https://codecov.io/gh/Developmint/nuxt-bundle-buddy/branch/master/graph/badge.svg)](https://codecov.io/gh/Developmint/nuxt-bundle-buddy)
[![Dependencies](https://david-dm.org/Developmint/nuxt-bundle-buddy/status.svg?style=flat-square)](https://david-dm.org/Developmint/nuxt-bundle-buddy)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)
[![thanks](https://img.shields.io/badge/thanks-%E2%99%A5-ff69b4.svg)](https://thanks.lichter.io/)

![example](https://pbs.twimg.com/media/DrGbS53XcAIY2P_.jpg:large)

[📖 **Release Notes**](./CHANGELOG.md)

## Features

* Analyzes your bundle and visualize improvement opportunities
* Built on top of [bundle-buddy](https://github.com/samccone/bundle-buddy)
* Fully tested!
* Nuxt 2 support

## Setup

- Install [`bundle-buddy`](https://github.com/samccone/bundle-buddy) globally,
**otherwise you won't see anything**
- Add the `nuxt-bundle-buddy` dependency using yarn or npm to your project
- Add `nuxt-bundle-buddy` to `modules` section of `nuxt.config.js`:

```js
{
  modules: [
    'nuxt-bundle-buddy',
  ],

  bundleBuddy: {
   // your settings here
   // Usually you don't need any though, so you can fully omit the
   // bundleBuddy object
  }
}
```

- Run a Nuxt analyze build (`yarn build --analyze` or `npm run build -- --analyze`)

## Options


```js
// file: nuxt.config.js
export default {
  bundleBuddy: {
    removeDefaultAnalyzer: true // disable to keep default webpack analyzer
  }
}
```

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Alexander Lichter
