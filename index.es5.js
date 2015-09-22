'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _beGoods = require('be-goods');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var reload = _browserSync2['default'].reload;
var harp = _beGoods.myRequire('harp');

function pollinate(o) {
  if (!o.harp) return {};
  // infer what pollen is wanted
  var anthers = ['harp'];
  if (o.harp.sync) anthers.push('harp-sync');
  anthers.push(o);
  // harp options
  return _beGoods.pollen(anthers, _path2['default'].join(__dirname, 'index.json'));
}

exports['default'] = function (gulp, opts) {
  var ho = pollinate(opts).harp;

  gulp.task(ho.name, ho.help, function () {
    harp.server(ho.path || process.cwd(), {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozt1QkFBZ0MsVUFBVTs7b0JBQ3pCLE1BQU07Ozs7MkJBQ04sY0FBYzs7OztBQUMvQixJQUFJLE1BQU0sR0FBRyx5QkFBSyxNQUFNLENBQUE7QUFDeEIsSUFBSSxJQUFJLEdBQUcsbUJBQVUsTUFBTSxDQUFDLENBQUE7O0FBRTVCLFNBQVMsU0FBUyxDQUFFLENBQUMsRUFBRTtBQUNyQixNQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQTs7QUFFdEIsTUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN0QixNQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDMUMsU0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFZixTQUFPLGdCQUFPLE9BQU8sRUFBRSxrQkFBSyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7Q0FDM0Q7O3FCQUVjLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNuQyxNQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFBOztBQUU3QixNQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxZQUFNO0FBQ2hDLFFBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7QUFDcEMsVUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO0tBQ2QsRUFBRSxZQUFNO0FBQ1AsVUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO0FBQ1gsaUNBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNyQixZQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGNBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7O0FBRWxCLGdCQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUksRUFBSztBQUNoRCxvQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTthQUNsQyxDQUFDLENBQUE7V0FDSDs7QUFFRCxjQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7bUJBQUksR0FBRyxHQUFHLFFBQVEsR0FBRyxVQUFVO1dBQUEsQ0FBQyxDQUM1RCxDQUFBO0FBQ0QsY0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBTTtBQUM3QixrQkFBTSxFQUFFLENBQUE7V0FDVCxDQUFDLENBQUE7U0FDSDtPQUNGO0tBQ0YsQ0FBQyxDQUFBO0dBQ0gsQ0FBQyxDQUFBO0NBQ0giLCJmaWxlIjoiaW5kZXguZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtteVJlcXVpcmUsIHBvbGxlbn0gZnJvbSAnYmUtZ29vZHMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHN5bmMgZnJvbSAnYnJvd3Nlci1zeW5jJ1xubGV0IHJlbG9hZCA9IHN5bmMucmVsb2FkXG5sZXQgaGFycCA9IG15UmVxdWlyZSgnaGFycCcpXG5cbmZ1bmN0aW9uIHBvbGxpbmF0ZSAobykge1xuICBpZiAoIW8uaGFycCkgcmV0dXJuIHt9XG4gIC8vIGluZmVyIHdoYXQgcG9sbGVuIGlzIHdhbnRlZFxuICBsZXQgYW50aGVycyA9IFsnaGFycCddXG4gIGlmIChvLmhhcnAuc3luYykgYW50aGVycy5wdXNoKCdoYXJwLXN5bmMnKVxuICBhbnRoZXJzLnB1c2gobylcbiAgLy8gaGFycCBvcHRpb25zXG4gIHJldHVybiBwb2xsZW4oYW50aGVycywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ2luZGV4Lmpzb24nKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGd1bHAsIG9wdHMpIHtcbiAgbGV0IGhvID0gcG9sbGluYXRlKG9wdHMpLmhhcnBcblxuICBndWxwLnRhc2soaG8ubmFtZSwgaG8uaGVscCwgKCkgPT4ge1xuICAgIGhhcnAuc2VydmVyKGhvLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSwge1xuICAgICAgcG9ydDogaG8ucG9ydFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmIChoby5zeW5jKSB7XG4gICAgICAgIHN5bmMoaG8uc3luYy5vcHRpb25zKVxuICAgICAgICBpZiAoaG8uc3luYy5yZWxvYWQpIHtcbiAgICAgICAgICBpZiAoaG8uc3luYy5zdHJlYW0pIHtcbiAgICAgICAgICAgIC8vIHN0cmVhbWluZyBjaGFuZ2VzXG4gICAgICAgICAgICBndWxwLndhdGNoKGhvLnN5bmMuc3RyZWFtKS5vbignY2hhbmdlJywgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmVsb2FkKGZpbGUucGF0aCwge3N0cmVhbTogdHJ1ZX0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWxvYWQgbm9uLXN0cmVhbWluZyAoYXBwZW5kZWQgZXhjbHVzaW9ucylcbiAgICAgICAgICBsZXQgbm9uU3RyZWFtaW5nID0gaG8uc3luYy5yZWxvYWQuY29uY2F0KFxuICAgICAgICAgICAgaG8uc3luYy5zdHJlYW0ubWFwKHN0cmVhbWVkID0+ICchJyArIHN0cmVhbWVkICsgJysofC5tYXApJylcbiAgICAgICAgICApXG4gICAgICAgICAgZ3VscC53YXRjaChub25TdHJlYW1pbmcsICgpID0+IHtcbiAgICAgICAgICAgIHJlbG9hZCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG4iXX0=