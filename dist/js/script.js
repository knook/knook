/**
 * Created by olivier on 07/04/2016.
 */
$(document).ready(function () {
    $('#sidebar').css('height', window.innerHeight-50);

    $("#sidebar").resizable({
        handles: 'e, w'
    });

    $('.nav-list-sub.collapse.in').click(function (e) {
        console.log('eh dude ! I got it!');
        e.preventDefault();
    });

    $('#root').css('overflow', 'hidden');
});