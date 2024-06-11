import { app, BrowserWindow } from "electron";
import  { dirname, join } from "path";
import { fileURLToPath } from "url";
import isDev from "electron-is-dev";

import process from "process"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    fullscreen:true,
    autoHideMenuBar: true,
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:5173"
      : `file://${join(__dirname, "../dist/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools();
  }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
