const http = require('http');
const express = require('express');

app.use(express.static('public'));

const server = http.createServer(app);