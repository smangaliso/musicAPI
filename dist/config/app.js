"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const common_routes_1 = require("../routes/common_routes");
const mongoose = require("mongoose");
const track_routes_1 = require("../routes/track_routes");
const playlist_routes_1 = require("../routes/playlist_routes");
class App {
    constructor() {
        this.mongoUrl = "mongodb://localhost/musicapi";
        this.track_routes = new track_routes_1.TrackRoutes();
        this.playlist_routes = new playlist_routes_1.PlaylistRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.track_routes.routes(this.app);
        this.playlist_routes.routes(this.app);
        this.common_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.set("strictQuery", false);
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
