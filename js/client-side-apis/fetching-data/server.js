const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
})
app.get("/public/verse2.txt", (req, res) => {
    res.sendFile(`${__dirname}/public/verse2.txt`);
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
})
