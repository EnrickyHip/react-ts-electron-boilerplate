import { app, BrowserWindow } from "electron";
import path from "path";

export default path.resolve;

function createWindow() {
  const win = new BrowserWindow({ width: 1200, height: 700 });
  win.loadURL("http://localhost:3000/");
}

app.on("ready", createWindow);
