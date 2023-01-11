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

    //update
    app.put("/playlists/:id", async (req, res) => {
      try {
        const playlist = await Playlist.findById(req.params.id);
        if (!playlist) {
          res.status(404).send();
          return;
        }
        // update fields
        if (req.body.name) {
          playlist.name = req.body.name;
        }
        if (req.body.creator) {
          playlist.creator = req.body.creator;
        }
        if (req.body.playtime) {
          playlist.playtime = req.body.playtime;
        }
        if (req.body.trackList) {
          playlist.trackList = req.body.trackList;
        }
        // save
        await playlist.save();
        res.json(playlist);
      } catch (error) {
        res.status(500).send();
      }
    });

    // delete

    app.delete("/playlists/:id", async (req, res) => {
      try {
        const deletedTrack = await Playlist.findByIdAndDelete(req.params.id);
        if (!deletedTrack) return res.status(404).send();
        res.status(204).send();
       
      } catch (error) {
        res.status(500).send();
      }
    });
  }
}
