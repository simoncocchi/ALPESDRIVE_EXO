const fs = require('fs');
const os = require('os');

const documentContent = async (routeToCheck) => {
    const fileInfo = await fs.promises.readdir(`${os.tmpdir}/${routeToCheck}`);
    return fileInfo
};

module.exports.documentContent = documentContent;
