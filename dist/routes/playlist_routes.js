"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistRoutes = void 0;
const schema_1 = require("../modules/playlist/schema");
class PlaylistRoutes {
    routes(app) {
        // Get all playlists
        app.get("/playlists", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const playlists = yield schema_1.Playlist.find();
            res.json(playlists);
        }));
        // Get a specific playlist
        app.get("/playlists/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const playlist = yield schema_1.Playlist.findById(req.params.id);
                if (playlist) {
                    res.json(playlist);
                }
                else {
                    res.status(404).send();
                }
            }
            catch (error) {
                res.status(404).send();
            }
        }));
        // Create a new playlist
        app.post("/playlists", (req, res) => __awaiter(this, void 0, void 0, function* () {
            // Validation
            if (!req.body.name) {
                res.status(400).send();
                return;
            }
            try {
                const playlist = new schema_1.Playlist(req.body);
                yield playlist.save();
                res.status(201).json(playlist);
            }
            catch (error) {
                res.status(500).send();
            }
        }));
    }
}
exports.PlaylistRoutes = PlaylistRoutes;
