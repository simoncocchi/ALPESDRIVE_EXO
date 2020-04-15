const express = require('express')
const app = express()
const port = 3000


app.use(express.static('./frontend/JS_alps-drive-project-frontend'));
app.get('/', (req, res) => {

    res.render('./frontend/JS_alps-drive-project-frontend/index');

});

app.listen(port);