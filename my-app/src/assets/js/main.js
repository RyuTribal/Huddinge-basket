$(document).ready(function(){
    $('.iconselected a').click(function(e){
        e.preventDefault();
    });
    $('.icon').click(function(){
        $('.icon').removeClass('iconselected');
        $(this).addClass('iconselected');
    })
});