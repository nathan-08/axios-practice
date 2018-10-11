const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 1337;
let json;

app.use(bodyParser.json());
app.listen(port, ()=>console.log(`0,0 --Listening-- ${port}`))

app.post('/api/create', (req, res)=>{
    console.log('--create endpoint')
    json = req.body;
    res.sendStatus(200);
})

app.get('/api/read', (req, res)=>{
    console.log('--read endpoint')
    res.status(200).send(json);
})

app.put('/api/update', (req, res)=>{
    console.log('--update endpoint');
    json = Object.assign( {}, json, req.body );
    res.sendStatus(200);
})

app.delete('/api/delete', (req, res)=>{
    console.log('--delete endpoint')
    json = {};
    res.sendStatus(200);
})