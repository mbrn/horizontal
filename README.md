# horizontal

[![Build Status](https://travis-ci.org/mbrn/horizontal.svg?branch=master)](https://travis-ci.org/mbrn/horizontal)
[![npm package](https://img.shields.io/npm/v/horizontal/latest.svg)](https://www.npmjs.com/package/horizontal)
[![NPM Downloads](https://img.shields.io/npm/dt/horizontal.svg?style=flat)](https://npmcharts.com/compare/horizontal?minimal=true)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/mbrn/horizontal.svg)](http://isitmaintained.com/project/mbrn/horizontal "Average time to resolve an issue")
[![Follow on Twitter](https://img.shields.io/twitter/follow/baranmehmet.svg?label=follow+baranmehmet)](https://twitter.com/baranmehmet)

A package that analyze and gives information about browser width such as screen type (XS, SM, MD, LG)

## Installation

To install horizontal with `npm`:

    npm install horizontal --save

To install horizontal with `yarn`:

    yarn add horizontal


## Usage

```js
import { Horizontal, ScreenType } from 'horizontal'

// Set defaults
// Horizontal.setDefaults(600, 900, 1100); xs < 600, sm < 900, md < 1100

if(Horizontal.getType() == ScreenType.MD) {
  // screen is medium size
}

const data = Horizontal.getData();
console.log(data.width); // Available width of window


```

## Contributing

We'd love to have your helping hand on `horizontal`! See [CONTRIBUTING.md](https://github.com/mbrn/horizontal/blob/master/CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
