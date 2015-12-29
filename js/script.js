cats = ['poplinre', 'chewie'];
clicks = [2, 3];

var container = $('#cat-container');

for(var i=0; i < 2; i++) {
    $('<div />').css('width', '50%')
        .append('<h2>'+ cats[i] + '</h2>')
        .append('<img src="images/' + cats[i] + '.jpg" />')
        .append('<h2 class="click">' + clicks[i] + '</h2>')
        .appendTo(container);
}

$('img').on('click', function() {
    var click = $(this).parent().find('.click');
    var count = parseInt(click.text()) + 1;
    click.text(count);
});