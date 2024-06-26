const {app, BrowserWindow} = require('electron')
const path = require('path')

//function createWindow(){
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
	    nodeIntegration: true,
            preload: `${__dirname}/preload.js`,
        }
    })

    mainWindow.loadFile('index.html')
    //mainWindow.webContents.openDevTools()
}

app.whenReady().then(()=>{
    createWindow()
})

app.on('window-all-closed', function(){
    if(process.platform != 'darwin') app.quit()
})


// app.commandLine.appendSwitch('no-sandox');
// app.commandLine.appendSwitch('in-progress-gpu');
