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
exports.TrackRoutes = void 0;
const schema_1 = require("../modules/track/schema");
class TrackRoutes {
    routes(app) {
        app.get("/tracks", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tracks = yield schema_1.Track.find();
            res.json(tracks);
        }));
        app.get("/tracks/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const track = yield schema_1.Track.findById(req.params.id);
                if (track) {
                    res.json(track);
                }
                else {
                    res.status(404).send();
                }
            }
            catch (error) {
                res.status(404).send();
            }
        }));
        app.post("/tracks", (req, res) => __awaiter(this, void 0, void 0, function* () {
            // Validation
            if (!req.body.name || !req.body.artist) {
                res.status(400).send();
                return;
            }
            try {
                const track = new schema_1.Track(req.body);
                yield track.save();
                res.status(201).json(track);
            }
            catch (error) {
                res.status(500).send();
            }
        }));
        app.put("/tracks/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            // Validation
            if (!req.body.name || !req.body.artist) {
                res.status(400).send();
                return;
            }
            try {
                const track = yield schema_1.Track.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                });
                if (!track) {
                    res.status(404).send();
                    return;
                }
                res.json(track);
            }
            catch (error) {
                res.status(500).send();
            }
        }));
    }
}
exports.TrackRoutes = TrackRoutes;
