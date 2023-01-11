"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class TrackService {
    createTrack(track_params, callback) {
        const _session = new schema_1.Track(track_params);
        _session.save(callback);
    }
    filterTrack(query, callback) {
        schema_1.Track.findOne(query, callback);
    }
    updateTrack(track_params, callback) {
        const query = { _id: track_params._id };
        schema_1.Track.findOneAndUpdate(query, track_params, callback);
    }
    deleteTrack(_id, callback) {
        const query = { _id: _id };
        schema_1.Track.deleteOne(query, callback);
    }
}
exports.default = TrackService;
