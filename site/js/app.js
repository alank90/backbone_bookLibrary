// site/js/app.js

var app = app || {};

//This initiates the whole shabang and renders initial view
$(function() {
    $( "#releaseDate").datepicker();
    new app.LibraryView();
});
