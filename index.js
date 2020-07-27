'use strict'

// const electron = require('electron')
//const { app } = require('electron')
//const clipboard = electron.clipboard
// const log = require('electron-log')
'use strict'

function putTime(){
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth + 1
    const p = document.getElementById('infortime')
    p.innerHTML = now
}

function timeset(value){
    const p = document.getElementById('timep')
    p.innerHTML = value

    var now = new Date().getTime()
    const q = document.getElementById('infortime')
    q.innerHTML = now
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
        const p = document.getElementById('timep')
        p.innerHTML = cbutton.getAttribute('value')
    })
}