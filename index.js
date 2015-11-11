import {myRequire, pollen} from 'be-goods'
import path from 'path'
import sync from 'browser-sync'
let reload = sync.reload
let harp = myRequire('harp')

function pollinate (o) {
  let anthers = ['harp'] // there's always harp here
  if (o.harp.sync) anthers.push('harp-sync') // sync is optional
  anthers.push(o) // finally, push the given options to be merged last
  return pollen(anthers, path.join(__dirname, 'index.json'))
}

// Options are keyed as "harp", for beverage compatibility.
function options (o) {
  return pollinate(o.hasOwnProperty('harp') ? o : {harp: o}).harp
}

module.exports = function (gulp, o) {
  let ho = options(o)

  gulp.task(ho.name, ho.help, () => {
    harp.server(ho.path || process.cwd(), {
      port: ho.port
    }, () => {
      if (ho.sync) {
        sync(ho.sync.options)
        if (ho.sync.reload) {
          if (ho.sync.stream) {
            // streaming changes
            gulp.watch(ho.sync.stream).on('change', (file) => {
              reload(file.path, {stream: true})
            })
          }
          // reload non-streaming (appended exclusions)
          let nonStreaming = ho.sync.reload.concat(
            ho.sync.stream.map(streamed => '!' + streamed + '+(|.map)')
          )
          gulp.watch(nonStreaming, () => {
            reload()
          })
        }
      }
    })
  })
}
