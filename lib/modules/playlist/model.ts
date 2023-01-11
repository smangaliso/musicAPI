import { Track } from "modules/track/model";

export interface Playlist {
  _id?: string;
  name: string;
  creator: string;
  playtime: number;
  trackList: Track[];
}
