"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
const mongoose = require("mongoose");
const schema_1 = require("../track/schema");
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
    trackList: [schema_1.TrackSchema],
});
exports.Playlist = mongoose.model("playlists", schema);
