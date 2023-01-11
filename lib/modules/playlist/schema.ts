import * as mongoose from "mongoose";
import { TrackSchema } from "../track/schema";
const PlaylistSchema = mongoose.Schema;

const schema = new PlaylistSchema({
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
  },
  playtime: {
    type: Number,
  },
  trackList: [TrackSchema],
});

export const Playlist = mongoose.model("playlists", schema);
