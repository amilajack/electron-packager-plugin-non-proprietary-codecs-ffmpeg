import fs from 'fs';
import path from 'path';

import moveFile from './moveFile';

const moveFFMPEG = (targetPath, platform) =>
  (sourcePath) =>
    new Promise((resolve, reject) => {
      let fileName = 'libffmpeg.dll';
      if (platform === 'darwin') {
        fileName = 'libffmpeg.dylib';
      } else if (platform === 'linux') {
        fileName = 'libffmpeg.so';
      }

      const libTargetPath = path.resolve(targetPath, fileName);
      const libPath = path.resolve(sourcePath, fileName);

      // If we are copying to the source we can stop immediately
      if (libPath === libTargetPath) {
        console.log('Loaded FFMPEG successfully');
        return resolve();
      }

      // If the source doesn't exist we have a problem
      if (!fs.existsSync(libPath)) return reject('Failed to find FFMPEG library file');

      moveFile(libPath, libTargetPath, (moveErr) => {
        if (moveErr) return reject(moveErr);
        console.log('Loaded FFMPEG successfully');
        resolve();
      });
    });

export default moveFFMPEG;
