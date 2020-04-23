const fs = require('fs');
const os = require('os');

const documentContent = async (routeToCheck) => {
    let pathFile = `${os.tmpdir}/${routeToCheck}`;
    const statinfo = fs.stat(pathFile,function(err, stats) {
        console.log(stats.isDirectory());
        console.log(stats);
      });

    const fileInfo = await fs.promises.readdir(pathFile, {withFileTypes : true});
    
    console.log("documentContent -> fileInfo", fileInfo)
    return fileInfo.map(file => transformToAlpesItem(file));
};

function transformToAlpesItem (dirent) {
    if (dirent.isDirectory()) {
        return { name : dirent.name, isFolder : true }
    } else {
        return {name : dirent.name, isFolder : false }
    }
}

module.exports.documentContent = documentContent;
