const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 1337;
let json;

app.use(bodyParser.json());
app.listen(port, ()=>console.log(`i hear you ${port}`))

app.post('/api/create', (req, res)=>{
    json = req.body;
    console.log(`json object: ${json}`)
    res.sendStatus(200);
})

app.get('/api/read', (req, res)=>{
    res.status(200).send(json);
})

app.put('/api/update', (req, res)=>{
    json = Object.assign( {}, json, req.body );
    res.sendStatus(200);
})

app.delete('/api/delete', (req, res)=>{
    json = {};
    res.sendStatus(200);
})