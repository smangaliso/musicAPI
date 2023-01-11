import * as express from "express";
import * as bodyParser from "body-parser";

import { CommonRoutes } from "../routes/common_routes";
import * as mongoose from "mongoose";

import { TrackRoutes } from "../routes/track_routes";
import { PlaylistRoutes } from "../routes/playlist_routes";

class App {
  public app: express.Application;
  public mongoUrl: string = "mongodb://localhost/musicapi";

  private track_routes: TrackRoutes = new TrackRoutes();
  private playlist_routes: PlaylistRoutes = new PlaylistRoutes();
  private common_routes: CommonRoutes = new CommonRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.track_routes.routes(this.app);
    this.playlist_routes.routes(this.app);
    this.common_routes.route(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.set("strictQuery", false);
    mongoose.connect(this.mongoUrl);
  }
}
export default new App().app;
