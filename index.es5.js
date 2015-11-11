'use strict';

var _beGoods = require('be-goods');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reload = _browserSync2.default.reload;
var harp = (0, _beGoods.myRequire)('harp');

function pollinate(o) {
  var anthers = ['harp']; // there's always harp here
  if (o.harp.sync) anthers.push('harp-sync'); // sync is optional
  anthers.push(o); // finally, push the given options to be merged last
  return (0, _beGoods.pollen)(anthers, _path2.default.join(__dirname, 'index.json'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxNQUFNLEdBQUcsc0JBQUssTUFBTSxDQUFBO0FBQ3hCLElBQUksSUFBSSxHQUFHLGFBSkgsU0FBUyxFQUlJLE1BQU0sQ0FBQyxDQUFBOztBQUU1QixTQUFTLFNBQVMsQ0FBRSxDQUFDLEVBQUU7QUFDckIsTUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFBQSxBQUN0QixNQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7QUFBQSxBQUMxQyxTQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFBLEFBQ2YsU0FBTyxhQVZVLE1BQU0sRUFVVCxPQUFPLEVBQUUsZUFBSyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7Q0FDM0Q7OztBQUFBLEFBR0QsU0FBUyxPQUFPLENBQUUsQ0FBQyxFQUFFO0FBQ25CLFNBQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFBO0NBQ2hFOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0FBQ2xDLE1BQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFbkIsTUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsWUFBTTtBQUNoQyxRQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO0FBQ3BDLFVBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtLQUNkLEVBQUUsWUFBTTtBQUNQLFVBQUksRUFBRSxDQUFDLElBQUksRUFBRTtBQUNYLG1DQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDckIsWUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNsQixjQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFOztBQUVsQixnQkFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxJQUFJLEVBQUs7QUFDaEQsb0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7YUFDbEMsQ0FBQyxDQUFBO1dBQ0g7O0FBQUEsQUFFRCxjQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7bUJBQUksR0FBRyxHQUFHLFFBQVEsR0FBRyxVQUFVO1dBQUEsQ0FBQyxDQUM1RCxDQUFBO0FBQ0QsY0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBTTtBQUM3QixrQkFBTSxFQUFFLENBQUE7V0FDVCxDQUFDLENBQUE7U0FDSDtPQUNGO0tBQ0YsQ0FBQyxDQUFBO0dBQ0gsQ0FBQyxDQUFBO0NBQ0gsQ0FBQSIsImZpbGUiOiJpbmRleC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge215UmVxdWlyZSwgcG9sbGVufSBmcm9tICdiZS1nb29kcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgc3luYyBmcm9tICdicm93c2VyLXN5bmMnXG5sZXQgcmVsb2FkID0gc3luYy5yZWxvYWRcbmxldCBoYXJwID0gbXlSZXF1aXJlKCdoYXJwJylcblxuZnVuY3Rpb24gcG9sbGluYXRlIChvKSB7XG4gIGxldCBhbnRoZXJzID0gWydoYXJwJ10gLy8gdGhlcmUncyBhbHdheXMgaGFycCBoZXJlXG4gIGlmIChvLmhhcnAuc3luYykgYW50aGVycy5wdXNoKCdoYXJwLXN5bmMnKSAvLyBzeW5jIGlzIG9wdGlvbmFsXG4gIGFudGhlcnMucHVzaChvKSAvLyBmaW5hbGx5LCBwdXNoIHRoZSBnaXZlbiBvcHRpb25zIHRvIGJlIG1lcmdlZCBsYXN0XG4gIHJldHVybiBwb2xsZW4oYW50aGVycywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ2luZGV4Lmpzb24nKSlcbn1cblxuLy8gT3B0aW9ucyBhcmUga2V5ZWQgYXMgXCJoYXJwXCIsIGZvciBiZXZlcmFnZSBjb21wYXRpYmlsaXR5LlxuZnVuY3Rpb24gb3B0aW9ucyAobykge1xuICByZXR1cm4gcG9sbGluYXRlKG8uaGFzT3duUHJvcGVydHkoJ2hhcnAnKSA/IG8gOiB7aGFycDogb30pLmhhcnBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZ3VscCwgbykge1xuICBsZXQgaG8gPSBvcHRpb25zKG8pXG5cbiAgZ3VscC50YXNrKGhvLm5hbWUsIGhvLmhlbHAsICgpID0+IHtcbiAgICBoYXJwLnNlcnZlcihoby5wYXRoIHx8IHByb2Nlc3MuY3dkKCksIHtcbiAgICAgIHBvcnQ6IGhvLnBvcnRcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAoaG8uc3luYykge1xuICAgICAgICBzeW5jKGhvLnN5bmMub3B0aW9ucylcbiAgICAgICAgaWYgKGhvLnN5bmMucmVsb2FkKSB7XG4gICAgICAgICAgaWYgKGhvLnN5bmMuc3RyZWFtKSB7XG4gICAgICAgICAgICAvLyBzdHJlYW1pbmcgY2hhbmdlc1xuICAgICAgICAgICAgZ3VscC53YXRjaChoby5zeW5jLnN0cmVhbSkub24oJ2NoYW5nZScsIChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJlbG9hZChmaWxlLnBhdGgsIHtzdHJlYW06IHRydWV9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmVsb2FkIG5vbi1zdHJlYW1pbmcgKGFwcGVuZGVkIGV4Y2x1c2lvbnMpXG4gICAgICAgICAgbGV0IG5vblN0cmVhbWluZyA9IGhvLnN5bmMucmVsb2FkLmNvbmNhdChcbiAgICAgICAgICAgIGhvLnN5bmMuc3RyZWFtLm1hcChzdHJlYW1lZCA9PiAnIScgKyBzdHJlYW1lZCArICcrKHwubWFwKScpXG4gICAgICAgICAgKVxuICAgICAgICAgIGd1bHAud2F0Y2gobm9uU3RyZWFtaW5nLCAoKSA9PiB7XG4gICAgICAgICAgICByZWxvYWQoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuIl19