/**
 * Created by olivier on 05/04/2016.
 */
var path = require('path');
var options = [
    {
        title: "Basic Notification",
        body: "Short message part"
    }
];

function doNotify() {
    new Notification(options[0].title, options[0]);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("basic").addEventListener("click", doNotify);
});