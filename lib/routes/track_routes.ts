import { Application, Request, Response } from "express";
import  {Track}  from "../modules/track/schema";

export class TrackRoutes {
  public routes(app: Application) {
    app.get("/tracks", async (req, res) => {
      const tracks = await Track.find();
      res.json(tracks);
    });

    app.get("/tracks/:id", async (req, res) => {
      try {
        const track = await Track.findById(req.params.id);
        if (track) {
          res.json(track);
        } else {
          res.status(404).send();
        }
      } catch (error) {
        res.status(404).send();
      }
    });

    app.post("/tracks", async (req, res) => {
      // Validation
      if (!req.body.name || !req.body.artist) {
        res.status(400).send();
        return;
      }

      try {
        const track = new Track(req.body);
        await track.save();
        res.status(201).json(track);
      } catch (error) {
        res.status(500).send();
      }
    });

    app.put("/tracks/:id", async (req, res) => {
      // Validation
      if (!req.body.name || !req.body.artist) {
        res.status(400).send();
        return;
      }

      try {
        const track = await Track.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        if (!track) {
          res.status(404).send();
          return;
        }
        res.json(track);
      } catch (error) {
        res.status(500).send();
      }
    });
  }
}
