var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var ipc = require('ipc');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1000, height: 625});

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000/');

    mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
    mainWindow = null;
    });


    var prefsWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false
    });

    prefsWindow.loadURL('http://localhost:3000/prefs');
    ipc.on('toggle-prefs', function () {
        if(prefsWindow.isVisible())
            prefsWindow.hide();
        else
            prefsWindow.show();
    });

    // Emitted when the window is closed.
    prefsWindow.on('closing', function() {
        prefsWindow.hide();
    });

    // Continue to handle mainWindow "close" event here
    prefsWindow.on('close', function(e){
        e.preventDefault();
        prefsWindow.hide();
    });
});


