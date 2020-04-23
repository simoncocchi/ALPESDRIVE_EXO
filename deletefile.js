const os = require('os');
const fs = require('fs');

const deleteFile = (fileRoute,fileToDelete) => {
    const pathFileToDelete = `${os.tmpdir()}/${fileRoute}/${fileToDelete}`;
    if(fs.existsSync(pathFileToDelete) && fs.lstatSync(pathFileToDelete).isDirectory()) {
        fs.rmdir(pathFileToDelete, (err) => {
            if (err) throw err;
            console.log(`Le dossier ${pathFileToDelete} à été suprimé`);
          });
    } else {
        fs.unlink(pathFileToDelete, (err) => {
            if (err) throw err;
            console.log(`Le fichier ${pathFileToDelete} à été suprimé`);
          });
    }
}

module.exports.deleteFile = deleteFile;