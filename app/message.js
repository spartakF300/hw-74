const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = "./app/messages";

router.get('/', (req, res) => {
    fs.readdir(path, (err, files) => {
        if (err) throw err;
const messages = [];
        files.forEach(file => {
            const filePath = path + '/' + file;
         const response =   fs.readFileSync(filePath);
            messages.push(JSON.parse(response))
        });
res.send(messages.reverse().slice(0,5))
    });

});

router.post('/', (req, res) => {
    const time = new Date().toISOString();
    const fileName = path + '/' + time + '.txt';
    const body = {...req.body, time};
    fs.writeFile(fileName, JSON.stringify(body), (error) => {
        if (error) {
            console.error(error)
        } else {
            console.log('ok')
        }
    });
    res.send(body);

});

module.exports = router;