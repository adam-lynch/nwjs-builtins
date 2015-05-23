nwjs-builtins
===

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Windows Build Status][appveyor-image]][appveyor-url] [![Dependency Status][depstat-image]][depstat-url]

---

A list of [NW.js](https://github.com/nwjs/nw.js) built-ins. E.g. nw.gui, etc.

### Installation

```shell
npm install --save nwjs-builtins
```

### Usage

```JavaScript
var builtins = require('nwjs-builtins');
console.log(builtins);
// [..., 'nw.gui', ...]
```

[npm-url]: https://npmjs.org/package/nwjs-builtins
[npm-image]: http://img.shields.io/npm/v/nwjs-builtins.svg?style=flat

[travis-url]: http://travis-ci.org/adam-lynch/nwjs-builtins
[travis-image]: http://img.shields.io/travis/adam-lynch/nwjs-builtins.svg?style=flat

[appveyor-url]: https://ci.appveyor.com/project/adam-lynch/nwjs-builtins/branch/master
[appveyor-image]: https://ci.appveyor.com/api/projects/status/9hv1ts9fm2g8d6rj/branch/master?svg=true

[depstat-url]: https://david-dm.org/adam-lynch/nwjs-builtins
[depstat-image]: https://david-dm.org/adam-lynch/nwjs-builtins.svg?style=flat