const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
  Rating: { type: Number, min: 1, max: 5, required: true },
  UserId: { type: String, required: true, unique: true },
});

const albumSchema = mongoose.Schema({
  AlbumName: { type: String, required: true },
  ArtistName: { type: String, required: true },
  ReleaseDate: { type: Date, required: true },
  ImagePath: String,
  Ratings: [ratingSchema],
});

const Album = mongoose.model('Album', albumSchema);

module.exports.Album = Album;
