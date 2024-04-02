const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const Models = require('./models.js');
const app = express();
const port = 3000;
require('dotenv').config();

const Albums = Models.Album;

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// READ shows music albums and their details
app.get('/albums', (req, res) => {
  Albums.find().then((albums) => {
    res.status(200).json(albums);
  });
});

// CREATE adds a new album to the library
app.post('/album', (req, res) => {
  let newAlbum = req.body;

  if (!newAlbum.name) {
    const message = 'Missing name in request body.';
    res.status(400).send(message);
  } else {
    newAlbum.id = uuid.v4();
  }
});

// UPDATE updates existing albums
app.put('/albums/:albumname', (req, res) => {});

// app.delete();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
