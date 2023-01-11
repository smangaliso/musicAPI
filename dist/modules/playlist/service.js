"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class TrackService {
    createPlaylist(playlist_params, callback) {
        const _session = new schema_1.Playlist(playlist_params);
        _session.save(callback);
    }
    filterPlaylist(query, callback) {
        schema_1.Playlist.findOne(query, callback);
    }
    updatePlaylist(playlist_params, callback) {
        const query = { _id: playlist_params._id };
        schema_1.Playlist.findOneAndUpdate(query, playlist_params, callback);
    }
    deletePlaylist(_id, callback) {
        const query = { _id: _id };
        schema_1.Playlist.deleteOne(query, callback);
    }
}
exports.default = TrackService;
