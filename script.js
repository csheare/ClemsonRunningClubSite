$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);


$('tr').hide().filter(function () {
    return $(this).find('td[colspan]').length;
}).addClass('header2').css('display', 'table-row').click(function () {
    $(this).nextUntil('tr.header2').css('display', function (i, v) {
        return this.style.display === 'table-row' ? 'none' : 'table-row';
    });
});
