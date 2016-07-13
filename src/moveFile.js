import fs from 'fs';

const moveFile = (sourceFile, targetFile, callback) => {
  let doneCalled = false;

  // If the target exists we should delete it
  if (fs.existsSync(targetFile)) {
    fs.unlinkSync(targetFile);
  }

  const done = (err) => {
    if (!doneCalled) {
      callback(err);
      doneCalled = true;
    }
  };

  const readStream = fs.createReadStream(sourceFile);
  readStream.on('error', (err) => {
    done(err);
  });
  const writeStream = fs.createWriteStream(targetFile);
  writeStream.on('error', (err) => {
    done(err);
  });
  writeStream.on('close', () => {
    // If the copy was successfull we should delete the source file
    if (!doneCalled) {
      fs.unlinkSync(sourceFile);
    }
    done();
  });
  readStream.pipe(writeStream);
};

export default moveFile;
