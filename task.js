const express = require('express');
const messages = require('./app/message');
const app = express();
const port = 8000;
app.use(express.json());

app.use('/messages', messages);
app.listen(port,()=>{
    console.log('server run '+port);
});