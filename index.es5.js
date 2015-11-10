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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxNQUFNLEdBQUcsc0JBQUssTUFBTSxDQUFBO0FBQ3hCLElBQUksSUFBSSxHQUFHLGFBSkgsU0FBUyxFQUlJLE1BQU0sQ0FBQyxDQUFBOztBQUU1QixTQUFTLFNBQVMsQ0FBRSxDQUFDLEVBQUU7QUFDckIsTUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUE7O0FBQUEsQUFFdEIsTUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN0QixNQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDMUMsU0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNmLFNBQU8sYUFaVSxNQUFNLEVBWVQsT0FBTyxFQUFFLGVBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFBO0NBQzNEOzs7QUFBQSxBQUdELFNBQVMsT0FBTyxDQUFFLENBQUMsRUFBRTtBQUNuQixTQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtDQUNoRTs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRTtBQUNsQyxNQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRW5CLE1BQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLFlBQU07QUFDaEMsUUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUNwQyxVQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7S0FDZCxFQUFFLFlBQU07QUFDUCxVQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDWCxtQ0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3JCLFlBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDbEIsY0FBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTs7QUFFbEIsZ0JBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQ2hELG9CQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO2FBQ2xDLENBQUMsQ0FBQTtXQUNIOztBQUFBLEFBRUQsY0FBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUN0QyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRO21CQUFJLEdBQUcsR0FBRyxRQUFRLEdBQUcsVUFBVTtXQUFBLENBQUMsQ0FDNUQsQ0FBQTtBQUNELGNBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFlBQU07QUFDN0Isa0JBQU0sRUFBRSxDQUFBO1dBQ1QsQ0FBQyxDQUFBO1NBQ0g7T0FDRjtLQUNGLENBQUMsQ0FBQTtHQUNILENBQUMsQ0FBQTtDQUNILENBQUEiLCJmaWxlIjoiaW5kZXguZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtteVJlcXVpcmUsIHBvbGxlbn0gZnJvbSAnYmUtZ29vZHMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHN5bmMgZnJvbSAnYnJvd3Nlci1zeW5jJ1xubGV0IHJlbG9hZCA9IHN5bmMucmVsb2FkXG5sZXQgaGFycCA9IG15UmVxdWlyZSgnaGFycCcpXG5cbmZ1bmN0aW9uIHBvbGxpbmF0ZSAobykge1xuICBpZiAoIW8uaGFycCkgcmV0dXJuIHt9XG4gIC8vIGluZmVyIHdoYXQgcG9sbGVuIGlzIHdhbnRlZFxuICBsZXQgYW50aGVycyA9IFsnaGFycCddXG4gIGlmIChvLmhhcnAuc3luYykgYW50aGVycy5wdXNoKCdoYXJwLXN5bmMnKVxuICBhbnRoZXJzLnB1c2gobylcbiAgcmV0dXJuIHBvbGxlbihhbnRoZXJzLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAnaW5kZXguanNvbicpKVxufVxuXG4vLyBPcHRpb25zIGFyZSBrZXllZCBhcyBcImhhcnBcIiwgZm9yIGJldmVyYWdlIGNvbXBhdGliaWxpdHkuXG5mdW5jdGlvbiBvcHRpb25zIChvKSB7XG4gIHJldHVybiBwb2xsaW5hdGUoby5oYXNPd25Qcm9wZXJ0eSgnaGFycCcpID8gbyA6IHtoYXJwOiBvfSkuaGFycFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChndWxwLCBvKSB7XG4gIGxldCBobyA9IG9wdGlvbnMobylcblxuICBndWxwLnRhc2soaG8ubmFtZSwgaG8uaGVscCwgKCkgPT4ge1xuICAgIGhhcnAuc2VydmVyKGhvLnBhdGggfHwgcHJvY2Vzcy5jd2QoKSwge1xuICAgICAgcG9ydDogaG8ucG9ydFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmIChoby5zeW5jKSB7XG4gICAgICAgIHN5bmMoaG8uc3luYy5vcHRpb25zKVxuICAgICAgICBpZiAoaG8uc3luYy5yZWxvYWQpIHtcbiAgICAgICAgICBpZiAoaG8uc3luYy5zdHJlYW0pIHtcbiAgICAgICAgICAgIC8vIHN0cmVhbWluZyBjaGFuZ2VzXG4gICAgICAgICAgICBndWxwLndhdGNoKGhvLnN5bmMuc3RyZWFtKS5vbignY2hhbmdlJywgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmVsb2FkKGZpbGUucGF0aCwge3N0cmVhbTogdHJ1ZX0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWxvYWQgbm9uLXN0cmVhbWluZyAoYXBwZW5kZWQgZXhjbHVzaW9ucylcbiAgICAgICAgICBsZXQgbm9uU3RyZWFtaW5nID0gaG8uc3luYy5yZWxvYWQuY29uY2F0KFxuICAgICAgICAgICAgaG8uc3luYy5zdHJlYW0ubWFwKHN0cmVhbWVkID0+ICchJyArIHN0cmVhbWVkICsgJysofC5tYXApJylcbiAgICAgICAgICApXG4gICAgICAgICAgZ3VscC53YXRjaChub25TdHJlYW1pbmcsICgpID0+IHtcbiAgICAgICAgICAgIHJlbG9hZCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG4iXX0=