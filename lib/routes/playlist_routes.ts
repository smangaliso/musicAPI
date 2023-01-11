import { Application, Request, Response } from "express";
import { Playlist } from "../modules/playlist/schema";

export class PlaylistRoutes {
  public routes(app: Application) {
    // Get all playlists
    app.get("/playlists", async (req, res) => {
      const playlists = await Playlist.find();
      res.json(playlists);
    });

    // Get a specific playlist
    app.get("/playlists/:id", async (req, res) => {
      try {
        const playlist = await Playlist.findById(req.params.id);
        if (playlist) {
          res.json(playlist);
        } else {
          res.status(404).send();
        }
      } catch (error) {
        res.status(404).send();
      }
    });

    // Create a new playlist
    app.post("/playlists", async (req, res) => {
      // Validation
      if (!req.body.name) {
        res.status(400).send();
        return;
      }

      try {
        const playlist = new Playlist(req.body);
        await playlist.save();
        res.status(201).json(playlist);
      } catch (error) {
        res.status(500).send();
      }
    });


    
  }
}
