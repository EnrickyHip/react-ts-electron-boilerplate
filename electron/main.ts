import { app, BrowserWindow } from "electron";
import path from "path";

export default path.resolve;

function createWindow() {
  const win = new BrowserWindow({ width: 1200, height: 700 });
  // win.loadFile(path.resolve(__dirname, "index.html")); //for production.
  win.loadURL("http://localhost:3000/"); //for development.
}

app.on("ready", createWindow);
