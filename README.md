Prospero
================

A IIIF Presentation API 2.0 Reader created with Backbone.js & Marionette.js.

## Quick start

[Clone](http://git-scm.com/docs/git-clone) or [download](https://github.com/sdellis/prospero2/archive/master.zip) this repo.

```sh
git clone git@github.com:sdellis/prospero2.git && cd prospero2
```

Make sure [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) are
[installed](http://nodejs.org/download/).

```sh
npm install
npm install -g gulp
gulp
```

Once that's done, open up http://localhost:9000/ in your browser.

## Guide

There are additional `README.md` files all throughout the application. However, the documentation is a work in progress.

As a general rule, be sure to read through all of the source code yourself and make sure you understand what is happening.

| Directories | Purpose |
| ---:|:--- |
| [api](./api) | Mock api routes |
| [dist](./dist) | Built assets |
| [lib](./lib) | Libraries (only ones not on npm) |
| [src](./src) | Source files |
| [test](./test) | Test files |

===

&copy; 2015 Shaun Ellis. Distributed under [ISC license](LICENSE.md).
Based on James Kyle's Marionette Wires, also distributed under [ISC license](LICENSE.md).
