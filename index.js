import {myRequire, pollen} from 'be-goods'
import path from 'path'
import sync from 'browser-sync'
let reload = sync.reload
let harp = myRequire('harp')

function pollinate (o) {
  if (!o.harp) return {}
  // infer what pollen is wanted
  let anthers = ['harp']
  if (o.harp.sync) anthers.push('harp-sync')
  anthers.push(o)
  // harp options
  return pollen(anthers, path.join(__dirname, 'index.json'))
}

module.exports = function (gulp, opts) {
  let ho = pollinate(opts).harp

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
