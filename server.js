const express = require("express");

const app  = express();

app.use(express.static(`${__dirname}\\src\\`));

app.get('/', (req, res) => {
    console.log(__dirname)
    return res.sendFile(`${__dirname}\\src\\index.html`);
})

app.listen('3000', () => {
    console.log("running!")
})