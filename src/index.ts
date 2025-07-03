import http from "http";
import path from "path";
import express from "express";
import { Server } from "colyseus";
import { MyRoom } from "./rooms/MyRoom"; // ✅ .ts से import

const app = express();
const port = 2567;

app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);

const gameServer = new Server({
  server: server
});

gameServer.define("my_dice_room", MyRoom);

gameServer.listen(port);

console.log(`✅ सर्वर चालू हो गया है`);
console.log(`🚀 गेम खेलने के लिए ब्राउज़र में http://localhost:${port} खोलें`);
