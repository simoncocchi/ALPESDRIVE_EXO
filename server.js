const express = require('express');
const app = express();
const fileinfo = require('./readfile');
const fileDelete = require('./deletefile');
const createDirctory = require('./createDirectoryAlps')

const port = 3000;


app.use('/', express.static('./frontend/JS_alps-drive-project-frontend'));
app.get('/api/drive',async (req, res) => {
    try {
        const file= await fileinfo.documentContent('test');
        res.send(file);
    } catch {
        res.send('Ne fonctionne pas');
    }
});

app.delete('/api/drive/:name', function (req, res) {
    console.log(req.params.name)
    
    fileDelete.deleteFile('test', req.params.name);
});

app.post('/api/drive', (req, res) => { // création de dossier seule 
    createDirctory.createDirectory('test',req.query.name);
    console.log("req.query.name", req.query.name)
});

app.post('/api/drive/:folder', (req, res) => { // création de dossier dans dossier
    createDirctory.createDirectory(`test/${req.params.folder}`,req.query.name);
    console.log("req.query.name", req.query.name)
});

function startServeur () {
app.listen(port, () => {
    console.log(`Listenning on http://localhost:${port}`);
});
}

module.exports = {
    start: startServeur(),
};