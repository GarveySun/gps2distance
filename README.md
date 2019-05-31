# gps2distance
<p>
  <a href="https://www.npmjs.com/package/@garvey/gps2distance"><img src="https://img.shields.io/npm/dm/@garvey/gps2distance.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@garvey/gps2distance"><img src="https://img.shields.io/npm/v/@garvey/gps2distance.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@garvey/gps2distance"><img src="https://img.shields.io/npm/l/@garvey/gps2distance.svg" alt="License"></a>
  </p>

This library shield sensitive data to show.
## use it
run

```
npm i @garvey/gps2distance
```
and write in your file:

``` jacascript
const gps2distance = require('@garvey/gps2distance')
// or
import gps2distance from '@garvey/gps2distance'
// and
let gps = [
	[116.433,39.941],
	[116.345,39.967]
]
console.log(gps2distance(gps)) // 8.038775748893359
```
