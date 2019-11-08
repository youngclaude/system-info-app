const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

// SET ENV
process.env.NODE_ENV = 'production';

function createWindow(){
    // create the window object
    win = new BrowserWindow({
        width: 800, 
        height: 600, 
        icon: __dirname+'/images/pineapple-icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    // load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocal: 'file:',
        slashes: true
    }));

    // Open devtools
    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// Run create windows are closed
app.on('ready', createWindow);

// Quite when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})