cats = ['poplinre', 'chewie', 'adora', 'beauty', 'calico'];
clicks = [2, 3, 5, 3, 6];
var currentIdx = 0;

var catList = $('#cat-list');

for(var i=0; i < cats.length; i++) {
    $('<li />', {'cat-idx': i}).append('<h2>'+ cats[i] + '</h2>')
        .appendTo(catList);
}
$('#cat-detail').append('<h2 id="cat-name">'+ cats[i] + '</h2>')
        .append('<img id="cat-img" src="images/' + cats[i] + '.jpg" />')
        .append('<h2 id="cat-click" class="click">' + clicks[i] + '</h2>');

var catName = $('#cat-name');
var catImg = $('#cat-img');
var catClick = $('#cat-click');

function setDetail() {
    catName.text(cats[currentIdx]);
    catImg.attr('src', 'images/' + cats[currentIdx] + '.jpg');
    catClick.text(clicks[currentIdx]);
}

setDetail();

catList.on('click', 'li', function() {
    currentIdx = $(this).attr('cat-idx');
    setDetail();
});

$('img').on('click', function() {
    clicks[currentIdx] += 1;
    catClick.text(clicks[currentIdx]);
});