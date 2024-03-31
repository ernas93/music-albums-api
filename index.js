const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors());

const mockAlbum = {
  music_album: {
    id: '1234',
    name_artist: 'Dubioza Kolektiv',
    name_album: 'Kazu',
    release_date: '',
    image_url: '',
    owner_id: 'userid',
    ratings: [
      {
        id: 'abcd',
        owner_id: 'userid',
        rating: 3,
      },
      {
        id: 'abcde',
        owner_id: 'userid',
        rating: 5,
      },
      {
        id: 'abcdf',
        owner_id: 'userid',
        rating: 5,
      },
      {
        id: 'abcdg',
        owner_id: 'userid',
        rating: 5,
      },
    ],
  },
};

// READ shows music albums and their details
app.get('/albums', (req, res) => {
  res.status(200).json(mockAlbum);
});

// // CREATE adds a new album to the library
// app.post('/album', (req, res) => {
//     req.
// });

// // UPDATE updates existing albums
// app.put();

// app.delete();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
