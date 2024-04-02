const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const Models = require('./models.js');
const { check, validationResult } = require('express-validator');
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
app.post(
  '/album',
  [
    check('album_name', 'Album Name is required').notEmpty(),
    check('artist_name', 'Artist Name is required').notEmpty(),
    check('release_date', 'Release Date is required').notEmpty(),
  ],
  (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    Albums.findOne({
      AlbumName: req.body.album_name,
      ArtistName: req.body.artist_name,
    })
      .then((album) => {
        if (album) {
          return res
            .status(400)
            .send(
              'Album ' +
                req.body.album_name +
                ' by ' +
                req.body.artist_name +
                ' already exists.'
            );
        } else {
          Albums.create({
            AlbumName: req.body.album_name,
            ArtistName: req.body.artist_name,
            ReleaseDate: req.body.release_date,
          })
            .then((album) => {
              if (album) {
                res.status(200).json(album);
              } else {
                res.status(400).send('Album not defined');
              }
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send('Error ' + err);
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error ' + err);
      });
  }
);

// UPDATE updates existing albums
app.put('/albums/:albumname', (req, res) => {});

// app.delete();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
