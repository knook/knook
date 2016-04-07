/* eslint strict: 0 */
'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const crashReporter = electron.crashReporter;
const shell = electron.shell;
let menu;
let template;
let mainWindow = null;

var ipc = require('ipc');


crashReporter.start();

if (process.env.NODE_ENV === 'development') {
    require('electron-debug')();
}


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false,
        width: 1024,
        height: 728
    });

    mainWindow.loadURL(`file://${__dirname}/app/app.html`);

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();
        mainWindow.focus();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Dev Tools
    mainWindow.openDevTools();

    // Top menu bar
    template = [{
        label: 'Knook',
        submenu: [{
            label: 'About Knook',
            selector: 'orderFrontStandardAboutPanel:'
        }, {
            type: 'separator'
        }, {
            label: 'Services',
            submenu: []
        }, {
            type: 'separator'
        }, {
            label: 'Hide Knook',
            accelerator: 'Command+H',
            selector: 'hide:'
        }, {
            label: 'Hide Others',
            accelerator: 'Command+Shift+H',
            selector: 'hideOtherApplications:'
        }, {
            label: 'Show All',
            selector: 'unhideAllApplications:'
        }, {
            type: 'separator'
        }, {
            label: 'Quit',
            accelerator: 'Command+Q',
            click() {
                app.quit();
            }
        }]
    }, {
        label: 'Edit',
        submenu: [{
            label: 'Undo',
            accelerator: 'Command+Z',
            selector: 'undo:'
        }, {
            label: 'Redo',
            accelerator: 'Shift+Command+Z',
            selector: 'redo:'
        }, {
            type: 'separator'
        }, {
            label: 'Cut',
            accelerator: 'Command+X',
            selector: 'cut:'
        }, {
            label: 'Copy',
            accelerator: 'Command+C',
            selector: 'copy:'
        }, {
            label: 'Paste',
            accelerator: 'Command+V',
            selector: 'paste:'
        }, {
            label: 'Select All',
            accelerator: 'Command+A',
            selector: 'selectAll:'
        }]
    }, {
        label: 'View',
        submenu: (process.env.NODE_ENV === 'development') ? [{
            label: 'Reload',
            accelerator: 'Command+R',
            click() {
                mainWindow.restart();
            }
        }, {
            label: 'Toggle Full Screen',
            accelerator: 'Ctrl+Command+F',
            click() {
                mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }
        }, {
            label: 'Toggle Developer Tools',
            accelerator: 'Alt+Command+I',
            click() {
                mainWindow.toggleDevTools();
            }
        }] : [{
            label: 'Toggle Full Screen',
            accelerator: 'Ctrl+Command+F',
            click() {
                mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }
        }]
    }, {
        label: 'Window',
        submenu: [{
            label: 'Minimize',
            accelerator: 'Command+M',
            selector: 'performMiniaturize:'
        }, {
            label: 'Close',
            accelerator: 'Command+W',
            selector: 'performClose:'
        }, {
            type: 'separator'
        }, {
            label: 'Bring All to Front',
            selector: 'arrangeInFront:'
        }]
    }];

    menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});
