const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname)));
app.listen(7000);