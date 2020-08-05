'use strict'

// const electron = require('electron')
//const { app } = require('electron')
//const clipboard = electron.clipboard
// const log = require('electron-log')
'use strict'

var timecount = 0

function putTime(){
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth + 1
    const p = document.getElementById('infortime')
    p.innerHTML = now.toLocaleTimeString()
    if(timecount > 0){
        timecount = timecount -1
    }
    const c = document.getElementById('timep')
    c.innerHTML = timecount
}



function timerInit(){
    putTime();
    setInterval('putTime()', 1000)
}

function timeset(value){
    timecount = value

}

const button = document.getElementById('qb')
button.addEventListener('click', function(clickEvent) {
    const p = document.getElementById('timep')
    p.innerHTML = 'Quit'
    window.close()
})

const bt = document.getElementsByClassName('btime')
for(var $i = 0; $i < bt.length; $i++){
    const cbutton = bt[$i]
    cbutton.addEventListener('click', function(clickEvent) {
        timecount = cbutton.getAttribute('value') 
        timecount = Number(timecount) + 5
        const p = document.getElementById('timep')
        p.innerHTML = timecount
    })
}