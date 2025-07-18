var timecount = 0
var lasttime = 0
var rnum = 0

function putTime(){
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth + 1
    const p = document.getElementById('infortime')
    p.innerHTML = now.toLocaleTimeString()
    if(rnum > 0){
        if(timecount > 0){
            timecount = timecount -1
            if(timecount == 0){
                rnum = rnum - 1 
                timecount = lasttime
                window.requires.onbeep()
            }
        }
    }else{
        timecount = 0
    }
    const c = document.getElementById('timep')
    c.innerHTML = timecount
    const d = document.getElementById('repnum')
    d.innerHTML = rnum
}



function timerInit(){
    putTime();
    setInterval('putTime()', 1000)
}

function timeset(value, repeat){
    timecount = value
    rnum = repeat
}

const button = document.getElementById('qb')
button.addEventListener('click', function(clickEvent) {
    const p = document.getElementById('timep')
    p.innerHTML = 'Quit'
    window.close()
})

const bclear = document.getElementById('clear')
bclear.addEventListener('click', function(clickEvent) {
    timecount = 0
    rnum = 0
})

const bt = document.getElementsByClassName('btime')
for(var $i = 0; $i < bt.length; $i++){
    const cbutton = bt[$i]
    cbutton.addEventListener('click', function(clickEvent) {
        timecount = cbutton.getAttribute('value') 
        timecount = Number(timecount) + 2
        lasttime = 0
        rnum = 1
        const p = document.getElementById('timep')
        p.innerHTML = timecount
    })
}

const bt4 = document.getElementsByClassName('btime4')
for(var $i = 0; $i < bt4.length; $i++){
    const cbutton = bt4[$i]
    cbutton.addEventListener('click', function(clickEvent) {
        timecount = cbutton.getAttribute('value') 
        timecount = Number(timecount) + 2
        lasttime = timecount
        rnum = 4
        const p = document.getElementById('timep')
        p.innerHTML = timecount
    })
}

const audioContext = new AudioContext();
const gainNode = audioContext.createGain();
const volumeSlider = document.getElementById('volume');

volumeSlider.addEventListener('input', () => {
  gainNode.gain.value = volumeSlider.value;
});

document.getElementById('playtest').addEventListener('click', async () => {
  const response = await fetch('gameover.wav');
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;

  source.connect(gainNode).connect(audioContext.destination);
  source.start();
});

