import './_support';

import fs from 'fs';
import mime from 'mime';
import os from 'os';
import path from 'path';

import downloadFFMPEG from '../../dist/downloadFFMPEG';

const testPlatform = (platform) =>
  describe(`When downloading FFMPEG for ${platform}`, () => {
    const targetDownloadPath = path.resolve(os.tmpdir(), 'tmp-safe-ffmpeg', `ffmpeg-v1.2.6-${platform}-x64.zip`);

    beforeEach(() => {
      if (fs.existsSync(targetDownloadPath)) fs.unlinkSync(targetDownloadPath);
    });

    it('the download promise should resolve', () =>
      downloadFFMPEG('1.2.6', platform, 'x64').should.be.fulfilled
    );

    it('should resolve with a path', () =>
      downloadFFMPEG('1.2.6', platform, 'x64')
        .then((downloadPath) => {
          downloadPath.should.be.a('string');
          downloadPath.should.be.a.path();
        })
    );

    it('should resolve with a path pointing to a zip file', () =>
      downloadFFMPEG('1.2.6', platform, 'x64')
        .then((downloadPath) => {
          mime.lookup(downloadPath).should.be.equal('application/zip');
        })
    );

    it('should reject when using an electron version less then 0.36.8', () =>
      downloadFFMPEG('0.35.0', platform, 'x64').should.be.rejected
    );

    afterEach(() => fs.existsSync(targetDownloadPath) && fs.unlinkSync(targetDownloadPath));
  });

testPlatform('linux');
testPlatform('darwin');
testPlatform('win32');
