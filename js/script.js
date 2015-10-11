$(document).ready(function(){
    var menu = $('.fa-bars').click(function(){
                    $('nav').fadeToggle(250);
                    $('#search-bar, #social-bar').fadeOut(200);
            });
    
    var search = $('.fa-search').click(function(){
                    $('#search-bar').fadeToggle(250);
                    $('nav, #social-bar').fadeOut(200);
            });
    
    var social = $('.fa-spinner').click(function(){
                    $('#social-bar').fadeToggle(250);
                    $('nav, #search-bar').fadeOut(200);
            });
 
});