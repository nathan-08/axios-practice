const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 1337;

app.use(bodyParser.json());
app.listen(port, ()=>console.log(`i hear you ${port}`))
