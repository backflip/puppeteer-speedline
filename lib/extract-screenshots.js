const mkdirp = require('mkdirp')
const leftPad = require('left-pad')
const fs = require('fs')

module.exports = (options) => {
  const tracing = JSON.parse(fs.readFileSync(options.trace))
  const start = tracing.traceEvents[0].ts
  const dist = options.dist || '.'

  mkdirp.sync(dist)

  tracing.traceEvents.filter((event) => event.cat === 'disabled-by-default-devtools.screenshot').forEach((snap, index) => {
    const time = parseInt((snap.ts - start) / 1000 / 1000)
    const filename = leftPad(time, 2, 0)

    fs.writeFileSync(`${dist}/${filename}.png`, snap.args.snapshot, 'base64')
  })
}
