# next-file-to-base64
> File to base64 based on FileReader for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-file-to-base64
```

## usage
```js
import '@jswork/next-file-to-base64';

nx.fileToBase64(inFile).then((base64)=>{
  console.log(base64);
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-file-to-base64/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-file-to-base64
[version-url]: https://npmjs.org/package/@jswork/next-file-to-base64

[license-image]: https://img.shields.io/npm/l/@jswork/next-file-to-base64
[license-url]: https://github.com/afeiship/next-file-to-base64/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-file-to-base64
[size-url]: https://github.com/afeiship/next-file-to-base64/blob/master/dist/next-file-to-base64.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-file-to-base64
[download-url]: https://www.npmjs.com/package/@jswork/next-file-to-base64
