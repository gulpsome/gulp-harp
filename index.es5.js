'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stamina = require('stamina');

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
  return (0, _stamina.pollen)(anthers, _path2['default'].normalize('./index.json'));
}

exports['default'] = function (gulp, opts) {
  var ho = pollinate(opts).harp;

  gulp.task(ho.name, ho.help, function () {
    _harp2['default'].server(ho.path || process.cwd(), {
      port: ho.port
    }, function () {
      if (ho.sync) {
        (0, _browserSync2['default'])(ho.sync.options);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozt1QkFBcUIsU0FBUzs7b0JBQ2IsTUFBTTs7OztvQkFDTixNQUFNOzs7OzJCQUNOLGNBQWM7Ozs7QUFDL0IsSUFBSSxNQUFNLEdBQUcseUJBQUssTUFBTSxDQUFBOztBQUV4QixTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUU7QUFDcEIsTUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUE7O0FBRXRCLE1BQUksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdEIsTUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzFDLFNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRWYsU0FBTyxhQWJELE1BQU0sRUFhRSxPQUFPLEVBQUUsa0JBQUssU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7Q0FDdkQ7O3FCQUVjLFVBQVMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNsQyxNQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFBOztBQUU3QixNQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxZQUFNO0FBQ2hDLHNCQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUNwQyxVQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7S0FDZCxFQUFFLFlBQU07QUFDUCxVQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDWCxzQ0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3JCLFlBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDbEIsY0FBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTs7QUFFbEIsZ0JBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQ2hELG9CQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO2FBQ2xDLENBQUMsQ0FBQTtXQUNIOztBQUVELGNBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDdEMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTttQkFBSSxHQUFHLEdBQUcsUUFBUSxHQUFHLFVBQVU7V0FBQSxDQUFDLENBQzVELENBQUE7QUFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFNO0FBQzdCLGtCQUFNLEVBQUUsQ0FBQTtXQUNULENBQUMsQ0FBQTtTQUNIO09BQ0Y7S0FDRixDQUFDLENBQUE7R0FDSCxDQUFDLENBQUE7Q0FDSCIsImZpbGUiOiJpbmRleC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BvbGxlbn0gZnJvbSAnc3RhbWluYSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgaGFycCBmcm9tICdoYXJwJ1xuaW1wb3J0IHN5bmMgZnJvbSAnYnJvd3Nlci1zeW5jJ1xubGV0IHJlbG9hZCA9IHN5bmMucmVsb2FkXG5cbmZ1bmN0aW9uIHBvbGxpbmF0ZShvKSB7XG4gIGlmICghby5oYXJwKSByZXR1cm4ge31cbiAgLy8gaW5mZXIgd2hhdCBwb2xsZW4gaXMgd2FudGVkXG4gIGxldCBhbnRoZXJzID0gWydoYXJwJ11cbiAgaWYgKG8uaGFycC5zeW5jKSBhbnRoZXJzLnB1c2goJ2hhcnAtc3luYycpXG4gIGFudGhlcnMucHVzaChvKVxuICAvLyBoYXJwIG9wdGlvbnNcbiAgcmV0dXJuIHBvbGxlbihhbnRoZXJzLCBwYXRoLm5vcm1hbGl6ZSgnLi9pbmRleC5qc29uJykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGd1bHAsIG9wdHMpIHtcbiAgbGV0IGhvID0gcG9sbGluYXRlKG9wdHMpLmhhcnBcblxuICBndWxwLnRhc2soaG8ubmFtZSwgaG8uaGVscCwgKCkgPT4ge1xuICAgIGhhcnAuc2VydmVyKGhvLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSwge1xuICAgICAgcG9ydDogaG8ucG9ydFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmIChoby5zeW5jKSB7XG4gICAgICAgIHN5bmMoaG8uc3luYy5vcHRpb25zKVxuICAgICAgICBpZiAoaG8uc3luYy5yZWxvYWQpIHtcbiAgICAgICAgICBpZiAoaG8uc3luYy5zdHJlYW0pIHtcbiAgICAgICAgICAgIC8vIHN0cmVhbWluZyBjaGFuZ2VzXG4gICAgICAgICAgICBndWxwLndhdGNoKGhvLnN5bmMuc3RyZWFtKS5vbignY2hhbmdlJywgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmVsb2FkKGZpbGUucGF0aCwge3N0cmVhbTogdHJ1ZX0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWxvYWQgbm9uLXN0cmVhbWluZyAoYXBwZW5kZWQgZXhjbHVzaW9ucylcbiAgICAgICAgICBsZXQgbm9uU3RyZWFtaW5nID0gaG8uc3luYy5yZWxvYWQuY29uY2F0KFxuICAgICAgICAgICAgaG8uc3luYy5zdHJlYW0ubWFwKHN0cmVhbWVkID0+ICchJyArIHN0cmVhbWVkICsgJysofC5tYXApJylcbiAgICAgICAgICApXG4gICAgICAgICAgZ3VscC53YXRjaChub25TdHJlYW1pbmcsICgpID0+IHtcbiAgICAgICAgICAgIHJlbG9hZCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG4iXX0=