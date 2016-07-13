Electron Packager Plugin: Non-proprietary Codecs FFMPEG
---------------------------
[![Build Status](https://travis-ci.org/orionhealth/electron-packager-plugin-non-proprietary-codecs-ffmpeg.svg?branch=master)](https://travis-ci.org/orionhealth/electron-packager-plugin-non-proprietary-codecs-ffmpeg)
[![npm](https://img.shields.io/npm/v/electron-packager-plugin-non-proprietary-codecs-ffmpeg.svg?maxAge=2592000)](https://www.npmjs.com/package/electron-packager-plugin-non-proprietary-codecs-ffmpeg)
[![license](https://img.shields.io/github/license/orionhealth/electron-packager-plugin-non-proprietary-codecs-ffmpeg.svg?maxAge=2592000)]()

# Usage

Use the [`afterExtract`](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#afterextract) hook in Electron Packager to run this module.

```js
import safeFFMPEG from 'electron-packager-plugin-non-proprietary-codecs-ffmpeg';

electronPackager({
  ...
  afterExtract: [safeFFMPEG]
  ...
})
```

License
-------

The MIT License (MIT)

Copyright (c) 2016 Orchestral Development

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
