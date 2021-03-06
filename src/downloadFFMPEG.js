import fs from 'fs';
import mkdirp from 'mkdirp';
import os from 'os';
import path from 'path';
import request from 'request';
import semver from 'semver';

const downloadFFMPEG = (electronVersion, platform, arch) =>
  new Promise((resolve, reject) => {
    if (!semver.satisfies(electronVersion, '>=0.36.8')) return reject(new Error('Electron version too low'));
    if (!process.env.TESTING) console.log(`Downloading patent safe FFMPEG for platform ${platform} ${arch} using electron v${electronVersion}`);

    const tmpPath = path.resolve(os.tmpdir(), 'tmp-safe-ffmpeg');
    mkdirp(tmpPath, (err) => {
      if (err) return reject(err);

      const ffmpegFileName = `ffmpeg-v${electronVersion}-${platform}-${arch}.zip`;
      const downloadPath = path.resolve(tmpPath, ffmpegFileName);

      if (fs.existsSync(downloadPath)) return resolve(downloadPath);

      const downloadStream = fs.createWriteStream(downloadPath);
      request({
        url: `https://github.com/electron/electron/releases/download/v${electronVersion}/${ffmpegFileName}`,
        followAllRedirects: true,
        timeout: 10000,
        gzip: true,
      })
      .on('error', (downloadError) => {
        reject(downloadError);
      })
      .pipe(downloadStream)
      .on('close', () => {
        resolve(downloadPath);
      });
    });
  });

export default downloadFFMPEG;
