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
  if (!o.harp) return {};
  // infer what pollen is wanted
  var anthers = ['harp'];
  if (o.harp.sync) anthers.push('harp-sync');
  anthers.push(o);
  // harp options
  return (0, _beGoods.pollen)(anthers, _path2.default.join(__dirname, 'index.json'));
}

module.exports = function (gulp, opts) {
  var ho = pollinate(opts).harp;

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxNQUFNLEdBQUcsc0JBQUssTUFBTSxDQUFBO0FBQ3hCLElBQUksSUFBSSxHQUFHLGFBSkgsU0FBUyxFQUlJLE1BQU0sQ0FBQyxDQUFBOztBQUU1QixTQUFTLFNBQVMsQ0FBRSxDQUFDLEVBQUU7QUFDckIsTUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUE7O0FBQUEsQUFFdEIsTUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN0QixNQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDMUMsU0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O0FBQUEsQUFFZixTQUFPLGFBYlUsTUFBTSxFQWFULE9BQU8sRUFBRSxlQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQTtDQUMzRDs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNyQyxNQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFBOztBQUU3QixNQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxZQUFNO0FBQ2hDLFFBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7QUFDcEMsVUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO0tBQ2QsRUFBRSxZQUFNO0FBQ1AsVUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO0FBQ1gsbUNBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNyQixZQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGNBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7O0FBRWxCLGdCQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUksRUFBSztBQUNoRCxvQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTthQUNsQyxDQUFDLENBQUE7V0FDSDs7QUFBQSxBQUVELGNBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDdEMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTttQkFBSSxHQUFHLEdBQUcsUUFBUSxHQUFHLFVBQVU7V0FBQSxDQUFDLENBQzVELENBQUE7QUFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFNO0FBQzdCLGtCQUFNLEVBQUUsQ0FBQTtXQUNULENBQUMsQ0FBQTtTQUNIO09BQ0Y7S0FDRixDQUFDLENBQUE7R0FDSCxDQUFDLENBQUE7Q0FDSCxDQUFBIiwiZmlsZSI6ImluZGV4LmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bXlSZXF1aXJlLCBwb2xsZW59IGZyb20gJ2JlLWdvb2RzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzeW5jIGZyb20gJ2Jyb3dzZXItc3luYydcbmxldCByZWxvYWQgPSBzeW5jLnJlbG9hZFxubGV0IGhhcnAgPSBteVJlcXVpcmUoJ2hhcnAnKVxuXG5mdW5jdGlvbiBwb2xsaW5hdGUgKG8pIHtcbiAgaWYgKCFvLmhhcnApIHJldHVybiB7fVxuICAvLyBpbmZlciB3aGF0IHBvbGxlbiBpcyB3YW50ZWRcbiAgbGV0IGFudGhlcnMgPSBbJ2hhcnAnXVxuICBpZiAoby5oYXJwLnN5bmMpIGFudGhlcnMucHVzaCgnaGFycC1zeW5jJylcbiAgYW50aGVycy5wdXNoKG8pXG4gIC8vIGhhcnAgb3B0aW9uc1xuICByZXR1cm4gcG9sbGVuKGFudGhlcnMsIHBhdGguam9pbihfX2Rpcm5hbWUsICdpbmRleC5qc29uJykpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGd1bHAsIG9wdHMpIHtcbiAgbGV0IGhvID0gcG9sbGluYXRlKG9wdHMpLmhhcnBcblxuICBndWxwLnRhc2soaG8ubmFtZSwgaG8uaGVscCwgKCkgPT4ge1xuICAgIGhhcnAuc2VydmVyKGhvLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSwge1xuICAgICAgcG9ydDogaG8ucG9ydFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmIChoby5zeW5jKSB7XG4gICAgICAgIHN5bmMoaG8uc3luYy5vcHRpb25zKVxuICAgICAgICBpZiAoaG8uc3luYy5yZWxvYWQpIHtcbiAgICAgICAgICBpZiAoaG8uc3luYy5zdHJlYW0pIHtcbiAgICAgICAgICAgIC8vIHN0cmVhbWluZyBjaGFuZ2VzXG4gICAgICAgICAgICBndWxwLndhdGNoKGhvLnN5bmMuc3RyZWFtKS5vbignY2hhbmdlJywgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmVsb2FkKGZpbGUucGF0aCwge3N0cmVhbTogdHJ1ZX0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWxvYWQgbm9uLXN0cmVhbWluZyAoYXBwZW5kZWQgZXhjbHVzaW9ucylcbiAgICAgICAgICBsZXQgbm9uU3RyZWFtaW5nID0gaG8uc3luYy5yZWxvYWQuY29uY2F0KFxuICAgICAgICAgICAgaG8uc3luYy5zdHJlYW0ubWFwKHN0cmVhbWVkID0+ICchJyArIHN0cmVhbWVkICsgJysofC5tYXApJylcbiAgICAgICAgICApXG4gICAgICAgICAgZ3VscC53YXRjaChub25TdHJlYW1pbmcsICgpID0+IHtcbiAgICAgICAgICAgIHJlbG9hZCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG4iXX0=