const express = require('express');
const app = express();
const fileinfo = require('./readfile');
const fileDelete = require('./deletefile');
const createDirctory = require('./createDirectoryAlps')
const bb = require('express-busboy');
const fileUpload = require('./uploadFileApls');

bb.extend(app, {
    upload: true,
    path: '/var/folders/gm/hbw42jzx4v38b9f1n2wvw7br0000gn/T/upload',
});

const port = 3000;


app.use('/', express.static('./frontend/JS_alps-drive-project-frontend'));
app.get('/api/drive', async (req, res) => {
    try {
        const file = await fileinfo.documentContent('test');
        res.send(file);
    } catch {
        res.send('Ne fonctionne pas');
    }
});

app.get('/api/drive/:name', async (req, res) => {
    try {
        const file = await fileinfo.documentContent(`test/${req.params.name}`);
        res.send(file);
    } catch {
        res.send(err);
    }
});

app.delete('/api/drive/:name', async function (req, res) { // suppresion d'un fichier ou dossier dans le temporaire
    try {
        console.log(1);
        const testasynch = await fileDelete.deleteFile('test', req.params.name);
        console.log(3);
        res.send(testasynch);
    } catch {
        res.send('Le delete ne marche pas')
    }
});

app.delete('/api/drive/:folder/:name', function (req, res) { // suppresion d'un fichier ou dossier dans le temporaire avec un fichier.
    console.log(req.params.name)

    fileDelete.deleteFile(`test/${req.params.folder}`, req.params.name);
    res.send('delete ok');
});

app.post('/api/drive', (req, res) => { // création de dossier seule 
    const jsoncreate = createDirctory.createDirectory('test', req.query.name);
    console.log("req.query.name", req.query.name)
    res.send(jsoncreate);
});

app.post('/api/drive/:folder', (req, res) => { // création de dossier dans dossier
    createDirctory.createDirectory(`test/${req.params.folder}`, req.query.name);
    console.log("req.query.name", req.query.name)
    res.send('creation ok');
});

app.put('/api/drive', async (req, res) => { // upload de fichier sur le root
    const datatest = req.files;
    console.log('1');
    await fileUpload.fileUploadToRoot(datatest, `test`);
    console.log('3');
    res.send(`upload ok root`);
});

app.put('/api/drive/:folder',async (req, res) => { // upload de fichier dans un dosier
    const datatest = req.files;
    await fileUpload.fileUploadToRoot(datatest, `test/${req.params.folder}`);
    res.send(`upload folder ok`);
});

function startServeur() {
    app.listen(port, () => {
        console.log(`Listenning on http://localhost:${port}`);
    });
}

module.exports = {
    start: startServeur(),
};