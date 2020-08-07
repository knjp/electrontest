
var fs = require('fs')
var wav = require('wav')
var Speaker = require('speaker')

process.once('loaded',() =>{
//var file = fs.createReadStream('beep.wav')
//var reader = new wav.Reader()
//reader.on('format', function(format){
//    reader.pipe(new Speaker(format))
//})

    onbeep = function(){
        file = fs.createReadStream('beep.wav')
        reader = new wav.Reader()
        reader.on('format', function(format){
            reader.pipe(new Speaker(format))
        })
        file.pipe(reader)
    }
})