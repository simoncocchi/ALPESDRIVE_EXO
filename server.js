const express = require('express');
const app = express();
const fileinfo = require('./readfile');
const fileDelete = require('./deletefile');

const port = 3000;


app.use('/', express.static('./frontend/JS_alps-drive-project-frontend'));
app.get('/api/drive',async (req, res) => {
    try {
        const file= await fileinfo.documentContent('test');
        res.send(file);
    } catch {
        res.send('Ne fonctionne pas');
    }
})

app.delete('/api/drive/:name', function (req, res) {
    console.log(req.params.name)
    
    fileDelete.deleteFile('test', req.params.name);
});

function startServeur () {
app.listen(port, () => {
    console.log(`Listenning on http://localhost:${port}`);
});
}

module.exports = {
    start: startServeur(),
};