import mkdirp from 'mkdirp';
import unzip from 'cross-unzip';

const extractFFMPEG = (targetPath) =>
  (ffmpegPath) =>
    new Promise((resolve, reject) => {
      mkdirp(targetPath, (err) => {
        if (err) return reject(err);

        unzip(ffmpegPath, targetPath, (zipError) => {
          if (zipError) return reject(zipError);

          resolve(targetPath);
        });
      });
    });

export default extractFFMPEG;
