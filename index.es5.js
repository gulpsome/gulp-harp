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
  return _beGoods.pollen(anthers, _path2['default'].join(__dirname, 'index.json'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozt1QkFBcUIsVUFBVTs7b0JBQ2QsTUFBTTs7OztvQkFDTixNQUFNOzs7OzJCQUNOLGNBQWM7Ozs7QUFDL0IsSUFBSSxNQUFNLEdBQUcseUJBQUssTUFBTSxDQUFBOztBQUV4QixTQUFTLFNBQVMsQ0FBRSxDQUFDLEVBQUU7QUFDckIsTUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUE7O0FBRXRCLE1BQUksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdEIsTUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzFDLFNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRWYsU0FBTyxnQkFBTyxPQUFPLEVBQUUsa0JBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFBO0NBQzNEOztxQkFFYyxVQUFVLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDbkMsTUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQTs7QUFFN0IsTUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsWUFBTTtBQUNoQyxzQkFBSyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7QUFDcEMsVUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO0tBQ2QsRUFBRSxZQUFNO0FBQ1AsVUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO0FBQ1gsaUNBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNyQixZQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGNBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7O0FBRWxCLGdCQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUksRUFBSztBQUNoRCxvQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTthQUNsQyxDQUFDLENBQUE7V0FDSDs7QUFFRCxjQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7bUJBQUksR0FBRyxHQUFHLFFBQVEsR0FBRyxVQUFVO1dBQUEsQ0FBQyxDQUM1RCxDQUFBO0FBQ0QsY0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBTTtBQUM3QixrQkFBTSxFQUFFLENBQUE7V0FDVCxDQUFDLENBQUE7U0FDSDtPQUNGO0tBQ0YsQ0FBQyxDQUFBO0dBQ0gsQ0FBQyxDQUFBO0NBQ0giLCJmaWxlIjoiaW5kZXguZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwb2xsZW59IGZyb20gJ2JlLWdvb2RzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBoYXJwIGZyb20gJ2hhcnAnXG5pbXBvcnQgc3luYyBmcm9tICdicm93c2VyLXN5bmMnXG5sZXQgcmVsb2FkID0gc3luYy5yZWxvYWRcblxuZnVuY3Rpb24gcG9sbGluYXRlIChvKSB7XG4gIGlmICghby5oYXJwKSByZXR1cm4ge31cbiAgLy8gaW5mZXIgd2hhdCBwb2xsZW4gaXMgd2FudGVkXG4gIGxldCBhbnRoZXJzID0gWydoYXJwJ11cbiAgaWYgKG8uaGFycC5zeW5jKSBhbnRoZXJzLnB1c2goJ2hhcnAtc3luYycpXG4gIGFudGhlcnMucHVzaChvKVxuICAvLyBoYXJwIG9wdGlvbnNcbiAgcmV0dXJuIHBvbGxlbihhbnRoZXJzLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAnaW5kZXguanNvbicpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZ3VscCwgb3B0cykge1xuICBsZXQgaG8gPSBwb2xsaW5hdGUob3B0cykuaGFycFxuXG4gIGd1bHAudGFzayhoby5uYW1lLCBoby5oZWxwLCAoKSA9PiB7XG4gICAgaGFycC5zZXJ2ZXIoaG8ucGF0aCB8fCBwcm9jZXNzLmN3ZCgpLCB7XG4gICAgICBwb3J0OiBoby5wb3J0XG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKGhvLnN5bmMpIHtcbiAgICAgICAgc3luYyhoby5zeW5jLm9wdGlvbnMpXG4gICAgICAgIGlmIChoby5zeW5jLnJlbG9hZCkge1xuICAgICAgICAgIGlmIChoby5zeW5jLnN0cmVhbSkge1xuICAgICAgICAgICAgLy8gc3RyZWFtaW5nIGNoYW5nZXNcbiAgICAgICAgICAgIGd1bHAud2F0Y2goaG8uc3luYy5zdHJlYW0pLm9uKCdjaGFuZ2UnLCAoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICByZWxvYWQoZmlsZS5wYXRoLCB7c3RyZWFtOiB0cnVlfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHJlbG9hZCBub24tc3RyZWFtaW5nIChhcHBlbmRlZCBleGNsdXNpb25zKVxuICAgICAgICAgIGxldCBub25TdHJlYW1pbmcgPSBoby5zeW5jLnJlbG9hZC5jb25jYXQoXG4gICAgICAgICAgICBoby5zeW5jLnN0cmVhbS5tYXAoc3RyZWFtZWQgPT4gJyEnICsgc3RyZWFtZWQgKyAnKyh8Lm1hcCknKVxuICAgICAgICAgIClcbiAgICAgICAgICBndWxwLndhdGNoKG5vblN0cmVhbWluZywgKCkgPT4ge1xuICAgICAgICAgICAgcmVsb2FkKClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cbiJdfQ==