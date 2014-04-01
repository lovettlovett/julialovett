$('.flip').click(function(){
    $(this).find('.card').addClass('flipped').mouseleave(function(){
        $(this).removeClass('flipped');
    });
    return false;
});

$('.miniflip').click(function(){
    $(this).find('.minicard').addClass('miniflipped').mouseleave(function(){
        $(this).removeClass('miniflipped');
    });
    return false;
});