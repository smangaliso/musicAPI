"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = exports.TrackSchema = void 0;
const mongoose = require("mongoose");
exports.TrackSchema = new mongoose.Schema({
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
exports.Track = mongoose.model("tracks", exports.TrackSchema);
