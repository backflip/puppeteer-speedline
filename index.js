const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors')
const speedline = require('speedline')
const extractScreenshots = require('./lib/extract-screenshots');

// Based on https://github.com/GoogleChrome/puppeteer/issues/1427
(async () => {
  const url = 'https://www.hsr.ch'
  const trace = 'trace.json'
  const screenshots = 'screenshots'

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    // Set viewport, user agent etc.
    await page.emulate(devices['Nexus 7'])

    // Start tracing
    await page.tracing.start({
      path: trace,
      screenshots: true
    })
    await page.goto(url)
    await page.tracing.stop()

    // Extract inlined screenshots to file system
    extractScreenshots({
      trace: trace,
      dist: screenshots
    })

    // Analyze trace with speedline to get speedIndex and friends
    const results = await speedline(trace)

    console.log(results)

    browser.close()
  } catch (err) {
    console.log(err)

    browser.close()

    return null
  }
})()
