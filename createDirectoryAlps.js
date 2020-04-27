const os = require('os');
const fs = require('fs');

function createDirectory (whereToCreate, nameDirToCreate) {
    pathDirectoryToCreate = `${os.tmpdir}/${whereToCreate}/${nameDirToCreate}`;
    console.log("createDirectory -> pathDirectoryToCreate", pathDirectoryToCreate);

    fs.mkdir(pathDirectoryToCreate, (err) => {
        if (err) throw err;
        console.log(`Le dossier ${nameDirToCreate} été créer dans le fichier temporaire`);
    });
    const testjson = {create : 'ok', directoryName : nameDirToCreate};
    return testjson;
}

module.exports.createDirectory = createDirectory;