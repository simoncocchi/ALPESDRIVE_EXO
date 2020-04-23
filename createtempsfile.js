const os = require('os');
const fs = require('fs');

const createtmpdir = (lenomdufichieracreer) => {
    path = `${os.tmpdir()}/${lenomdufichieracreer}`; // creation du chemin et du nom du fichier a créer.
    console.log(os.tmpdir());
    fs.mkdir(path, (err) => {
        if(err.code == 'EEXIST') {
            console.log("le fichier existe déja");
        } else {
            console.log(err);
        }
    })
}

module.exports.createtmpdir = createtmpdir;