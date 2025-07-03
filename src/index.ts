import http from "http";
import path from "path";
import express from "express";
import { Server } from "colyseus";
import { MyRoom } from "./rooms/MyRoom";

const app = express();
const port = 2567;

// Static files (frontend if needed)
app.use(express.static(path.join(__dirname, "../public")));

const server = http.createServer(app);

const gameServer = new Server({
  server,
});

gameServer.define("my_dice_room", MyRoom);

gameServer.listen(port);

console.log("✅ Server started!");
console.log(`🎮 Open http://localhost:${port} in your browser to play`);
