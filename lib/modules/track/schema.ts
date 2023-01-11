import * as mongoose from "mongoose";

export const TrackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  album: {
    type: String,
  },
  artist: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  },
  artwork: {
    type: String,
  },
  audio: {
    type: String,
  },
});


export const Track =  mongoose.model("tracks", TrackSchema);