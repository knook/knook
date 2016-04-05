// Mixing jQuery and Node.js code in the same file? Yes please!

$(function(){

    // Electron's UI library. We will need it for later.
    var shell = require('shell');

    var winHeight = window.innerHeight;
    $('#sidebar-wrapper').css('height', winHeight-50);



});