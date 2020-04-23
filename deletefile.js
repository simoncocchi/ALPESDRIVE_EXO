const os = require('os');
const fs = require('fs');

const deleteFile = (fileRoute,fileToDelete) => {
    const pathFileToDelete = `${os.tmpdir()}/${fileRoute}/${fileToDelete}`;
    if(fs.existsSync(pathFileToDelete) && fs.lstatSync(pathFileToDelete).isDirectory()) {
        console.log(`C'est un dossier`)
        fs.rmdir()
    } else {
        console.log(`C'est un fichier`)
        fs.unlink(pathFileToDelete, (err) => {
            if (err) throw err;
            console.log(`${pathFileToDelete} à été suprimé`);
          });
    }
}

module.exports.deleteFile = deleteFile;