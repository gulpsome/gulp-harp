'use strict';

var _beGoods = require('be-goods');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _sourcegate = require('sourcegate');

var _sourcegate2 = _interopRequireDefault(_sourcegate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: gulp-harp is a dependency of the project using this
var harp = (0, _beGoods.prefquire)({ forceLocal: true })('harp');
var reload = _browserSync2.default.reload;

// This came from gulpsome/be-goods where there was a `pollen.json`...
// The json moved here and since there are no other use-cases, so did the code too.
function pollen(anthers, where) {
  var flaments = require(where); // || path.normalize('pollen.json')
  var got = anthers.map(function (select) {
    return typeof select === 'string' ? flaments[select] : select; // object assumed
  });
  return (0, _sourcegate2.default)(got);
}

function pollinate(o) {
  var anthers = ['harp']; // there's always harp here
  if (o.harp.sync) anthers.push('harp-sync'); // sync is optional
  anthers.push(o); // finally, push the given options to be merged last
  return pollen(anthers, _path2.default.join(__dirname, 'index.json'));
}

// Options are keyed as "harp", for beverage compatibility.
function options(o) {
  return pollinate(o.hasOwnProperty('harp') ? o : { harp: o }).harp;
}

module.exports = function (gulp, o) {
  var ho = options(o);

  gulp.task(ho.name, ho.help, function () {
    harp.server(ho.path || process.cwd(), {
      port: ho.port
    }, function () {
      if (ho.sync) {
        (0, _browserSync2.default)(ho.sync.options);
        if (ho.sync.reload) {
          if (ho.sync.stream) {
            // streaming changes
            gulp.watch(ho.sync.stream).on('change', function (file) {
              reload(file.path, { stream: true });
            });
          }
          // reload non-streaming (appended exclusions)
          var nonStreaming = ho.sync.reload.concat(ho.sync.stream.map(function (streamed) {
            return '!' + streamed + '+(|.map)';
          }));
          gulp.watch(nonStreaming, function () {
            reload();
          });
        }
      }
    });
  });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1bHAtaGFycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUdBLElBQUksT0FBTyx3QkFBVSxFQUFDLFlBQVksSUFBYixFQUFWLEVBQThCLE1BQTlCLENBQVg7QUFDQSxJQUFJLFNBQVMsc0JBQUssTUFBbEI7Ozs7QUFJQSxTQUFTLE1BQVQsQ0FBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSSxXQUFXLFFBQVEsS0FBUixDQUFmLEM7QUFDQSxNQUFJLE1BQU0sUUFBUSxHQUFSLENBQVksa0JBQVU7QUFDOUIsV0FBTyxPQUFPLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkIsU0FBUyxNQUFULENBQTdCLEdBQWdELE1BQXZELEM7QUFDRCxHQUZTLENBQVY7QUFHQSxTQUFPLDBCQUFXLEdBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVMsU0FBVCxDQUFvQixDQUFwQixFQUF1QjtBQUNyQixNQUFJLFVBQVUsQ0FBQyxNQUFELENBQWQsQztBQUNBLE1BQUksRUFBRSxJQUFGLENBQU8sSUFBWCxFQUFpQixRQUFRLElBQVIsQ0FBYSxXQUFiLEU7QUFDakIsVUFBUSxJQUFSLENBQWEsQ0FBYixFO0FBQ0EsU0FBTyxPQUFPLE9BQVAsRUFBZ0IsZUFBSyxJQUFMLENBQVUsU0FBVixFQUFxQixZQUFyQixDQUFoQixDQUFQO0FBQ0Q7OztBQUdELFNBQVMsT0FBVCxDQUFrQixDQUFsQixFQUFxQjtBQUNuQixTQUFPLFVBQVUsRUFBRSxjQUFGLENBQWlCLE1BQWpCLElBQTJCLENBQTNCLEdBQStCLEVBQUMsTUFBTSxDQUFQLEVBQXpDLEVBQW9ELElBQTNEO0FBQ0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLFVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQjtBQUNsQyxNQUFJLEtBQUssUUFBUSxDQUFSLENBQVQ7O0FBRUEsT0FBSyxJQUFMLENBQVUsR0FBRyxJQUFiLEVBQW1CLEdBQUcsSUFBdEIsRUFBNEIsWUFBTTtBQUNoQyxTQUFLLE1BQUwsQ0FBWSxHQUFHLElBQUgsSUFBVyxRQUFRLEdBQVIsRUFBdkIsRUFBc0M7QUFDcEMsWUFBTSxHQUFHO0FBRDJCLEtBQXRDLEVBRUcsWUFBTTtBQUNQLFVBQUksR0FBRyxJQUFQLEVBQWE7QUFDWCxtQ0FBSyxHQUFHLElBQUgsQ0FBUSxPQUFiO0FBQ0EsWUFBSSxHQUFHLElBQUgsQ0FBUSxNQUFaLEVBQW9CO0FBQ2xCLGNBQUksR0FBRyxJQUFILENBQVEsTUFBWixFQUFvQjs7QUFFbEIsaUJBQUssS0FBTCxDQUFXLEdBQUcsSUFBSCxDQUFRLE1BQW5CLEVBQTJCLEVBQTNCLENBQThCLFFBQTlCLEVBQXdDLFVBQUMsSUFBRCxFQUFVO0FBQ2hELHFCQUFPLEtBQUssSUFBWixFQUFrQixFQUFDLFFBQVEsSUFBVCxFQUFsQjtBQUNELGFBRkQ7QUFHRDs7QUFFRCxjQUFJLGVBQWUsR0FBRyxJQUFILENBQVEsTUFBUixDQUFlLE1BQWYsQ0FDakIsR0FBRyxJQUFILENBQVEsTUFBUixDQUFlLEdBQWYsQ0FBbUI7QUFBQSxtQkFBWSxNQUFNLFFBQU4sR0FBaUIsVUFBN0I7QUFBQSxXQUFuQixDQURpQixDQUFuQjtBQUdBLGVBQUssS0FBTCxDQUFXLFlBQVgsRUFBeUIsWUFBTTtBQUM3QjtBQUNELFdBRkQ7QUFHRDtBQUNGO0FBQ0YsS0FyQkQ7QUFzQkQsR0F2QkQ7QUF3QkQsQ0EzQkQiLCJmaWxlIjoiZ3VscC1oYXJwLmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJlZnF1aXJlfSBmcm9tICdiZS1nb29kcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgc3luYyBmcm9tICdicm93c2VyLXN5bmMnXG5pbXBvcnQgc291cmNlZ2F0ZSBmcm9tICdzb3VyY2VnYXRlJ1xuXG4vLyBOT1RFOiBndWxwLWhhcnAgaXMgYSBkZXBlbmRlbmN5IG9mIHRoZSBwcm9qZWN0IHVzaW5nIHRoaXNcbmxldCBoYXJwID0gcHJlZnF1aXJlKHtmb3JjZUxvY2FsOiB0cnVlfSkoJ2hhcnAnKVxubGV0IHJlbG9hZCA9IHN5bmMucmVsb2FkXG5cbi8vIFRoaXMgY2FtZSBmcm9tIGd1bHBzb21lL2JlLWdvb2RzIHdoZXJlIHRoZXJlIHdhcyBhIGBwb2xsZW4uanNvbmAuLi5cbi8vIFRoZSBqc29uIG1vdmVkIGhlcmUgYW5kIHNpbmNlIHRoZXJlIGFyZSBubyBvdGhlciB1c2UtY2FzZXMsIHNvIGRpZCB0aGUgY29kZSB0b28uXG5mdW5jdGlvbiBwb2xsZW4gKGFudGhlcnMsIHdoZXJlKSB7XG4gIGxldCBmbGFtZW50cyA9IHJlcXVpcmUod2hlcmUpIC8vIHx8IHBhdGgubm9ybWFsaXplKCdwb2xsZW4uanNvbicpXG4gIGxldCBnb3QgPSBhbnRoZXJzLm1hcChzZWxlY3QgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygc2VsZWN0ID09PSAnc3RyaW5nJyA/IGZsYW1lbnRzW3NlbGVjdF0gOiBzZWxlY3QgLy8gb2JqZWN0IGFzc3VtZWRcbiAgfSlcbiAgcmV0dXJuIHNvdXJjZWdhdGUoZ290KVxufVxuXG5mdW5jdGlvbiBwb2xsaW5hdGUgKG8pIHtcbiAgbGV0IGFudGhlcnMgPSBbJ2hhcnAnXSAvLyB0aGVyZSdzIGFsd2F5cyBoYXJwIGhlcmVcbiAgaWYgKG8uaGFycC5zeW5jKSBhbnRoZXJzLnB1c2goJ2hhcnAtc3luYycpIC8vIHN5bmMgaXMgb3B0aW9uYWxcbiAgYW50aGVycy5wdXNoKG8pIC8vIGZpbmFsbHksIHB1c2ggdGhlIGdpdmVuIG9wdGlvbnMgdG8gYmUgbWVyZ2VkIGxhc3RcbiAgcmV0dXJuIHBvbGxlbihhbnRoZXJzLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAnaW5kZXguanNvbicpKVxufVxuXG4vLyBPcHRpb25zIGFyZSBrZXllZCBhcyBcImhhcnBcIiwgZm9yIGJldmVyYWdlIGNvbXBhdGliaWxpdHkuXG5mdW5jdGlvbiBvcHRpb25zIChvKSB7XG4gIHJldHVybiBwb2xsaW5hdGUoby5oYXNPd25Qcm9wZXJ0eSgnaGFycCcpID8gbyA6IHtoYXJwOiBvfSkuaGFycFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChndWxwLCBvKSB7XG4gIGxldCBobyA9IG9wdGlvbnMobylcblxuICBndWxwLnRhc2soaG8ubmFtZSwgaG8uaGVscCwgKCkgPT4ge1xuICAgIGhhcnAuc2VydmVyKGhvLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSwge1xuICAgICAgcG9ydDogaG8ucG9ydFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmIChoby5zeW5jKSB7XG4gICAgICAgIHN5bmMoaG8uc3luYy5vcHRpb25zKVxuICAgICAgICBpZiAoaG8uc3luYy5yZWxvYWQpIHtcbiAgICAgICAgICBpZiAoaG8uc3luYy5zdHJlYW0pIHtcbiAgICAgICAgICAgIC8vIHN0cmVhbWluZyBjaGFuZ2VzXG4gICAgICAgICAgICBndWxwLndhdGNoKGhvLnN5bmMuc3RyZWFtKS5vbignY2hhbmdlJywgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmVsb2FkKGZpbGUucGF0aCwge3N0cmVhbTogdHJ1ZX0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWxvYWQgbm9uLXN0cmVhbWluZyAoYXBwZW5kZWQgZXhjbHVzaW9ucylcbiAgICAgICAgICBsZXQgbm9uU3RyZWFtaW5nID0gaG8uc3luYy5yZWxvYWQuY29uY2F0KFxuICAgICAgICAgICAgaG8uc3luYy5zdHJlYW0ubWFwKHN0cmVhbWVkID0+ICchJyArIHN0cmVhbWVkICsgJysofC5tYXApJylcbiAgICAgICAgICApXG4gICAgICAgICAgZ3VscC53YXRjaChub25TdHJlYW1pbmcsICgpID0+IHtcbiAgICAgICAgICAgIHJlbG9hZCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG4iXX0=