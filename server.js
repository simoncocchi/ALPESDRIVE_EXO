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

app.get('/api/drive/:name',async (req, res) => {
    try {
        const file= await fileinfo.documentContent(`test/${req.params.name}`);
        res.send(file);
    } catch {
        res.send('Ne fonctionne pas');
    }
});

app.delete('/api/drive/:name', function (req, res) { // suppresion d'un fichier ou dossier dans le temporaire
    console.log(req.params.name)
    
    fileDelete.deleteFile('test', req.params.name);
    res.send('delete ok');
});

app.delete('/api/drive/:folder/:name', function (req, res) { // suppresion d'un fichier ou dossier dans le temporaire avec un fichier.
    console.log(req.params.name)
    
    fileDelete.deleteFile(`test/${req.params.folder}`, req.params.name);
    res.send('delete ok');
});

app.post('/api/drive', (req, res) => { // création de dossier seule 
    createDirctory.createDirectory('test',req.query.name);
    console.log("req.query.name", req.query.name)
    res.send('creation ok');
});

app.post('/api/drive/:folder', (req, res) => { // création de dossier dans dossier
    createDirctory.createDirectory(`test/${req.params.folder}`,req.query.name);
    console.log("req.query.name", req.query.name)
    res.send('creation ok');
});

function startServeur () {
app.listen(port, () => {
    console.log(`Listenning on http://localhost:${port}`);
});
}

module.exports = {
    start: startServeur(),
};