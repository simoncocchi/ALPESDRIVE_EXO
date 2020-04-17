const express = require('express');
const app = express();
const fileinfo = require('./readfile');

const port = 3000;


app.use('/', express.static('./frontend/JS_alps-drive-project-frontend'));
app.get('/api/drive',async (req, res) => {
    try {
        const file =s = await fileinfo.documentContent('test');
        res.send(file);
    } catch {
        res.send('Ne fonctionne pas');
    }
})

function startServeur () {
app.listen(port, () => {
    console.log(`Listenning on http://localhost:${port}`);
});
}

module.exports = {
    start: startServeur(),
};