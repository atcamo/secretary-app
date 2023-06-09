const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js')
const path = require ('path')

const createWindow =() => {
    const mainWindow = new BrowserWindow ({
        width: 800,
        height: 600,
        minHeight: 300, 
        minWidth: 300,
        webPreferences: {
            preload: path.join(__dirname, '/preload.js')
        }
    })

    mainWindow.loadFile('index.html')

    setMainMenu(mainWindow)

}

app.whenReady().then(() => {
    createWindow()
})