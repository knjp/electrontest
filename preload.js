
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