'use strict';

const express = require('express');
const dataStructures = require('./lib/');
const app = express();
const port = process.argv[2] || 3000;

app.listen(port, () => console.log('Listening on port', port));
