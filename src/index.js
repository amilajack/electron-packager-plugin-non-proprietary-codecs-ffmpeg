import path from 'path';

import downloadFFMPEG from './downloadFFMPEG';
import extractFFMPEG from './extractFFMPEG';
import moveFFMPEG from './moveFFMPEG';


const afterExtractHook = (buildPath, electronVersion, platform, arch, done) => {
  let libPath = buildPath;
  if (platform === 'darwin') {
    libPath = path.resolve(buildPath, 'Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries');
  }

  downloadFFMPEG(electronVersion, platform, arch)
    .then(extractFFMPEG(buildPath))
    .then(moveFFMPEG(libPath, platform))
    .catch((err) => {
      if (!process.env.TESTING) console.error('Failed to load FFMPEG', err);
      done(new Error(err));
    })
    .then(() => done());
};

export default afterExtractHook;
