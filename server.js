const express = require("express");
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyparser.json());

let lines = []
app.get('/lines', (req, res) => res.json(lines));
app.post('/line', (req, res) => {
    lines.push(req.body.line);
    res.json(200);
})
app.listen(3010);