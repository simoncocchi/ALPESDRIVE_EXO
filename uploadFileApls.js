const os = require('os');
const fs = require('fs');

function fileUploadToRoot (data, tmpFile) {
  console.log(data);
  whereToCopieUplaod = `/${tmpFile}/${data['file']['filename']}`;

  fileSource = data['file']['file'];
  console.log("fileUploadToRoot -> fileSource", fileSource)

  pathToCopie = `${os.tmpdir}/${whereToCopieUplaod}`;
  console.log("fileUploadToRoot -> pathToCopie", pathToCopie)


  fs.copyFile(fileSource , pathToCopie, (err) => {
    if (err) throw err;
    console.log(`Le dossier ${data} été créer`);
});
}

module.exports.fileUploadToRoot = fileUploadToRoot;