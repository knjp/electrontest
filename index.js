'use strict'

// const electron = require('electron')
//const { app } = require('electron')
//const clipboard = electron.clipboard
// const log = require('electron-log')
'use strict'

function timeset(value){
    const p = document.getElementById('timep')
    p.innerHTML = value
}

const button = document.getElementById('qb')
button.addEventListener('click', function(clickEvent) {
    const p = document.getElementById('timep')
    p.innerHTML = 'Quit'
})

const bt = document.getElementsByClassName('btime')
for(var $i = 0; $i < bt.length; $i++){
    const cbutton = bt[$i]
    cbutton.addEventListener('click', function(clickEvent) {
        const p = document.getElementById('timep')
        p.innerHTML = cbutton.getAttribute('value')
    })
}