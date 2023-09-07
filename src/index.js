const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});