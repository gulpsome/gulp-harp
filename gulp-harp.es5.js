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
  return pollen(anthers, _path2.default.join(__dirname, 'gulp-harp.json'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1bHAtaGFycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUdBLElBQUksT0FBTyx3QkFBVSxFQUFDLFlBQVksSUFBYixFQUFWLEVBQThCLE1BQTlCLENBQVg7QUFDQSxJQUFJLFNBQVMsc0JBQUssTUFBbEI7Ozs7QUFJQSxTQUFTLE1BQVQsQ0FBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSSxXQUFXLFFBQVEsS0FBUixDQUFmLEM7QUFDQSxNQUFJLE1BQU0sUUFBUSxHQUFSLENBQVksa0JBQVU7QUFDOUIsV0FBTyxPQUFPLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkIsU0FBUyxNQUFULENBQTdCLEdBQWdELE1BQXZELEM7QUFDRCxHQUZTLENBQVY7QUFHQSxTQUFPLDBCQUFXLEdBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVMsU0FBVCxDQUFvQixDQUFwQixFQUF1QjtBQUNyQixNQUFJLFVBQVUsQ0FBQyxNQUFELENBQWQsQztBQUNBLE1BQUksRUFBRSxJQUFGLENBQU8sSUFBWCxFQUFpQixRQUFRLElBQVIsQ0FBYSxXQUFiLEU7QUFDakIsVUFBUSxJQUFSLENBQWEsQ0FBYixFO0FBQ0EsU0FBTyxPQUFPLE9BQVAsRUFBZ0IsZUFBSyxJQUFMLENBQVUsU0FBVixFQUFxQixnQkFBckIsQ0FBaEIsQ0FBUDtBQUNEOzs7QUFHRCxTQUFTLE9BQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDbkIsU0FBTyxVQUFVLEVBQUUsY0FBRixDQUFpQixNQUFqQixJQUEyQixDQUEzQixHQUErQixFQUFDLE1BQU0sQ0FBUCxFQUF6QyxFQUFvRCxJQUEzRDtBQUNEOztBQUVELE9BQU8sT0FBUCxHQUFpQixVQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUI7QUFDbEMsTUFBSSxLQUFLLFFBQVEsQ0FBUixDQUFUOztBQUVBLE9BQUssSUFBTCxDQUFVLEdBQUcsSUFBYixFQUFtQixHQUFHLElBQXRCLEVBQTRCLFlBQU07QUFDaEMsU0FBSyxNQUFMLENBQVksR0FBRyxJQUFILElBQVcsUUFBUSxHQUFSLEVBQXZCLEVBQXNDO0FBQ3BDLFlBQU0sR0FBRztBQUQyQixLQUF0QyxFQUVHLFlBQU07QUFDUCxVQUFJLEdBQUcsSUFBUCxFQUFhO0FBQ1gsbUNBQUssR0FBRyxJQUFILENBQVEsT0FBYjtBQUNBLFlBQUksR0FBRyxJQUFILENBQVEsTUFBWixFQUFvQjtBQUNsQixjQUFJLEdBQUcsSUFBSCxDQUFRLE1BQVosRUFBb0I7O0FBRWxCLGlCQUFLLEtBQUwsQ0FBVyxHQUFHLElBQUgsQ0FBUSxNQUFuQixFQUEyQixFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFDLElBQUQsRUFBVTtBQUNoRCxxQkFBTyxLQUFLLElBQVosRUFBa0IsRUFBQyxRQUFRLElBQVQsRUFBbEI7QUFDRCxhQUZEO0FBR0Q7O0FBRUQsY0FBSSxlQUFlLEdBQUcsSUFBSCxDQUFRLE1BQVIsQ0FBZSxNQUFmLENBQ2pCLEdBQUcsSUFBSCxDQUFRLE1BQVIsQ0FBZSxHQUFmLENBQW1CO0FBQUEsbUJBQVksTUFBTSxRQUFOLEdBQWlCLFVBQTdCO0FBQUEsV0FBbkIsQ0FEaUIsQ0FBbkI7QUFHQSxlQUFLLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLFlBQU07QUFDN0I7QUFDRCxXQUZEO0FBR0Q7QUFDRjtBQUNGLEtBckJEO0FBc0JELEdBdkJEO0FBd0JELENBM0JEIiwiZmlsZSI6Imd1bHAtaGFycC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ByZWZxdWlyZX0gZnJvbSAnYmUtZ29vZHMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHN5bmMgZnJvbSAnYnJvd3Nlci1zeW5jJ1xuaW1wb3J0IHNvdXJjZWdhdGUgZnJvbSAnc291cmNlZ2F0ZSdcblxuLy8gTk9URTogZ3VscC1oYXJwIGlzIGEgZGVwZW5kZW5jeSBvZiB0aGUgcHJvamVjdCB1c2luZyB0aGlzXG5sZXQgaGFycCA9IHByZWZxdWlyZSh7Zm9yY2VMb2NhbDogdHJ1ZX0pKCdoYXJwJylcbmxldCByZWxvYWQgPSBzeW5jLnJlbG9hZFxuXG4vLyBUaGlzIGNhbWUgZnJvbSBndWxwc29tZS9iZS1nb29kcyB3aGVyZSB0aGVyZSB3YXMgYSBgcG9sbGVuLmpzb25gLi4uXG4vLyBUaGUganNvbiBtb3ZlZCBoZXJlIGFuZCBzaW5jZSB0aGVyZSBhcmUgbm8gb3RoZXIgdXNlLWNhc2VzLCBzbyBkaWQgdGhlIGNvZGUgdG9vLlxuZnVuY3Rpb24gcG9sbGVuIChhbnRoZXJzLCB3aGVyZSkge1xuICBsZXQgZmxhbWVudHMgPSByZXF1aXJlKHdoZXJlKSAvLyB8fCBwYXRoLm5vcm1hbGl6ZSgncG9sbGVuLmpzb24nKVxuICBsZXQgZ290ID0gYW50aGVycy5tYXAoc2VsZWN0ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHNlbGVjdCA9PT0gJ3N0cmluZycgPyBmbGFtZW50c1tzZWxlY3RdIDogc2VsZWN0IC8vIG9iamVjdCBhc3N1bWVkXG4gIH0pXG4gIHJldHVybiBzb3VyY2VnYXRlKGdvdClcbn1cblxuZnVuY3Rpb24gcG9sbGluYXRlIChvKSB7XG4gIGxldCBhbnRoZXJzID0gWydoYXJwJ10gLy8gdGhlcmUncyBhbHdheXMgaGFycCBoZXJlXG4gIGlmIChvLmhhcnAuc3luYykgYW50aGVycy5wdXNoKCdoYXJwLXN5bmMnKSAvLyBzeW5jIGlzIG9wdGlvbmFsXG4gIGFudGhlcnMucHVzaChvKSAvLyBmaW5hbGx5LCBwdXNoIHRoZSBnaXZlbiBvcHRpb25zIHRvIGJlIG1lcmdlZCBsYXN0XG4gIHJldHVybiBwb2xsZW4oYW50aGVycywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ2d1bHAtaGFycC5qc29uJykpXG59XG5cbi8vIE9wdGlvbnMgYXJlIGtleWVkIGFzIFwiaGFycFwiLCBmb3IgYmV2ZXJhZ2UgY29tcGF0aWJpbGl0eS5cbmZ1bmN0aW9uIG9wdGlvbnMgKG8pIHtcbiAgcmV0dXJuIHBvbGxpbmF0ZShvLmhhc093blByb3BlcnR5KCdoYXJwJykgPyBvIDoge2hhcnA6IG99KS5oYXJwXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGd1bHAsIG8pIHtcbiAgbGV0IGhvID0gb3B0aW9ucyhvKVxuXG4gIGd1bHAudGFzayhoby5uYW1lLCBoby5oZWxwLCAoKSA9PiB7XG4gICAgaGFycC5zZXJ2ZXIoaG8ucGF0aCB8fCBwcm9jZXNzLmN3ZCgpLCB7XG4gICAgICBwb3J0OiBoby5wb3J0XG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKGhvLnN5bmMpIHtcbiAgICAgICAgc3luYyhoby5zeW5jLm9wdGlvbnMpXG4gICAgICAgIGlmIChoby5zeW5jLnJlbG9hZCkge1xuICAgICAgICAgIGlmIChoby5zeW5jLnN0cmVhbSkge1xuICAgICAgICAgICAgLy8gc3RyZWFtaW5nIGNoYW5nZXNcbiAgICAgICAgICAgIGd1bHAud2F0Y2goaG8uc3luYy5zdHJlYW0pLm9uKCdjaGFuZ2UnLCAoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICByZWxvYWQoZmlsZS5wYXRoLCB7c3RyZWFtOiB0cnVlfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHJlbG9hZCBub24tc3RyZWFtaW5nIChhcHBlbmRlZCBleGNsdXNpb25zKVxuICAgICAgICAgIGxldCBub25TdHJlYW1pbmcgPSBoby5zeW5jLnJlbG9hZC5jb25jYXQoXG4gICAgICAgICAgICBoby5zeW5jLnN0cmVhbS5tYXAoc3RyZWFtZWQgPT4gJyEnICsgc3RyZWFtZWQgKyAnKyh8Lm1hcCknKVxuICAgICAgICAgIClcbiAgICAgICAgICBndWxwLndhdGNoKG5vblN0cmVhbWluZywgKCkgPT4ge1xuICAgICAgICAgICAgcmVsb2FkKClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cbiJdfQ==