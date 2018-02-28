# Performance analysis with `puppeteer` and `speedline`

## Set up

Install dependencies: `npm i`

Tested with Node 9.5

## Run

Run script `npm start`.

It will generate a `trace.json` which is used by [`speedline`](https://www.npmjs.com/package/speedline) to extract [`speedIndex`](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) and [`perceptualSpeedIndex`](https://developers.google.com/web/tools/lighthouse/audits/speed-index), among others. This file can  be dropped into the `Performance` tab of Chrome's dev tools to be further analyzed.

## Throttle network on OS X

To simulate the `3G fast` setting of [`WebPagetest`](https://github.com/WPO-Foundation/webpagetest/blob/master/www/settings/connectivity.ini.sample#L40-L46), which is used by [`Lighthouse`](https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md) as well, [`Network Link Conditioner`](https://medium.com/@YogevSitton/use-network-link-conditioner-when-testing-your-app-bad18ecad877) can be installed when on OS X.
