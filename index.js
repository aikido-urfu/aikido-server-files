const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const PORT = 3006;

app.use('/uploads', serveStatic(path.join(__dirname, '..', 'aikido-server-core',  'uploads'))); // Specifies the folder with files

app.get('/', (req, res) => {
  res.status(200).send("Welcome to root URL of Server");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
  else
    console.log("Error occurred, server can't start", error);
});
