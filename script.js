$(function() {

    $('.image img:gt(0)').hide(); // to hide all but the first image when page loads

    setInterval(function()
    {
        $('.image :first-child').fadeOut(-10)
            .next().fadeIn(-10).end().appendTo('.image');
    },5000);
});
