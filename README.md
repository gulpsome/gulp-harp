# gulp-harp

Successor of [statica](https://github.com/orlin/statica).
Reloads with [browser-sync](http://www.browsersync.io).
Compass is out of scope, though there's a solution.

## Use

[![NPM](https://nodei.co/npm/gulp-harp.png?mini=true)](https://www.npmjs.org/package/gulp-harp)

Best used with [beverage](https://github.com/gulpsome/beverage) though it works fine just with `gulp`.  In either case, here is an example `gulpfile.js`:

```javascript
var gulp = require('gulp-harp')(require('gulp'), {
  // options
});
```

### Options

The options could be:

```javascript
{ "name": "serve", // the gulp task name
  "help": "Harp-serve src & browser-sync",
  "path": "src", // the site's root dir
  "port": 9000,
  "sync": { // passed on to browser-sync
    "proxy": "localhost:9000",
    "open": false,
    "notify": false
    "reload": [ // no default - must provide paths to reload
      "src/**/*"
    ],
    "stream": [ // don't reload the whole page for these ...
      "src/**/*.css"
    ]
}
```

### Example

See gulp-harp in use by [astrolet.co](https://github.com/astrolet/astrolet.co) and soon other projects.

## Develop [![Dependency Status](https://david-dm.org/gulpsome/gulp-harp.svg)](https://david-dm.org/gulpsome/gulp-harp) [![devDependency Status](https://david-dm.org/gulpsome/gulp-harp/dev-status.svg)](https://david-dm.org/gulpsome/gulp-harp#info=devDependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License

[MIT](http://orlin.mit-license.org)
