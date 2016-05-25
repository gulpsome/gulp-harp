# gulp-harp

Successor of [statica](https://github.com/orlin/statica).
Reloads with [browser-sync](http://www.browsersync.io).

Compass.rb is out of scope here, this being a Node.js module, though there is [an example](https://github.com/astrolet/astrolet.co) demonstrating seamless workflow.

## Use

[![NPM](https://nodei.co/npm/gulp-harp.png?mini=true)](https://www.npmjs.org/package/gulp-harp)

Best used with [beverage](https://github.com/gulpsome/beverage) though it works fine just with `gulp`.  In either case, here is an example `gulpfile.js`:

```javascript
var gulp = require('beverage')(require('gulp'), {
  "harp": {
    // options
  }
});
```

You will have to install `gulp`, `harp`, and `gulp-harp` as dependencies (better `devDependencies`) or will be reminded about it anyway.

### Options

Here are some options for example:

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

If you look at the defaults in `gulp-harp.json`, please note that the structure is slightly different, so don't get mislead to copy from it verbatim.

### Examples

See this deployed [astrolet.co](https://github.com/astrolet/astrolet.co) site for demo / source code example.

## Develop [![Dependency Status](https://david-dm.org/gulpsome/gulp-harp.svg)](https://david-dm.org/gulpsome/gulp-harp) [![devDependency Status](https://david-dm.org/gulpsome/gulp-harp/dev-status.svg)](https://david-dm.org/gulpsome/gulp-harp#info=devDependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License

[MIT](http://orlin.mit-license.org)
