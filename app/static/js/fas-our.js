$(document).ready(function(){
    $('.ne-sig').click(function(){
        $('.sig-up-cont').show('slow');
        $('.log-in-cont').hide('slow');
    })
    $('.old-log').click(function(){
        $('.log-in-cont').show('slow');
        $('.sig-up-cont').hide('slow');
    })
    /*$('.profile-link').click(function(event){
        event.stopPropagation();
        $('.pro-submenu').show();
    })
    $(document).click(function(){
        $('.pro-submenu').hide();
    })*/
//    $('.second-pr-list li').mouseover(function(){
//        $('.second-pr-list > li > div').show();
//    })
//    $('.second-pr-list li').mouseleave(function(){
//        $('.track-mouse-over-popup').hide();
//    })
})