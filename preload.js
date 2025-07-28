
const {contextBridge, ipcRenderer} = require("electron")
var fs = require('fs')
var wav = require('wav')
var Speaker = require('speaker')

contextBridge.exposeInMainWorld(
    "requires", {
    onbeep : () =>{
        file = fs.createReadStream('beep.wav')
        reader = new wav.Reader()
        reader.on('format', function(format){
            reader.pipe(new Speaker(format))
        })
        file.pipe(reader)
    }
})

//const { contextBridge, ipcRenderer } = require('electron');
//const fs = require('fs');
const path = require('path');

contextBridge.exposeInMainWorld('audioAPI', {
  loadSound: (fileName) => {
    const fullPath = path.join(__dirname, fileName);
    const fileData = fs.readFileSync(fullPath);
    const arrayBuffer = fileData.buffer.slice(fileData.byteOffset, fileData.byteOffset + fileData.byteLength);
    return arrayBuffer;
  }
});
