/**
 * Created by olivier on 05/04/2016.
 */
var remote = require('remote');
var ipc = require('ipc');
var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([{
    label: 'Knook',
    submenu: [{
        label: 'Preferences',
        accelerator: 'Cmd+,',
        click: function () {
            ipc.send('toggle-prefs');
        }
    }]
}
]);

Menu.setApplicationMenu(menu);