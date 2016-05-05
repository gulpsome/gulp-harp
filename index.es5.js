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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7O0FBR0EsSUFBSSxPQUFPLHdCQUFVLEVBQUMsWUFBWSxJQUFiLEVBQVYsRUFBOEIsTUFBOUIsQ0FBWDtBQUNBLElBQUksU0FBUyxzQkFBSyxNQUFsQjs7OztBQUlBLFNBQVMsTUFBVCxDQUFpQixPQUFqQixFQUEwQixLQUExQixFQUFpQztBQUMvQixNQUFJLFdBQVcsUUFBUSxLQUFSLENBQWYsQztBQUNBLE1BQUksTUFBTSxRQUFRLEdBQVIsQ0FBWSxrQkFBVTtBQUM5QixXQUFPLE9BQU8sTUFBUCxLQUFrQixRQUFsQixHQUE2QixTQUFTLE1BQVQsQ0FBN0IsR0FBZ0QsTUFBdkQsQztBQUNELEdBRlMsQ0FBVjtBQUdBLFNBQU8sMEJBQVcsR0FBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxTQUFULENBQW9CLENBQXBCLEVBQXVCO0FBQ3JCLE1BQUksVUFBVSxDQUFDLE1BQUQsQ0FBZCxDO0FBQ0EsTUFBSSxFQUFFLElBQUYsQ0FBTyxJQUFYLEVBQWlCLFFBQVEsSUFBUixDQUFhLFdBQWIsRTtBQUNqQixVQUFRLElBQVIsQ0FBYSxDQUFiLEU7QUFDQSxTQUFPLE9BQU8sT0FBUCxFQUFnQixlQUFLLElBQUwsQ0FBVSxTQUFWLEVBQXFCLFlBQXJCLENBQWhCLENBQVA7QUFDRDs7O0FBR0QsU0FBUyxPQUFULENBQWtCLENBQWxCLEVBQXFCO0FBQ25CLFNBQU8sVUFBVSxFQUFFLGNBQUYsQ0FBaUIsTUFBakIsSUFBMkIsQ0FBM0IsR0FBK0IsRUFBQyxNQUFNLENBQVAsRUFBekMsRUFBb0QsSUFBM0Q7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsVUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CO0FBQ2xDLE1BQUksS0FBSyxRQUFRLENBQVIsQ0FBVDs7QUFFQSxPQUFLLElBQUwsQ0FBVSxHQUFHLElBQWIsRUFBbUIsR0FBRyxJQUF0QixFQUE0QixZQUFNO0FBQ2hDLFNBQUssTUFBTCxDQUFZLEdBQUcsSUFBSCxJQUFXLFFBQVEsR0FBUixFQUF2QixFQUFzQztBQUNwQyxZQUFNLEdBQUc7QUFEMkIsS0FBdEMsRUFFRyxZQUFNO0FBQ1AsVUFBSSxHQUFHLElBQVAsRUFBYTtBQUNYLG1DQUFLLEdBQUcsSUFBSCxDQUFRLE9BQWI7QUFDQSxZQUFJLEdBQUcsSUFBSCxDQUFRLE1BQVosRUFBb0I7QUFDbEIsY0FBSSxHQUFHLElBQUgsQ0FBUSxNQUFaLEVBQW9COztBQUVsQixpQkFBSyxLQUFMLENBQVcsR0FBRyxJQUFILENBQVEsTUFBbkIsRUFBMkIsRUFBM0IsQ0FBOEIsUUFBOUIsRUFBd0MsVUFBQyxJQUFELEVBQVU7QUFDaEQscUJBQU8sS0FBSyxJQUFaLEVBQWtCLEVBQUMsUUFBUSxJQUFULEVBQWxCO0FBQ0QsYUFGRDtBQUdEOztBQUVELGNBQUksZUFBZSxHQUFHLElBQUgsQ0FBUSxNQUFSLENBQWUsTUFBZixDQUNqQixHQUFHLElBQUgsQ0FBUSxNQUFSLENBQWUsR0FBZixDQUFtQjtBQUFBLG1CQUFZLE1BQU0sUUFBTixHQUFpQixVQUE3QjtBQUFBLFdBQW5CLENBRGlCLENBQW5CO0FBR0EsZUFBSyxLQUFMLENBQVcsWUFBWCxFQUF5QixZQUFNO0FBQzdCO0FBQ0QsV0FGRDtBQUdEO0FBQ0Y7QUFDRixLQXJCRDtBQXNCRCxHQXZCRDtBQXdCRCxDQTNCRCIsImZpbGUiOiJpbmRleC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ByZWZxdWlyZX0gZnJvbSAnYmUtZ29vZHMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHN5bmMgZnJvbSAnYnJvd3Nlci1zeW5jJ1xuaW1wb3J0IHNvdXJjZWdhdGUgZnJvbSAnc291cmNlZ2F0ZSdcblxuLy8gTk9URTogZ3VscC1oYXJwIGlzIGEgZGVwZW5kZW5jeSBvZiB0aGUgcHJvamVjdCB1c2luZyB0aGlzXG5sZXQgaGFycCA9IHByZWZxdWlyZSh7Zm9yY2VMb2NhbDogdHJ1ZX0pKCdoYXJwJylcbmxldCByZWxvYWQgPSBzeW5jLnJlbG9hZFxuXG4vLyBUaGlzIGNhbWUgZnJvbSBndWxwc29tZS9iZS1nb29kcyB3aGVyZSB0aGVyZSB3YXMgYSBgcG9sbGVuLmpzb25gLi4uXG4vLyBUaGUganNvbiBtb3ZlZCBoZXJlIGFuZCBzaW5jZSB0aGVyZSBhcmUgbm8gb3RoZXIgdXNlLWNhc2VzLCBzbyBkaWQgdGhlIGNvZGUgdG9vLlxuZnVuY3Rpb24gcG9sbGVuIChhbnRoZXJzLCB3aGVyZSkge1xuICBsZXQgZmxhbWVudHMgPSByZXF1aXJlKHdoZXJlKSAvLyB8fCBwYXRoLm5vcm1hbGl6ZSgncG9sbGVuLmpzb24nKVxuICBsZXQgZ290ID0gYW50aGVycy5tYXAoc2VsZWN0ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHNlbGVjdCA9PT0gJ3N0cmluZycgPyBmbGFtZW50c1tzZWxlY3RdIDogc2VsZWN0IC8vIG9iamVjdCBhc3N1bWVkXG4gIH0pXG4gIHJldHVybiBzb3VyY2VnYXRlKGdvdClcbn1cblxuZnVuY3Rpb24gcG9sbGluYXRlIChvKSB7XG4gIGxldCBhbnRoZXJzID0gWydoYXJwJ10gLy8gdGhlcmUncyBhbHdheXMgaGFycCBoZXJlXG4gIGlmIChvLmhhcnAuc3luYykgYW50aGVycy5wdXNoKCdoYXJwLXN5bmMnKSAvLyBzeW5jIGlzIG9wdGlvbmFsXG4gIGFudGhlcnMucHVzaChvKSAvLyBmaW5hbGx5LCBwdXNoIHRoZSBnaXZlbiBvcHRpb25zIHRvIGJlIG1lcmdlZCBsYXN0XG4gIHJldHVybiBwb2xsZW4oYW50aGVycywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ2luZGV4Lmpzb24nKSlcbn1cblxuLy8gT3B0aW9ucyBhcmUga2V5ZWQgYXMgXCJoYXJwXCIsIGZvciBiZXZlcmFnZSBjb21wYXRpYmlsaXR5LlxuZnVuY3Rpb24gb3B0aW9ucyAobykge1xuICByZXR1cm4gcG9sbGluYXRlKG8uaGFzT3duUHJvcGVydHkoJ2hhcnAnKSA/IG8gOiB7aGFycDogb30pLmhhcnBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZ3VscCwgbykge1xuICBsZXQgaG8gPSBvcHRpb25zKG8pXG5cbiAgZ3VscC50YXNrKGhvLm5hbWUsIGhvLmhlbHAsICgpID0+IHtcbiAgICBoYXJwLnNlcnZlcihoby5wYXRoIHx8IHByb2Nlc3MuY3dkKCksIHtcbiAgICAgIHBvcnQ6IGhvLnBvcnRcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAoaG8uc3luYykge1xuICAgICAgICBzeW5jKGhvLnN5bmMub3B0aW9ucylcbiAgICAgICAgaWYgKGhvLnN5bmMucmVsb2FkKSB7XG4gICAgICAgICAgaWYgKGhvLnN5bmMuc3RyZWFtKSB7XG4gICAgICAgICAgICAvLyBzdHJlYW1pbmcgY2hhbmdlc1xuICAgICAgICAgICAgZ3VscC53YXRjaChoby5zeW5jLnN0cmVhbSkub24oJ2NoYW5nZScsIChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJlbG9hZChmaWxlLnBhdGgsIHtzdHJlYW06IHRydWV9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmVsb2FkIG5vbi1zdHJlYW1pbmcgKGFwcGVuZGVkIGV4Y2x1c2lvbnMpXG4gICAgICAgICAgbGV0IG5vblN0cmVhbWluZyA9IGhvLnN5bmMucmVsb2FkLmNvbmNhdChcbiAgICAgICAgICAgIGhvLnN5bmMuc3RyZWFtLm1hcChzdHJlYW1lZCA9PiAnIScgKyBzdHJlYW1lZCArICcrKHwubWFwKScpXG4gICAgICAgICAgKVxuICAgICAgICAgIGd1bHAud2F0Y2gobm9uU3RyZWFtaW5nLCAoKSA9PiB7XG4gICAgICAgICAgICByZWxvYWQoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuIl19