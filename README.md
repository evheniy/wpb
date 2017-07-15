# Webpack Builder

[![NPM](https://nodei.co/npm/wpb.png)](https://npmjs.org/package/wpb)

[![npm version](https://badge.fury.io/js/wpb.svg)](https://badge.fury.io/js/wpb)
[![Build Status](https://travis-ci.org/evheniy/wpb.svg?branch=master)](https://travis-ci.org/evheniy/wpb)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/wpb/badge.svg?branch=master)](https://coveralls.io/github/evheniy/wpb?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/wpb/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/wpb/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/wpb)

[![Dependency Status](https://david-dm.org/evheniy/wpb.svg)](https://david-dm.org/evheniy/wpb)
[![devDependency Status](https://david-dm.org/evheniy/wpb/dev-status.svg)](https://david-dm.org/evheniy/wpb#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/wpb)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/wpb/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/wpb.svg)](https://github.com/evheniy/wpb/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/wpb.svg)](https://github.com/evheniy/wpb/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/wpb.svg)](https://github.com/evheniy/wpb/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/wpb.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

## How to install

    npm i -S wpb
    
Or global:

    npm i -g wpb
    
## How to use

* using webpack
* like bandler
* .wpbrc

.browserslistrc

    > 1%
    Last 2 versions
    IE >= 8
    
.babelrc

    {
      "presets": [
        "env",
        "react"
      ]
    }

## Debug

    DEBUG=wpb:* npm run test:code
