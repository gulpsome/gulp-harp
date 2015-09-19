'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _beGoods = require('be-goods');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _harp = require('harp');

var _harp2 = _interopRequireDefault(_harp);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var reload = _browserSync2['default'].reload;

function pollinate(o) {
  if (!o.harp) return {};
  // infer what pollen is wanted
  var anthers = ['harp'];
  if (o.harp.sync) anthers.push('harp-sync');
  anthers.push(o);
  // harp options
  return _beGoods.pollen(anthers, _path2['default'].normalize('./index.json'));
}

exports['default'] = function (gulp, opts) {
  var ho = pollinate(opts).harp;

  gulp.task(ho.name, ho.help, function () {
    _harp2['default'].server(ho.path || process.cwd(), {
      port: ho.port
    }, function () {
      if (ho.sync) {
        _browserSync2['default'](ho.sync.options);
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

module.exports = exports['default'];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozt1QkFBcUIsVUFBVTs7b0JBQ2QsTUFBTTs7OztvQkFDTixNQUFNOzs7OzJCQUNOLGNBQWM7Ozs7QUFDL0IsSUFBSSxNQUFNLEdBQUcseUJBQUssTUFBTSxDQUFBOztBQUV4QixTQUFTLFNBQVMsQ0FBRSxDQUFDLEVBQUU7QUFDckIsTUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUE7O0FBRXRCLE1BQUksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdEIsTUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzFDLFNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRWYsU0FBTyxnQkFBTyxPQUFPLEVBQUUsa0JBQUssU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7Q0FDdkQ7O3FCQUVjLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNuQyxNQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFBOztBQUU3QixNQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxZQUFNO0FBQ2hDLHNCQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUNwQyxVQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7S0FDZCxFQUFFLFlBQU07QUFDUCxVQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDWCxpQ0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3JCLFlBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDbEIsY0FBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTs7QUFFbEIsZ0JBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQ2hELG9CQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO2FBQ2xDLENBQUMsQ0FBQTtXQUNIOztBQUVELGNBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDdEMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTttQkFBSSxHQUFHLEdBQUcsUUFBUSxHQUFHLFVBQVU7V0FBQSxDQUFDLENBQzVELENBQUE7QUFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFNO0FBQzdCLGtCQUFNLEVBQUUsQ0FBQTtXQUNULENBQUMsQ0FBQTtTQUNIO09BQ0Y7S0FDRixDQUFDLENBQUE7R0FDSCxDQUFDLENBQUE7Q0FDSCIsImZpbGUiOiJpbmRleC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BvbGxlbn0gZnJvbSAnYmUtZ29vZHMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGhhcnAgZnJvbSAnaGFycCdcbmltcG9ydCBzeW5jIGZyb20gJ2Jyb3dzZXItc3luYydcbmxldCByZWxvYWQgPSBzeW5jLnJlbG9hZFxuXG5mdW5jdGlvbiBwb2xsaW5hdGUgKG8pIHtcbiAgaWYgKCFvLmhhcnApIHJldHVybiB7fVxuICAvLyBpbmZlciB3aGF0IHBvbGxlbiBpcyB3YW50ZWRcbiAgbGV0IGFudGhlcnMgPSBbJ2hhcnAnXVxuICBpZiAoby5oYXJwLnN5bmMpIGFudGhlcnMucHVzaCgnaGFycC1zeW5jJylcbiAgYW50aGVycy5wdXNoKG8pXG4gIC8vIGhhcnAgb3B0aW9uc1xuICByZXR1cm4gcG9sbGVuKGFudGhlcnMsIHBhdGgubm9ybWFsaXplKCcuL2luZGV4Lmpzb24nKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGd1bHAsIG9wdHMpIHtcbiAgbGV0IGhvID0gcG9sbGluYXRlKG9wdHMpLmhhcnBcblxuICBndWxwLnRhc2soaG8ubmFtZSwgaG8uaGVscCwgKCkgPT4ge1xuICAgIGhhcnAuc2VydmVyKGhvLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSwge1xuICAgICAgcG9ydDogaG8ucG9ydFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmIChoby5zeW5jKSB7XG4gICAgICAgIHN5bmMoaG8uc3luYy5vcHRpb25zKVxuICAgICAgICBpZiAoaG8uc3luYy5yZWxvYWQpIHtcbiAgICAgICAgICBpZiAoaG8uc3luYy5zdHJlYW0pIHtcbiAgICAgICAgICAgIC8vIHN0cmVhbWluZyBjaGFuZ2VzXG4gICAgICAgICAgICBndWxwLndhdGNoKGhvLnN5bmMuc3RyZWFtKS5vbignY2hhbmdlJywgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmVsb2FkKGZpbGUucGF0aCwge3N0cmVhbTogdHJ1ZX0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWxvYWQgbm9uLXN0cmVhbWluZyAoYXBwZW5kZWQgZXhjbHVzaW9ucylcbiAgICAgICAgICBsZXQgbm9uU3RyZWFtaW5nID0gaG8uc3luYy5yZWxvYWQuY29uY2F0KFxuICAgICAgICAgICAgaG8uc3luYy5zdHJlYW0ubWFwKHN0cmVhbWVkID0+ICchJyArIHN0cmVhbWVkICsgJysofC5tYXApJylcbiAgICAgICAgICApXG4gICAgICAgICAgZ3VscC53YXRjaChub25TdHJlYW1pbmcsICgpID0+IHtcbiAgICAgICAgICAgIHJlbG9hZCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG4iXX0=